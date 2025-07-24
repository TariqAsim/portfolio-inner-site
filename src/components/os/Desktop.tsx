import React, { useCallback, useEffect, useState } from 'react';
import Colors from '../../constants/colors';
import ShowcaseExplorer from '../applications/ShowcaseExplorer';
import Doom from '../applications/Doom';
import OregonTrail from '../applications/OregonTrail';
import ShutdownSequence from './ShutdownSequence';
// import ThisComputer from '../applications/ThisComputer';
import Toolbar from './Toolbar';
import DesktopShortcut, { DesktopShortcutProps } from './DesktopShortcut';
import Scrabble from '../applications/Scrabble';
import { IconName } from '../../assets/icons';
import TariqleApp from '../applications/Tariqle';
import PacmanApp from '../applications/Pacman';
import win98wp from '../../assets/wallpapers/win-98-wp.jpg';
import win98wp3 from '../../assets/wallpapers/win-98-wp-3.png';
import win2000wp from '../../assets/wallpapers/win-2000-wp.jpg';
import win20002 from '../../assets/wallpapers/win-2000-2.png';
import WallpaperPicker from './WallpaperPicker';

export interface DesktopProps {}

type ExtendedWindowAppProps<T> = T & WindowAppProps;

const Desktop: React.FC<DesktopProps> = (props) => {
    const [windows, setWindows] = useState<DesktopWindows>({});
    const [shortcuts, setShortcuts] = useState<DesktopShortcutProps[]>([]);
    const [shutdown, setShutdown] = useState(false);
    const [numShutdowns, setNumShutdowns] = useState(1);
    // Wallpaper state and options must be inside the component
    const [wallpaper, setWallpaper] = useState<string>('');
    const wallpaperOptions = [
        { name: 'Windows 98', url: win98wp },
        { name: 'Windows 98 (Alt 2)', url: win98wp3 },
        { name: 'Windows 2000', url: win2000wp },
        { name: 'Windows 2000 (Alt 2)', url: win20002 },
    ];
    const APPLICATIONS: {
        [key in string]: {
            key: string;
            name: string;
            shortcutIcon: IconName;
            component: React.FC<ExtendedWindowAppProps<any>>;
        };
    } = {
        // computer: {
        //     key: 'computer',
        //     name: 'This Computer',
        //     shortcutIcon: 'computerBig',
        //     component: ThisComputer,
        // },
        showcase: {
            key: 'showcase',
            name: 'My Showcase',
            shortcutIcon: 'showcaseIcon',
            component: ShowcaseExplorer,
        },
        doom: {
            key: 'doom',
            name: 'Doom',
            shortcutIcon: 'doomIcon',
            component: Doom,
        },
        scrabble: {
            key: 'scrabble',
            name: 'Scrabble',
            shortcutIcon: 'scrabbleIcon',
            component: Scrabble,
        },
        pacman: {
            key: 'pacman',
            name: 'Pacman',
            shortcutIcon: 'pacmanIcon',
            component: PacmanApp,
        },
        tariqle: {
            key: 'tariqle',
            name: 'Tariqle',
            shortcutIcon: 'tariqleIcon',
            component: TariqleApp,
        },
        trail: {
            key: 'trail',
            name: 'The Oregon Trail',
            shortcutIcon: 'trailIcon',
            component: OregonTrail,
        },
        wallpaper: {
            key: 'wallpaper',
            name: 'Display Properties',
            shortcutIcon: 'windowExplorerIcon',
            component: (props: any) => (
                <WallpaperPicker
                    wallpapers={wallpaperOptions}
                    currentWallpaper={wallpaper}
                    onSelect={() => {}}
                    onApply={(url) => {
                        setWallpaper(url || '');
                        props.onClose();
                    }}
                    onCancel={props.onClose}
                    minimizeWindow={props.onMinimize}
                />
            ),
        },
    };
    // Context menu state
    const [contextMenu, setContextMenu] = useState<{
        visible: boolean;
        x: number;
        y: number;
    }>({ visible: false, x: 0, y: 0 });

    // Handle right-click on desktop
    const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
        // Only show context menu if right-clicking directly on the desktop background
        if (e.target !== e.currentTarget) return;
        e.preventDefault();
        setContextMenu({ visible: true, x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        if (shutdown === true) {
            rebootDesktop();
        }
    }, [shutdown]);

    useEffect(() => {
        const newShortcuts: DesktopShortcutProps[] = [];
        Object.keys(APPLICATIONS).forEach((key) => {
            const app = APPLICATIONS[key];
            newShortcuts.push({
                shortcutName: app.name,
                icon: app.shortcutIcon,
                onOpen: () => {
                    addWindow(app.key, {});
                },
            });
        });
        newShortcuts.forEach((shortcut) => {
            if (shortcut.shortcutName === 'My Showcase') {
                shortcut.onOpen();
            }
        });
        setShortcuts(newShortcuts);
    }, []);

    const rebootDesktop = useCallback(() => {
        setWindows({});
    }, []);

    const removeWindow = useCallback((key: string) => {
        setTimeout(() => {
            setWindows((prevWindows) => {
                const newWindows = { ...prevWindows };
                delete newWindows[key];
                return newWindows;
            });
        }, 100);
    }, []);

    const minimizeWindow = useCallback((key: string) => {
        setWindows((prevWindows) => {
            const newWindows = { ...prevWindows };
            newWindows[key].minimized = true;
            return newWindows;
        });
    }, []);

    const getHighestZIndex = useCallback((): number => {
        let highestZIndex = 0;
        Object.keys(windows).forEach((key) => {
            const window = windows[key];
            if (window) {
                if (window.zIndex > highestZIndex)
                    highestZIndex = window.zIndex;
            }
        });
        return highestZIndex;
    }, [windows]);

    const toggleMinimize = useCallback(
        (key: string) => {
            setWindows((prevWindows) => {
                const newWindows = { ...prevWindows };
                newWindows[key].minimized = !newWindows[key].minimized;
                newWindows[key].zIndex = getHighestZIndex() + 1;
                return newWindows;
            });
        },
        [getHighestZIndex]
    );

    const onWindowInteract = useCallback(
        (key: string) => {
            setWindows((prevWindows) => ({
                ...prevWindows,
                [key]: {
                    ...prevWindows[key],
                    zIndex: 1 + getHighestZIndex(),
                },
            }));
        },
        [setWindows, getHighestZIndex]
    );

    const startShutdown = useCallback(() => {
        setTimeout(() => {
            setShutdown(true);
            setNumShutdowns(numShutdowns + 1);
        }, 600);
    }, [numShutdowns]);

    // Refactored addWindow: only store metadata, not JSX
    const addWindow = useCallback(
        (key: string, props: any) => {
            setWindows((prevState) => ({
                ...prevState,
                [key]: {
                    zIndex: getHighestZIndex() + 1,
                    minimized: false,
                    name: APPLICATIONS[key].name,
                    icon: APPLICATIONS[key].shortcutIcon,
                    appKey: key,
                    props,
                },
            }));
        },
        [getHighestZIndex]
    );

    return !shutdown ? (
        <div
            style={{
                ...styles.desktop,
                backgroundImage: wallpaper ? `url(${wallpaper})` : 'none',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
            onContextMenu={handleContextMenu}
        >
            {/* Context Menu */}
            {contextMenu.visible && (
                <div
                    style={{
                        position: 'fixed',
                        top: contextMenu.y,
                        left: contextMenu.x,
                        background: '#e0e0e0',
                        border: '1px solid #888',
                        zIndex: 9999,
                        padding: 4,
                        minWidth: 140,
                        boxShadow: '2px 2px 6px #0002',
                        fontFamily: 'sans-serif',
                    }}
                >
                    <div
                        style={{ padding: '6px 12px', cursor: 'pointer' }}
                        onClick={() => {
                            addWindow('wallpaper', {});
                            setContextMenu({ ...contextMenu, visible: false });
                        }}
                    >
                        Change Wallpaper
                    </div>
                </div>
            )}
            {/* For each window in windows, loop over and render  */}
            {Object.keys(windows).map((key) => {
                const win = windows[key];
                if (!win) return <div key={`win-${key}`}></div>;
                const AppComponent = APPLICATIONS[win.appKey].component;
                return (
                    <div
                        key={`win-${key}`}
                        style={Object.assign(
                            {},
                            { zIndex: win.zIndex },
                            win.minimized && styles.minimized
                        )}
                    >
                        <AppComponent
                            key={key}
                            onInteract={() => onWindowInteract(key)}
                            onClose={() => removeWindow(key)}
                            onMinimize={() => minimizeWindow(key)}
                            {...(win.props || {})}
                        />
                    </div>
                );
            })}
            <div style={styles.shortcuts}>
                {shortcuts.map((shortcut, i) => {
                    return (
                        <div
                            style={Object.assign({}, styles.shortcutContainer, {
                                top: i * 104,
                            })}
                            key={shortcut.shortcutName}
                        >
                            <DesktopShortcut
                                icon={shortcut.icon}
                                shortcutName={shortcut.shortcutName}
                                onOpen={shortcut.onOpen}
                            />
                        </div>
                    );
                })}
            </div>
            <Toolbar
                windows={windows}
                toggleMinimize={toggleMinimize}
                shutdown={startShutdown}
            />
        </div>
    ) : (
        <ShutdownSequence
            setShutdown={setShutdown}
            numShutdowns={numShutdowns}
        />
    );
};

const styles: StyleSheetCSS = {
    desktop: {
        minHeight: '100%',
        flex: 1,
        backgroundColor: Colors.turquoise,
    },
    shutdown: {
        minHeight: '100%',
        flex: 1,
        backgroundColor: '#1d2e2f',
    },
    shortcutContainer: {
        position: 'absolute',
    },
    shortcuts: {
        position: 'absolute',
        top: 16,
        left: 6,
    },
    minimized: {
        pointerEvents: 'none',
        opacity: 0,
    },
};

export default Desktop;
