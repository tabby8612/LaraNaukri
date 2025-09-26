import { router } from '@inertiajs/react';
import { Card } from '../../card';
import { Button } from '../../UnusedUI/button';

export default function NoAppliedCandidate() {
    return (
        <Card className="border border-gray-100 bg-gray-100 px-5 shadow-none">
            <h1 className="text-center font-montserrat text-2xl font-bold">No Record Found</h1>
            <Button
                className="mx-auto w-3/4 cursor-pointer rounded py-7 text-2xl text-white"
                onClick={() => router.get(route('employer.manageJobs'))}
            >
                Manage Jobs
            </Button>
        </Card>
    );
}
