import Nav from '@/components/nav';
import Footer from '@/components/sections/Footer';
import { PropsWithChildren } from 'react';

export default function AppLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>
    );
}
