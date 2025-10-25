import Nav from '@/components/nav';
import { PropsWithChildren } from 'react';

export default function AppLayout({ page, children }: PropsWithChildren<{ page: string }>) {
    return (
        <>
            <Nav page={page} />
            {children}
            {/* <Footer /> */}
        </>
    );
}
