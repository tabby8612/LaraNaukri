import { useForm } from '@inertiajs/react';
import { FormEvent } from 'react';
import { Button } from '../ui/UnusedUI/button';
import { Input } from '../ui/UnusedUI/input';
import { Label } from '../ui/UnusedUI/label';

type RegisterFormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    password_confirmation: string;
    terms: boolean;
};

type Props = {
    type?: 'candidate' | 'employer';
};

export default function RegisterForm({ type = 'candidate' }: Props) {
    const { data, setData, post, errors } = useForm<RegisterFormData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password_confirmation: '',
        terms: false,
    });

    function submitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (type === 'candidate') post(route('candidate.register'));
        if (type === 'employer') post(route('employer.register'));
    }

    return (
        <form className="mt-7 size-10/12" onSubmit={(e) => submitHandler(e)}>
            <Input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className="mt-4 h-12 w-full rounded-lg border border-gray-400 selection:text-white focus-visible:ring focus-visible:ring-primary/50"
                required
                value={data.firstName}
                onChange={(e) => setData('firstName', e.target.value)}
            />
            {errors.firstName && <div className="mt-1 text-sm text-red-500">{errors.firstName}</div>}

            <Input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Last Name"
                className="mt-4 h-12 w-full rounded-lg border border-gray-400 selection:text-white focus-visible:ring focus-visible:ring-primary/50"
                required
                value={data.lastName}
                onChange={(e) => setData('lastName', e.target.value)}
            />
            {errors.lastName && <div className="mt-1 text-sm text-red-500">{errors.lastName}</div>}

            <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="mt-4 h-12 w-full rounded-lg border border-gray-400 selection:text-white focus-visible:ring focus-visible:ring-primary/50"
                required
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
            />
            {errors.email && <div className="mt-1 text-sm text-red-500">{errors.email}</div>}

            <Input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="mt-4 h-12 w-full rounded-lg border border-gray-400 selection:text-white focus-visible:ring focus-visible:ring-primary/50"
                required
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
            />
            {errors.password && <div className="mt-1 text-sm text-red-500">{errors.password}</div>}

            <Input
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                placeholder="Password Confirmation"
                className="mt-4 h-12 w-full rounded-lg border border-gray-400 selection:text-white focus-visible:ring focus-visible:ring-primary/50"
                required
                value={data.password_confirmation}
                onChange={(e) => setData('password_confirmation', e.target.value)}
            />
            {errors.password_confirmation && <div className="mt-1 text-sm text-red-500">{errors.password_confirmation}</div>}

            <div className="mt-4 flex items-center gap-3">
                <Input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    className="size-4"
                    required
                    checked={data.terms}
                    onChange={(e) => setData('terms', e.target.checked)}
                />
                <Label htmlFor="terms">I accept Terms of Use</Label>
            </div>
            {errors.terms && <div className="mt-1 text-sm text-red-500">{errors.terms}</div>}

            <Button className="mt-7 size-full cursor-pointer bg-primary text-lg tracking-wider text-white uppercase">Register</Button>
        </form>
    );
}
