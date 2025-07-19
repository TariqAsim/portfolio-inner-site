import React, { useEffect, useRef, useState } from 'react';
import { DosPlayer as Instance, DosPlayerFactoryType } from 'js-dos';

declare const Dos: DosPlayerFactoryType;

export interface PlayerProps {
    width: number;
    height: number;
    bundleUrl: string;
}

export default function DosPlayer(props: PlayerProps) {
    const rootRef = useRef<HTMLDivElement>(null);
    const [dos, setDos] = useState<Instance | null>(null);

    useEffect(() => {
        if (rootRef === null || rootRef.current === null) {
            return;
        }

        const root = rootRef.current as HTMLDivElement;
        
        try {
            const instance = Dos(root);
            setDos(instance);
            
            const elements = rootRef.current.getElementsByClassName('flex-grow-0');
            while (elements.length > 0) {
                elements[0].remove();
            }
        } catch (error) {
            console.warn('Failed to initialize DOS instance:', error);
        }

        return () => {
            try {
                if (dos) {
                    dos.stop();
                }
            } catch (error) {
                console.warn('Error stopping DOS instance:', error);
            }
        };
    }, [rootRef]);

    useEffect(() => {
        if (dos !== null) {
            try {
                dos.run(props.bundleUrl);
            } catch (error) {
                console.warn('Failed to run DOS bundle:', error);
            }
        }
    }, [dos, props.bundleUrl]);
    
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
}
