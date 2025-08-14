import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle, useCallback } from 'react';
import { DosPlayer as Instance, DosPlayerFactoryType } from 'js-dos';

declare const Dos: DosPlayerFactoryType;

export interface PlayerProps {
    width: number;
    height: number;
    bundleUrl: string;
}

export interface DosPlayerRef {
    cleanup: () => void;
}

const DosPlayer = forwardRef<DosPlayerRef, PlayerProps>((props, ref) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const dosInstanceRef = useRef<Instance | null>(null);
    const audioElementsRef = useRef<Set<HTMLAudioElement>>(new Set());
    const audioContextRef = useRef<AudioContext | null>(null);
    const [dos, setDos] = useState<Instance | null>(null);

    // Memoized cleanup function following React best practices
    const cleanupDosInstance = useCallback(() => {
        if (dosInstanceRef.current) {
            try {
                // Stop the DOS instance first
                dosInstanceRef.current.stop();
                
                // Clean up tracked audio elements (only ones created by this instance)
                audioElementsRef.current.forEach(audio => {
                    try {
                        if (!audio.paused) {
                            audio.pause();
                            audio.currentTime = 0;
                        }
                        // Remove from DOM if it's still connected
                        if (audio.isConnected) {
                            audio.remove();
                        }
                    } catch (error) {
                        console.warn('Error cleaning up audio element:', error);
                    }
                });
                audioElementsRef.current.clear();

                // Clean up tracked AudioContext (only the one we created/know about)
                if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
                    audioContextRef.current.close().catch(console.warn);
                    audioContextRef.current = null;
                }

                // Clean up any audio nodes specifically within our component's DOM
                if (rootRef.current) {
                    const localAudioNodes = rootRef.current.querySelectorAll('audio');
                    localAudioNodes.forEach(node => {
                        try {
                            node.pause();
                            node.remove();
                        } catch (error) {
                            console.warn('Error cleaning up local audio node:', error);
                        }
                    });
                }

                console.log('DOS instance cleaned up successfully');
            } catch (error) {
                console.warn('Error during DOS cleanup:', error);
            } finally {
                dosInstanceRef.current = null;
            }
        }
    }, []); // Empty dependency array since it only uses refs

    // Track audio elements created by js-dos
    const trackAudioElement = useCallback((audio: HTMLAudioElement) => {
        audioElementsRef.current.add(audio);
        
        // Clean up when audio ends or errors
        const cleanup = () => audioElementsRef.current.delete(audio);
        audio.addEventListener('ended', cleanup, { once: true });
        audio.addEventListener('error', cleanup, { once: true });
    }, []);

    // Override global Audio constructor to track audio elements (js-dos specific)
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const originalAudio = window.Audio;
        const originalCreateElement = document.createElement;

        // Intercept Audio constructor calls within our component
        const interceptAudio = function(this: any, ...args: any[]) {
            const audio = new originalAudio(...args);
            // Only track if we're currently mounted and have a DOS instance
            if (dosInstanceRef.current && rootRef.current) {
                trackAudioElement(audio);
            }
            return audio;
        };

        // Intercept document.createElement for audio elements
        const interceptCreateElement = function(this: Document, tagName: string, options?: any) {
            const element = originalCreateElement.call(this, tagName, options);
            if (tagName.toLowerCase() === 'audio' && dosInstanceRef.current && rootRef.current) {
                trackAudioElement(element as HTMLAudioElement);
            }
            return element;
        };

        // Apply interceptors
        window.Audio = interceptAudio as any;
        document.createElement = interceptCreateElement as any;

        return () => {
            // Restore original functions
            window.Audio = originalAudio;
            document.createElement = originalCreateElement;
        };
    }, []); // Run once on mount

    // Track AudioContext if js-dos creates one
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const originalAudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (!originalAudioContext) return;

        const interceptAudioContext = function(this: any, ...args: any[]) {
            const context = new originalAudioContext(...args);
            // Only track if we're currently mounted and have a DOS instance
            if (dosInstanceRef.current && !audioContextRef.current) {
                audioContextRef.current = context;
            }
            return context;
        };

        // Apply interceptor
        if (window.AudioContext) {
            window.AudioContext = interceptAudioContext as any;
        }
        if ((window as any).webkitAudioContext) {
            (window as any).webkitAudioContext = interceptAudioContext as any;
        }

        return () => {
            // Restore original
            if (window.AudioContext) {
                window.AudioContext = originalAudioContext;
            }
            if ((window as any).webkitAudioContext) {
                (window as any).webkitAudioContext = originalAudioContext;
            }
        };
    }, []); // Run once on mount

    // Initialize DOS instance - only depends on rootRef being available
    useEffect(() => {
        if (!rootRef.current) {
            return;
        }

        const root = rootRef.current;
        let instance: Instance | null = null;

        try {
            instance = Dos(root);
            dosInstanceRef.current = instance;
            setDos(instance);

            // Clean up js-dos UI elements that we don't want
            const elements = root.getElementsByClassName('flex-grow-0');
            while (elements.length > 0) {
                elements[0].remove();
            }
        } catch (error) {
            console.warn('Failed to initialize DOS instance:', error);
        }

        // Cleanup function that will run when component unmounts or rootRef changes
        return () => {
            cleanupDosInstance();
        };
    }, []); // Empty dependency - only run once on mount

    // Run DOS bundle when dos instance or bundleUrl changes
    useEffect(() => {
        if (!dos || !props.bundleUrl) return;

        try {
            dos.run(props.bundleUrl);
        } catch (error) {
            console.warn('Failed to run DOS bundle:', error);
        }
    }, [dos, props.bundleUrl]);

    // Expose cleanup function to parent components
    useImperativeHandle(ref, () => ({
        cleanup: cleanupDosInstance
    }), [cleanupDosInstance]);

    return (
        <div
            ref={rootRef}
            style={{
                width: props.width,
                height: props.height,
                position: 'absolute',
            }}
        ></div>
    );
});

DosPlayer.displayName = 'DosPlayer';

export default DosPlayer;
