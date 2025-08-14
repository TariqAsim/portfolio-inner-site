import React, { useState, useRef, useCallback } from 'react';
import DosPlayer, { DosPlayerRef } from '../dos/DosPlayer';
import Window from '../os/Window';

export interface ScrabbleAppProps extends WindowAppProps {}

const ScrabbleApp: React.FC<ScrabbleAppProps> = (props) => {
    const [width, setWidth] = useState(920);
    const [height, setHeight] = useState(750);
    const dosPlayerRef = useRef<DosPlayerRef>(null);

    // Memoized close handler following React best practices
    const handleClose = useCallback(() => {
        // Call DOS player cleanup - it handles all audio cleanup internally
        if (dosPlayerRef.current) {
            dosPlayerRef.current.cleanup();
        }
        
        // Call the original close handler
        props.onClose();
    }, [props.onClose]);

    return (
        <Window
            top={10}
            left={10}
            width={width}
            height={height}
            windowTitle="Scrabble"
            windowBarIcon="windowGameIcon"
            windowBarColor="#941d13"
            bottomLeftText={'Powered by JSDOS & DOSBox'}
            closeWindow={handleClose}
            onInteract={props.onInteract}
            onWidthChange={setWidth}
            onHeightChange={setHeight}
            minimizeWindow={props.onMinimize}
        >
            <DosPlayer
                ref={dosPlayerRef}
                width={width}
                height={height}
                bundleUrl="scrabble.jsdos"
            />
        </Window>
    );
};

export default ScrabbleApp;
