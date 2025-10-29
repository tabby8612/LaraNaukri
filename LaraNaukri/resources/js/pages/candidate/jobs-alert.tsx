import AddAlert from '@/components/ui/cards/AddAlert';
import DeleteConfirmation from '@/components/ui/cards/DeleteConfirmation';
import AppCandidateLayout from '@/layouts/app/app-candidate-layout';
import { Alert } from '@/types';
import { Head, router, usePage } from '@inertiajs/react';
import { Trash2 } from 'lucide-react';

export default function JobsAlert() {
    const { alerts } = usePage<{ alerts: Alert[] }>().props;

    function deleteHandler(id: string) {
        router.delete(route('candidate.removeAlert', id));
    }

    return (
        <AppCandidateLayout displaySearch={false} page="my-job-alert" titleText="Jobs Alert">
            <Head title="Job Alerts" />
            <section className="flex items-center justify-between">
                <h1 className="mt-2 font-montserrat text-2xl font-bold">Manage Jobs Alert</h1>
                <AddAlert
                    type={
                        <span className="w-32 cursor-pointer rounded bg-primary px-3 py-2 font-montserrat text-lg font-semibold tracking-wider text-white">
                            Create Alert
                        </span>
                    }
                />
            </section>
            {alerts.length > 1 ? (
                <table className="mt-4 w-full">
                    <thead className="px-4">
                        <tr className="bg-primary py-3 font-bold text-white">
                            <td className="rounded-l-lg px-3 py-1">Alert Title</td>
                            <td className="px-3">Location</td>
                            <td className="px-3">Created On</td>
                            <td className="rounded-r-lg px-3">Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {alerts.length > 0 &&
                            alerts.map((alert) => (
                                <tr className="odd:bg-green-100" key={alert.id}>
                                    <td className="px-3 py-1">{alert.name}</td>
                                    <td className="px-3">{alert.city?.name ? `${alert.city.name}, ${alert.country?.name}` : alert.country?.name}</td>
                                    <td className="px-3">{alert.created_at}</td>
                                    <td className="px-3 py-0.5 align-middle font-semibold text-red-500">
                                        <DeleteConfirmation
                                            trigger={
                                                <p className="flex items-center gap-2 text-red-500">
                                                    <Trash2 className="size-3" />
                                                    <span className="cursor-pointer text-sm hover:underline">Delete</span>
                                                </p>
                                            }
                                            deleteFn={() => {
                                                deleteHandler(alert.id);
                                            }}
                                        />
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            ) : (
                <div className="mt-3 text-center text-lg">😢 No Alert Have Been Created Yet</div>
            )}
        </AppCandidateLayout>
    );
}
