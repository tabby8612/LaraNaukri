import { PropsWithChildren } from 'react';
import { Button } from './UnusedUI/button';

export default function PaymentButton({ children }: PropsWithChildren) {
    return (
        <Button className="group smoothTransition relative flex h-11 w-full cursor-pointer justify-between overflow-hidden rounded-full text-lg text-white after:absolute after:top-0 after:left-0 after:z-10 after:size-full after:translate-full after:rounded-full after:bg-black after:transition-transform after:delay-150 after:duration-500 hover:after:translate-0">
            {children}
        </Button>
    );
}
