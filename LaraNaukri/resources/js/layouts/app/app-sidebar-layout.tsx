import { AppContent } from '@/components/UnusedComponents/app-content';
import { AppShell } from '@/components/UnusedComponents/app-shell';
import { AppSidebar } from '@/components/UnusedComponents/app-sidebar';
import { AppSidebarHeader } from '@/components/UnusedComponents/app-sidebar-header';
import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';

export default function AppSidebarLayout({ children, breadcrumbs = [] }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <AppShell variant="sidebar">
            <AppSidebar />
            <AppContent variant="sidebar" className="overflow-x-hidden">
                <AppSidebarHeader breadcrumbs={breadcrumbs} />
                {children}
            </AppContent>
        </AppShell>
    );
}
