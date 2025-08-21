import { Lock } from '@/SVGs/Lock';
import { Button } from '../ui/UnusedUI/button';
import { Input } from '../ui/UnusedUI/input';

export default function LoginForm() {
    return (
        <form id="login-form" className="mt-8">
            <Input type="email" name="email" id="email" placeholder="Email" className="h-10 focus-within:ring-1 focus-visible:ring-primary/50" />
            <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mt-5 h-10 focus-within:ring-1 focus-visible:ring-primary/50"
            />
            <div className="mt-3 flex items-center gap-1">
                <Lock />
                <p>
                    Forget Your Password?{' '}
                    <a href="#" className="text-primary">
                        Click Here
                    </a>
                </p>
            </div>
            <Button className="my-3 h-10 w-full bg-primary text-center text-lg font-bold tracking-wider text-white uppercase">Login</Button>
        </form>
    );
}
