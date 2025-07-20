import React from 'react';
import Window from '../os/Window';
import Wordle from '../wordle/Wordle';

export interface TariqleAppProps extends WindowAppProps {}

const TariqleApp: React.FC<TariqleAppProps> = (props) => {
    return (
        <Window
            top={20}
            left={300}
            width={600}
            height={860}
            windowBarIcon="windowGameIcon"
            windowTitle="Tariqle"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2025 Tariq Asim'}
        >
            <div className="site-page">
                <Wordle />
            </div>
        </Window>
    );
};

export default TariqleApp;
