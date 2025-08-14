import React, { useState, useRef, useCallback } from 'react';
import DosPlayer, { DosPlayerRef } from '../dos/DosPlayer';
import Window from '../os/Window';

export interface DoomAppProps extends WindowAppProps {}

const DoomApp: React.FC<DoomAppProps> = (props) => {
    const [width, setWidth] = useState(980);
    const [height, setHeight] = useState(670);
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
            windowTitle="Doom"
            windowBarColor="#1C1C1C"
            windowBarIcon="windowGameIcon"
            bottomLeftText={'Powered by JSDOS & DOSBox'}
            closeWindow={handleClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            onWidthChange={setWidth}
            onHeightChange={setHeight}
        >
            <DosPlayer 
                ref={dosPlayerRef}
                width={width} 
                height={height} 
                bundleUrl="doom.jsdos" 
            />
        </Window>
    );
};

export default DoomApp;
