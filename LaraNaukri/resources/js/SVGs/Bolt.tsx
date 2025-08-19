import { SVGProps } from 'react';

export function LightningBolt(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="1em" height="1em" {...props}>
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0 1 12 2v5h4a1 1 0 0 1 .82 1.573l-7 10A1 1 0 0 1 8 18v-5H4a1 1 0 0 1-.82-1.573l7-10a1 1 0 0 1 1.12-.38"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
