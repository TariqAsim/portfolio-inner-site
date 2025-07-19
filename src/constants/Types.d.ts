declare interface StyleSheetCSS {
    [key: string]: React.CSSProperties;
}

declare interface WindowAppProps {
    onClose: () => void;
    onInteract: () => void;
    onMinimize: () => void;
}

declare type DesktopWindows = {
    [key: string]: {
        zIndex: number;
        minimized: boolean;
        name: string;
        icon: IconName;
        appKey: string;
        props?: any;
    };
};
