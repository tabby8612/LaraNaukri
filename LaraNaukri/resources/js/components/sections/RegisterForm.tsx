import { Button } from '../ui/UnusedUI/button';
import { Input } from '../ui/UnusedUI/input';
import { Label } from '../ui/UnusedUI/label';

export default function RegisterForm() {
    return (
        <form className="mt-7 size-10/12">
            <Input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="First Name"
                className="mt-4 h-12 w-full rounded-lg border border-gray-400 selection:text-white focus-visible:ring focus-visible:ring-primary/50"
            />
            <Input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Last Name"
                className="mt-4 h-12 w-full rounded-lg border border-gray-400 selection:text-white focus-visible:ring focus-visible:ring-primary/50"
            />
            <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="mt-4 h-12 w-full rounded-lg border border-gray-400 selection:text-white focus-visible:ring focus-visible:ring-primary/50"
            />
            <Input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="mt-4 h-12 w-full rounded-lg border border-gray-400 selection:text-white focus-visible:ring focus-visible:ring-primary/50"
            />
            <Input
                type="password"
                id="password-confirmation"
                name="password-confirmation"
                placeholder="Password Confirmation"
                className="mt-4 h-12 w-full rounded-lg border border-gray-400 selection:text-white focus-visible:ring focus-visible:ring-primary/50"
            />
            <div className="mt-4 flex items-center gap-3">
                <Input type="checkbox" value={1} id="terms" name="terms" className="size-4" />
                <Label htmlFor="terms">I accept Terms of Use</Label>
            </div>
            <Button className="mt-7 size-full bg-primary text-lg tracking-wider text-white uppercase">Register</Button>
        </form>
    );
}
