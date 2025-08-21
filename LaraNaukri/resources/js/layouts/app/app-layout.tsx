import Nav from '@/components/nav';
import Footer from '@/components/sections/Footer';
import { PropsWithChildren } from 'react';

export default function AppLayout({ page, children }: PropsWithChildren<{ page: string }>) {
    return (
        <>
            <Nav page={page} />
            {children}
            <Footer />
        </>
    );
}
