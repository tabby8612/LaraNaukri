import Searchjobhero from '@/components/sections/searchjobhero';
import EmployerNavLinks from '@/components/ui/cards/Employer/EmployerNavLinks';
import { PropsWithChildren } from 'react';
import AppLayout from './app-layout';

export default function AppEmployerLayout({
    children,
    page,
    titleText,
    displaySearch,
}: PropsWithChildren<{ page: string; titleText: string; displaySearch: boolean }>) {
    return (
        <AppLayout page="">
            <Searchjobhero displaySearch={displaySearch} titleText={titleText} />
            <section className="mx-auto flex w-11/12 flex-col gap-1 p-7 md:flex-row">
                <div id="candidate-sidebar" className="p-4 md:w-[28%]">
                    <EmployerNavLinks page={page} />
                </div>
                <div id="candidate-content" className="p-4 md:w-[72%]">
                    {children}
                </div>
            </section>
        </AppLayout>
    );
}
