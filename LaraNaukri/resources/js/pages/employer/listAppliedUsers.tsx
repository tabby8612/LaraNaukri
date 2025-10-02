import { Card } from '@/components/ui/card';
import AppliedCandidate from '@/components/ui/cards/Employer/AppliedCandidate';
import NoAppliedCandidate from '@/components/ui/cards/Employer/NoAppliedCandidate';
import AppLayout from '@/layouts/app/app-layout';
import { Application } from '@/types';
import { usePage } from '@inertiajs/react';

type groupApplications = {
    applied: Application[] | undefined;
    rejected: Application[] | undefined;
    shortlisted: Application[] | undefined;
    hired: Application[] | undefined;
};

export default function ListAppliedUsers() {
    const { groupApplications } = usePage<{ groupApplications: groupApplications }>().props;

    return (
        <AppLayout page="">
            <header className="flex justify-center bg-green-100 p-7 font-montserrat text-3xl font-bold">
                Kanban Board to manage applied jobseekers
            </header>
            <section className="mx-auto w-11/12 p-7">
                <h1 className="font-montserrat text-2xl font-bold">Applications Showing for the job: IOS Developer</h1>
                <h1>*Use dndkit for drag and drop https://docs.dndkit.com/introduction/installation</h1>
                <section className="mt-3 grid grid-cols-4 gap-5">
                    <Card className="min-h-screen rounded-none border-none bg-blue-100 px-3">
                        <h1 className="font-montserrat text-lg font-semibold text-black">Applied Users</h1>
                        {groupApplications.applied ? (
                            groupApplications.applied.map((application) => <AppliedCandidate application={application} />)
                        ) : (
                            <NoAppliedCandidate />
                        )}
                    </Card>
                    <Card className="min-h-screen rounded-none border-none bg-red-100 px-3">
                        <h1 className="font-montserrat text-lg font-semibold text-black">Rejected</h1>
                        {groupApplications.rejected ? (
                            groupApplications.rejected.map((application) => <AppliedCandidate application={application} />)
                        ) : (
                            <NoAppliedCandidate />
                        )}
                    </Card>
                    <Card className="min-h-screen rounded-none border-none bg-yellow-100 px-3">
                        <h1 className="font-montserrat text-lg font-semibold text-black">Shortlisted</h1>
                        {groupApplications.shortlisted ? (
                            groupApplications.shortlisted.map((application) => <AppliedCandidate application={application} />)
                        ) : (
                            <NoAppliedCandidate />
                        )}
                    </Card>
                    <Card className="min-h-screen rounded-none border-none bg-green-100 px-3">
                        <h1 className="font-montserrat text-lg font-semibold text-black">Hired Users</h1>
                        {groupApplications.hired ? (
                            groupApplications.hired.map((application) => <AppliedCandidate application={application} />)
                        ) : (
                            <NoAppliedCandidate />
                        )}
                    </Card>
                </section>
            </section>
        </AppLayout>
    );
}
