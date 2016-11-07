// @flow
import React from 'react';


export function Preloader() {
    return (
        <svg
            width='120px'
            height='120px'
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            className="preloader"
        >
            <rect
                x="0"
                y="0"
                width="100"
                height="100"
                fill="none"
                className="preloader-container"
            />

            <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#3498db"
                fill="none"
                strokeWidth="3"
                strokeLinecap="round"
                className="preloader-circle preloader-circle-1"
            />

            <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#1d5173"
                fill="none"
                strokeWidth="3"
                strokeLinecap="round"
                className="preloader-circle preloader-circle-2"
            />

            <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#052f4c"
                fill="none"
                strokeWidth="3"
                strokeLinecap="round"
                className="preloader-circle preloader-circle-3"
            />
        </svg>
    );
}
