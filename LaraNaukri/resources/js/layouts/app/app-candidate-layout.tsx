import Searchjobhero from '@/components/sections/searchjobhero';
import CandidateNavLinks from '@/components/ui/cards/CandidateNavLinks';
import CandidateSidebarHeader from '@/components/ui/cards/CandidateSidebarHeader';
import OpenToWork from '@/components/ui/cards/OpenToWork';
import { PropsWithChildren } from 'react';
import AppLayout from './app-layout';

export default function AppCandidateLayout({
    children,
    page,
    titleText,
    displaySearch,
}: PropsWithChildren<{ page: string; titleText: string; displaySearch: boolean }>) {
    return (
        <AppLayout page="">
            <Searchjobhero displaySearch={displaySearch} titleText={titleText} />
            <section className="mx-auto flex w-11/12 gap-1 p-7">
                <div id="candidate-sidebar" className="w-[28%] p-4">
                    <CandidateSidebarHeader />
                    <OpenToWork />
                    <CandidateNavLinks page={page} />
                </div>
                <div id="candidate-content" className="w-[72%] p-4">
                    {children}
                </div>
            </section>
        </AppLayout>
    );
}
