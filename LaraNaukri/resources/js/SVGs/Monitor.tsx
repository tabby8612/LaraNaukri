import { SVGProps } from 'react';

export function MonitorFill16(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" {...props}>
            <g fill="currentColor">
                <rect width="16" height="11" rx="1" ry="1"></rect>
                <path d="M11.5 16h-7l-.4-.2a.5.5 0 0 1-.1-.4a4 4 0 0 1 7.9 0a.5.5 0 0 1-.1.4z"></path>
            </g>
        </svg>
    );
}
