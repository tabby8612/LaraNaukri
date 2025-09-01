import { LanguagesIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import LoginDialog from './ui/cards/LoginDialog';
import Logo from '/public/storage/LaraNaukri Logo.png';

export default function Nav({ page }: { page: string }) {
    const [isNavSticky, setNavSticky] = useState(false);
    // const [loginDialog, setLoginDialog] = useState(false);

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

    // createPortal(<p>This child is placed in the document body.</p>, document.body);
    return (
        <>
            <nav
                className={`${isNavSticky && 'sticky opacity-100 shadow-lg'} top-0 z-5 flex justify-between border-b-2 border-gray-200/50 bg-white px-8 py-4 font-montserrat transition-all delay-150 duration-300`}
            >
                <div id="logoImage">
                    <a href={route('home')}>
                        <img src={Logo} alt="LaraNaukri" className="h-10" />
                    </a>
                </div>
                <div id="navitems" className="flex items-center justify-center">
                    <ul className="flex items-center justify-center gap-7">
                        <a href={route('home')}>
                            <li
                                className={`${page === 'home' && 'activeNav'} relative cursor-pointer font-sans font-semibold transition-colors duration-300 hover:text-primary`}
                            >
                                Home
                            </li>
                        </a>

                        <a href={route('search.jobs')}>
                            <li
                                className={`${page === 'jobs' && 'activeNav'} relative cursor-pointer font-sans font-semibold transition-colors duration-300 hover:text-primary`}
                            >
                                Jobs
                            </li>
                        </a>
                        <a href={route('companies')}>
                            <li
                                className={`${page === 'companies' && 'activeNav'} relative cursor-pointer font-sans font-semibold transition-colors duration-300 hover:text-primary`}
                            >
                                Companies
                            </li>
                        </a>

                        <a href={route('blog')}>
                            <li
                                className={`${page === 'blog' && 'activeNav'} relative cursor-pointer font-sans font-semibold transition-colors duration-300 hover:text-primary`}
                            >
                                Blog
                            </li>
                        </a>

                        <a href={route('contact')}>
                            <li
                                className={`${page === 'contact' && 'activeNav'} relative cursor-pointer font-sans font-semibold transition-colors duration-300 hover:text-primary`}
                            >
                                Contact us
                            </li>
                        </a>
                        <li
                            className={`${page === 'login' && 'activeNav'} relative cursor-pointer font-sans font-semibold transition-colors duration-300 hover:text-primary`}
                        >
                            {<LoginDialog />}
                        </li>
                        <li className="rounded-md bg-primary px-4 py-1.5 text-white">{<LoginDialog type="register" />}</li>
                        <li>{<LanguagesIcon className="rounded-full border-2 border-gray-400" />}</li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
