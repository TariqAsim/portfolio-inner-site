import React, { useState } from 'react';
import Window from './Window';
import Colors from '../../constants/colors';

interface Wallpaper {
    name: string;
    url: string;
}

interface WallpaperPickerProps {
    wallpapers: Wallpaper[];
    currentWallpaper: string;
    onSelect: (url: string) => void;
    onApply: (url: string | null) => void;
    onCancel: () => void;
    minimizeWindow: () => void;
}

const systemFont = 'MSSerif, "Times New Roman", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif';

const WallpaperPicker: React.FC<WallpaperPickerProps> = ({
    wallpapers,
    currentWallpaper,
    onSelect,
    onApply,
    onCancel,
    minimizeWindow,
}) => {
    // null means (None)
    const [selected, setSelected] = useState<string | null>(currentWallpaper || null);
    const [applied, setApplied] = useState(currentWallpaper || null);
    const hasChanged = selected !== applied;
    const wallpaperList = [
        { name: '(None)', url: null },
        ...wallpapers,
    ];
    return (
        <Window
            top={80}
            left={120}
            width={500}
            height={430}
            windowTitle="Display Properties"
            windowBarIcon="windowExplorerIcon"
            closeWindow={onCancel}
            onInteract={() => {}}
            minimizeWindow={minimizeWindow}
            bottomLeftText={''}
            resizable={false}
            showMaximize={false}
        >
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#c0c0c0', fontFamily: systemFont, fontSize: 14 }}>
                {/* Tabs */}
                <div style={{ display: 'flex', borderBottom: '2px solid #808080', marginBottom: 8 }}>
                    {['Background', 'Screen Saver', 'Appearance', 'Effects', 'Web', 'Settings'].map((tab, i) => (
                        <div
                            key={tab}
                            style={{
                                padding: '2px 10px',
                                fontSize: 13,
                                minWidth: 0,
                                minHeight: 0,
                                background: tab === 'Background' ? '#c0c0c0' : '#e0e0e0',
                                borderTop: '2px solid #fff',
                                borderLeft: '2px solid #fff',
                                borderRight: '2px solid #808080',
                                borderBottom: tab === 'Background' ? 'none' : '2px solid #808080',
                                fontWeight: tab === 'Background' ? 'bold' : 'normal',
                                color: tab === 'Background' ? '#000' : '#888',
                                marginLeft: i === 0 ? 0 : 2,
                                fontFamily: systemFont,
                                cursor: tab === 'Background' ? 'default' : 'not-allowed',
                                userSelect: 'none',
                                lineHeight: 1.1,
                            }}
                        >
                            {tab}
                        </div>
                    ))}
                </div>
                {/* Monitor preview centered below tabs */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: 8 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{
                            width: 140,
                            height: 100,
                            background: '#b0b0b0',
                            border: '3px solid #888',
                            borderTop: '3px solid #fff',
                            borderLeft: '3px solid #fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxSizing: 'border-box',
                        }}>
                            <div style={{
                                width: 110,
                                height: 70,
                                background: selected ? undefined : Colors.turquoise,
                                border: '2px inset #fff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                            }}>
                                {selected ? (
                                    <img src={selected} alt="preview" style={{ width: 110, height: 70, objectFit: 'cover', imageRendering: 'pixelated', border: 'none' }} />
                                ) : null}
                            </div>
                        </div>
                        {/* Stand */}
                        <div style={{ width: 40, height: 10, background: '#888', border: '2px solid #fff', borderTop: '2px solid #888', margin: '0 auto', borderRadius: 4 }} />
                        <div style={{ width: 80, height: 8, background: '#b0b0b0', border: '2px solid #888', borderTop: '2px solid #fff', margin: '2px auto 0 auto', borderRadius: 4 }} />
                    </div>
                </div>
                {/* Main content: wallpaper list and controls */}
                <div style={{ display: 'flex', flex: 1, padding: '0 16px' }}>
                    {/* Wallpaper list and controls side by side */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'row', gap: 8, width: '100%' }}>
                        {/* Wallpaper list: vertical, scrollable */}
                        <div style={{
                            border: '2px inset #fff',
                            background: '#fff',
                            height: 120,
                            width: 240,
                            overflowY: 'auto',
                            marginBottom: 8,
                            fontFamily: systemFont,
                            fontSize: 13,
                            boxSizing: 'border-box',
                            padding: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 0,
                        }}>
                            {wallpaperList.map((wp, idx) => (
                                <label
                                    key={wp.url || 'none'}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        padding: '2px 8px',
                                        background: selected === wp.url ? '#c0d0f0' : 'transparent',
                                        cursor: 'pointer',
                                        userSelect: 'none',
                                        width: '100%',
                                    }}
                                >
                                    <input
                                        type="radio"
                                        name="wallpaper"
                                        checked={selected === wp.url}
                                        onChange={() => { setSelected(wp.url); onSelect(wp.url ?? ''); }}
                                        style={{ marginRight: 6, width: 13, height: 13, padding: 0 }}
                                    />
                                    {wp.name}
                                </label>
                            ))}
                        </div>
                        {/* Controls */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginLeft: 2, marginTop: 2 }}>
                            <button style={{
                                width: 80,
                                padding: '2px 0',
                                fontFamily: systemFont,
                                fontSize: 13,
                                border: '2px outset #fff',
                                background: '#e0e0e0',
                                color: '#000',
                                cursor: 'pointer',
                                marginBottom: 2,
                            }}>Browse...</button>
                            <button style={{
                                width: 80,
                                padding: '2px 0',
                                fontFamily: systemFont,
                                fontSize: 13,
                                border: '2px outset #fff',
                                background: '#e0e0e0',
                                color: '#000',
                                cursor: 'pointer',
                                marginBottom: 2,
                            }}>Pattern...</button>
                            <div style={{ marginTop: 8, fontSize: 13, fontFamily: systemFont }}>Display:</div>
                            <select style={{
                                width: 80,
                                fontFamily: systemFont,
                                fontSize: 13,
                                border: '2px inset #fff',
                                background: '#fff',
                                color: '#000',
                                marginTop: 2,
                            }} defaultValue="Center">
                                <option>Center</option>
                                <option>Tile</option>
                                <option>Stretch</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Buttons */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 8, marginRight: 12 }}>
                    <button
                        style={{
                            padding: '2px 18px',
                            fontSize: 15,
                            fontFamily: systemFont,
                            border: '2px outset #fff',
                            background: '#e0e0e0',
                            color: '#000',
                            cursor: 'pointer',
                            boxShadow: '1px 1px 0 #fff',
                            outline: 'none',
                        }}
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                    <button
                        style={{
                            padding: '2px 18px',
                            fontSize: 15,
                            fontFamily: systemFont,
                            border: '2px outset #fff',
                            background: '#e0e0e0',
                            color: '#000',
                            cursor: hasChanged ? 'pointer' : 'not-allowed',
                            boxShadow: '1px 1px 0 #fff',
                            outline: 'none',
                            opacity: hasChanged ? 1 : 0.5,
                        }}
                        onClick={() => hasChanged && onApply(selected)}
                        disabled={!hasChanged}
                    >
                        Apply
                    </button>
                    <button
                        style={{
                            padding: '2px 18px',
                            fontSize: 15,
                            fontFamily: systemFont,
                            border: '2px outset #fff',
                            background: '#e0e0e0',
                            color: '#000',
                            cursor: 'pointer',
                            boxShadow: '1px 1px 0 #fff',
                            outline: 'none',
                        }}
                        onClick={() => onApply(selected)}
                    >
                        OK
                    </button>
                </div>
            </div>
        </Window>
    );
};

export default WallpaperPicker; 