"use client"

import React, { useState, useEffect } from 'react';

interface WaveRipplesProps {
    duration: number;
    color: string;
}

const WaveRipples: React.FC<WaveRipplesProps> = ({ duration, color }) => {
    const [rippleStyle, setRippleStyle] = useState({});

    useEffect(() => {
        if (Object.keys(rippleStyle).length > 0) {
            const timer = setTimeout(() => {
                setRippleStyle(prevStyle => ({
                    ...prevStyle,
                    animation: `fadeOut ${duration}ms ease-out`
                }));
            }, duration);
    
            return () => {
                clearTimeout(timer);
            };
        }
    }, [rippleStyle, duration]);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const { offsetX, offsetY } = event.nativeEvent;

        const delay = 500;

        setTimeout(() => {
            setRippleStyle({
                top: offsetY,
                left: offsetX,
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                position: 'absolute',
                backgroundColor: color,
                transform: 'translate(-50%, -50%)',
                animation: `ripple ${duration}ms linear, fadeIn ${duration}ms ease-in`,
            });
        }, delay);
    };

    return (
        <div
            className="wave-ripples"
            onClick={handleClick}
            style={{ position: 'relative', overflow: 'hidden' }}
        >
            <div className="ripple" style={rippleStyle} />
        </div>
    );
};

export default WaveRipples;