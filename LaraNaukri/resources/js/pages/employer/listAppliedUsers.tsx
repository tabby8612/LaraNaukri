import DroppableCard from '@/components/ui/cards/Employer/DroppableCard';
import KanbanBoard from '@/components/ui/cards/Employer/KanbanBoard';
import AppLayout from '@/layouts/app/app-layout';
import { Application, FilteredJobs } from '@/types';
import { DragEndEvent } from '@dnd-kit/core';
import { Head, router, usePage } from '@inertiajs/react';

type groupApplications = {
    applied: Application[] | undefined;
    rejected: Application[] | undefined;
    shortlisted: Application[] | undefined;
    hired: Application[] | undefined;
};

export default function ListAppliedUsers() {
    const { groupApplications, selectedJob } = usePage<{ groupApplications: groupApplications; selectedJob: FilteredJobs }>().props;

    function dragEndHandler(event: DragEndEvent) {
        const newApplicationStatus = event.over!.id;
        const application = event.active.data.current as Application;

        if (event.active.data.current?.status === event.over!.id) return;

        router.put(
            route('employer.updateApplicationStatus', application.id),
            { newstatus: newApplicationStatus },
            {
                preserveScroll: true,
                preserveState: true,
                showProgress: false,
            },
        );
    }

    return (
        <AppLayout page="">
            <Head title="Kanban Board For Applied Candidates" />
            <header className="flex justify-center bg-green-100 p-7 font-montserrat text-3xl font-bold">
                Kanban Board to manage applied jobseekers
            </header>
            <section className="mx-auto w-11/12 p-7">
                <h1 className="font-montserrat text-2xl font-bold">Applications Showing for the job: {selectedJob.title}</h1>

                <section className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-4">
                    <KanbanBoard dragEndFn={dragEndHandler}>
                        <DroppableCard label="Applied Users" id="applied" applications={groupApplications.applied} />
                        <DroppableCard label="Rejected Users" id="rejected" applications={groupApplications.rejected} />
                        <DroppableCard label="Shortlisted" id="shortlisted" applications={groupApplications.shortlisted} />
                        <DroppableCard label="Hired Users" id="hired" applications={groupApplications.hired} />
                    </KanbanBoard>
                </section>
            </section>
        </AppLayout>
    );
}
