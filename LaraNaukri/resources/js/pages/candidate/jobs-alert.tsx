import AddAlert from '@/components/ui/cards/AddAlert';
import { Button } from '@/components/ui/UnusedUI/button';
import AppCandidateLayout from '@/layouts/app/app-candidate-layout';

export default function jobsAlert() {
    return (
        <AppCandidateLayout displaySearch={false} page="my-job-alert" titleText="Jobs Alert">
            <section className="flex items-center justify-between">
                <h1 className="font-montserrat text-2xl font-bold">Manage Jobs Alert</h1>
                <AddAlert type={<Button className="w-32 cursor-pointer font-montserrat tracking-wider text-white">Create Alert</Button>} />
            </section>
            <table className="mt-4 w-full">
                <thead className="px-4">
                    <tr className="bg-primary py-3 font-bold text-white">
                        <td className="rounded-l-lg px-3 py-1">Alert Title</td>
                        <td className="px-3">Created On</td>
                        <td className="rounded-r-lg px-3">Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd:bg-green-100">
                        <td className="px-3 py-1">Alert Title</td>
                        <td className="px-3">Created On</td>
                        <td className="px-3">Action</td>
                    </tr>
                    <tr className="odd:bg-green-100">
                        <td className="px-3 py-1">Alert Title</td>
                        <td className="px-3">Created On</td>
                        <td className="px-3">Action</td>
                    </tr>
                    <tr className="odd:bg-green-100">
                        <td className="px-3 py-1">Alert Title</td>
                        <td className="px-3">Created On</td>
                        <td className="px-3">Action</td>
                    </tr>
                </tbody>
            </table>
        </AppCandidateLayout>
    );
}
