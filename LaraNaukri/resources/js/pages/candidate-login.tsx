import LoginForm from '@/components/sections/LoginForm';
import AppLayout from '@/layouts/app/app-layout';
import { Facebook } from '@/SVGs/Facebook';
import { Google } from '@/SVGs/Google';
import { User } from '@/SVGs/User';
import { router } from '@inertiajs/react';

export default function CandidateLogin() {
    return (
        <AppLayout page="login">
            <section className="mx-auto size-[40%] h-screen py-16">
                <div className="mx-auto flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold">Candidate Login</h1>
                    <div className="mt-3 flex gap-5">
                        <Facebook className="size-12 rounded-lg border border-stone-400 p-2" />
                        <Google className="size-12 rounded-lg border border-stone-400 p-2" onClick={() => router.get(route('google.register'))} />
                    </div>
                </div>
                <div className="mt-4 flex items-center justify-center gap-2">
                    <hr className="h-0.5 w-1/3 border border-gray-300 bg-stone-100/10" />
                    <p className="w-1/3 text-center">Or login with your account</p>
                    <hr className="h-0.5 w-1/3 border border-gray-300" />
                </div>
                <LoginForm />
                <div className="mt-6 flex items-center justify-center gap-1 text-xl">
                    <User />
                    New User?{' '}
                    <a href={route('candidate.register')} className="font-semibold text-primary">
                        Register Here
                    </a>
                </div>
            </section>
        </AppLayout>
    );
}
