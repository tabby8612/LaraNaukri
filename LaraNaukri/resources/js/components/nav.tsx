import { LanguagesIcon } from 'lucide-react';
import Logo from '/public/storage/LaraNaukri Logo.png';

export default function Nav() {
    return (
        <nav className="flex justify-between border-b-2 border-gray-200/50 px-8 py-4 font-montserrat">
            <div id="logoImage">
                <img src={Logo} alt="LaraNaukri" className="h-10" />
            </div>
            <div id="navitems" className="flex items-center justify-center">
                <ul className="flex items-center justify-center gap-7">
                    <li className="hover:text-primary cursor-pointer font-sans font-semibold transition-colors duration-300 ease-in">Home</li>
                    <li className="hover:text-primary cursor-pointer font-sans font-semibold transition-colors duration-300 ease-in">Jobs</li>
                    <li className="hover:text-primary cursor-pointer font-sans font-semibold transition-colors duration-300 ease-in">Companies</li>
                    <li className="hover:text-primary cursor-pointer font-sans font-semibold transition-colors duration-300 ease-in">Blog</li>
                    <li className="hover:text-primary cursor-pointer font-sans font-semibold transition-colors duration-300 ease-in">Contact us</li>
                    <li className="hover:text-primary cursor-pointer font-sans font-semibold transition-colors duration-300 ease-in">Sign in</li>
                    <li className="bg-primary rounded-md px-4 py-1.5 text-white">Register</li>
                    <li>{<LanguagesIcon className="rounded-full border-2 border-gray-400" />}</li>
                </ul>
            </div>
        </nav>
    );
}
