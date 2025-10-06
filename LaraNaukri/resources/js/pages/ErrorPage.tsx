import AppLayout from '@/layouts/app/app-layout';
import { Head } from '@inertiajs/react';
import { ConstructionIcon } from 'lucide-react';

export default function ErrorPage({ status }: { status: number }) {
    const title = {
        503: '503: Service Unavailable',
        500: '500: Server Error',
        404: '404: Page Not Found',
        403: '403: Forbidden',
    }[status];

    const description = {
        503: 'Sorry, we are doing some maintenance. Please check back soon.',
        500: 'Whoops, something went wrong on our servers.',
        404: 'Sorry, the page you are looking for could not be found.',
        403: 'Sorry, you are forbidden from accessing this page.',
    }[status];

    return (
        <AppLayout page="">
            <Head>
                <title>{title}</title>
            </Head>
            <div className="flex flex-col items-center justify-center p-7">
                <ConstructionIcon className="size-52 p-7 text-center text-red-700" />
                <h1 className="my-3 font-montserrat text-5xl font-bold">{title}</h1>
                <h2 className="text-xl">{description}</h2>
            </div>
        </AppLayout>
    );
}
