import { PropsWithChildren } from 'react';

export default function PaymentButton({ href, children }: PropsWithChildren<{ href?: string }>) {
    return (
        <a
            href={href}
            className="group smoothTransition relative flex h-11 w-40 cursor-pointer items-center justify-between overflow-hidden rounded-full bg-primary px-3 text-lg text-white after:absolute after:top-0 after:left-0 after:z-10 after:size-full after:translate-full after:rounded-full after:bg-black after:transition-transform after:delay-150 after:duration-500 hover:after:translate-0"
        >
            {children}
        </a>
    );
}
