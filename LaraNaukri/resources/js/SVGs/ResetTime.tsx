import { SVGProps } from 'react';

export function ResetTime(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="1em" height="1em" {...props}>
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M.5 7A6.5 6.5 0 1 0 7 .5a7.23 7.23 0 0 0-5 2"></path>
                <path d="m2.5.5l-.5 2L4 3m3 .5v4L4.4 8.8"></path>
            </g>
        </svg>
    );
}
