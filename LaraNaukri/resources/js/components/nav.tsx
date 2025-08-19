import { LanguagesIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import Logo from '/public/storage/LaraNaukri Logo.png';

export default function Nav() {
    const [isNavSticky, setNavSticky] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const coordsY = window.scrollY;

            setNavSticky(coordsY > 500);
        }

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`${isNavSticky && 'sticky opacity-100 drop-shadow-xl'} top-0 z-9999 flex justify-between border-b-2 border-gray-200/50 bg-white px-8 py-4 font-montserrat transition-all delay-150 duration-300`}
        >
            <div id="logoImage">
                <img src={Logo} alt="LaraNaukri" className="h-10" />
            </div>
            <div id="navitems" className="flex items-center justify-center">
                <ul className="flex items-center justify-center gap-7">
                    <li className="activeNav relative cursor-pointer font-sans font-semibold transition-colors duration-300 hover:text-primary">
                        Home
                    </li>
                    <a href={route('search.jobs')}>
                        <li className="relative cursor-pointer font-sans font-semibold transition-colors duration-300 hover:text-primary">Jobs</li>
                    </a>
                    <li className="relative cursor-pointer font-sans font-semibold transition-colors duration-300 hover:text-primary">Companies</li>
                    <li className="relative cursor-pointer font-sans font-semibold transition-colors duration-300 hover:text-primary">Blog</li>
                    <li className="relative cursor-pointer font-sans font-semibold transition-colors duration-300 hover:text-primary">Contact us</li>
                    <li className="relative cursor-pointer font-sans font-semibold transition-colors duration-300 hover:text-primary">Sign in</li>
                    <li className="rounded-md bg-primary px-4 py-1.5 text-white">Register</li>
                    <li>{<LanguagesIcon className="rounded-full border-2 border-gray-400" />}</li>
                </ul>
            </div>
        </nav>
    );
}
