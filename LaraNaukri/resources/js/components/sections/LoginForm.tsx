import { Lock } from '@/SVGs/Lock';
import { useForm } from '@inertiajs/react';
import { FormEvent } from 'react';
import { Button } from '../ui/UnusedUI/button';
import { Input } from '../ui/UnusedUI/input';

export default function LoginForm() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    function submitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route('candidate.verify'));
    }

    return (
        <form id="login-form" className="mt-8" onSubmit={(e) => submitHandler(e)}>
            <Input
                type="email"
                required
                name="email"
                id="email"
                placeholder="Email"
                className="h-10 focus-within:ring-1 focus-visible:ring-primary/50"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
            />
            {errors.email && <div className="mt-1 text-sm text-red-500">{errors.email}</div>}

            <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
                className="mt-5 h-10 focus-within:ring-1 focus-visible:ring-primary/50"
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
            />
            {errors.email && <div className="mt-1 text-sm text-red-500">{errors.email}</div>}

            <div className="mt-3 flex items-center gap-1">
                <Lock />
                <p>
                    Forget Your Password?{' '}
                    <a href="#" className="text-primary">
                        Click Here
                    </a>
                </p>
            </div>
            <Button
                className="my-3 h-10 w-full cursor-pointer bg-primary text-center text-lg font-bold tracking-wider text-white uppercase"
                disabled={processing}
            >
                Login
            </Button>
        </form>
    );
}
