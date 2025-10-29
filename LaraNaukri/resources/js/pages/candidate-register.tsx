import RegisterForm from '@/components/sections/RegisterForm';
import AppLayout from '@/layouts/app/app-layout';
import { User } from '@/SVGs/User';
import { Head } from '@inertiajs/react';

export default function CandidateRegister() {
    return (
        <AppLayout page="">
            <Head>
                <title>Candidate Register</title>
            </Head>
            <section className="mx-auto size-[40%] py-16">
                <div className="mx-auto flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold">Candidate Register</h1>

                    <RegisterForm />
                    <div className="mt-6 flex items-center justify-center gap-1 text-xl">
                        <User />
                        Have Account?{' '}
                        <a href={route('candidate.login')} className="font-semibold text-primary">
                            Sign In
                        </a>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
