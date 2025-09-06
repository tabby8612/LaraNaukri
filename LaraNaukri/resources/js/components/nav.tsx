import { Exit } from '@/SVGs/Exit';
import { RoundRemoveRedEye } from '@/SVGs/Eye';
import { MonitorFill16 } from '@/SVGs/Monitor';
import { Speed } from '@/SVGs/Speedometer';
import { User } from '@/SVGs/User';
import { Link, usePage } from '@inertiajs/react';
import { LanguagesIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import LoginDialog from './ui/cards/LoginDialog';
import Logo from '/public/storage/LaraNaukri Logo.png';

type Props = {
    auth: {
        user: {
            id: number;
            name: string;
        };
    };
};
export default function Nav({ page }: { page: string }) {
    const [isNavSticky, setNavSticky] = useState(false);
    const [userOptions, setUserOptions] = useState(false);
    const { auth } = usePage<Props>().props;
    const { user } = auth;

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
        <>
            <nav
                className={`${isNavSticky && 'sticky opacity-100 shadow-lg'} top-0 z-50 flex justify-between border-b-2 border-gray-200/50 bg-white px-8 py-4 font-montserrat transition-all delay-150 duration-300`}
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
                        {user ? (
                            <li
                                className="relative cursor-pointer"
                                onMouseEnter={() => setUserOptions(true)}
                                onMouseLeave={() => setUserOptions(false)}
                            >
                                <img
                                    src="https://www.sharjeelanjum.com/demos/jobsportal-update/user_images/-1741437874-596.jpg"
                                    alt={user.name}
                                    className="size-9 rounded-full outline-2 outline-primary"
                                />

                                {userOptions && (
                                    <div
                                        className={`absolute -left-[600%] flex size-0 flex-col opacity-100 shadow-2xs duration-500 peer-hover:-translate-y-0 peer-hover:opacity-100`}
                                    >
                                        <ul
                                            onMouseEnter={() => setUserOptions(true)}
                                            onMouseLeave={() => setUserOptions(false)}
                                            className="w-3xs rounded-b-xl border-2 border-gray-200 bg-white shadow-2xl peer-hover:-translate-y-0"
                                        >
                                            <Link href={route('candidate.dashboard')}>
                                                <li className="flex items-center gap-2 px-5 py-3 font-montserrat text-sm font-semibold hover:bg-primary hover:text-white">
                                                    <Speed className="size-6" />
                                                    <p>Dashboard</p>
                                                </li>
                                            </Link>

                                            <Link href={route('candidate.editProfile')}>
                                                <li className="flex items-center gap-2 px-5 py-3 font-montserrat text-sm font-semibold hover:bg-primary hover:text-white">
                                                    <User className="size-5" />
                                                    <p>My Profile</p>
                                                </li>
                                            </Link>

                                            <Link
                                                href={route('candidate.viewPublicProfile', {
                                                    id: user.id,
                                                })}
                                            >
                                                <li className="flex items-center gap-2 px-5 py-3 font-montserrat text-sm font-semibold hover:bg-primary hover:text-white">
                                                    <RoundRemoveRedEye className="size-5" />
                                                    <p>View Public Profile</p>
                                                </li>
                                            </Link>

                                            <Link href={route('candidate.jobApplications')}>
                                                <li className="flex items-center gap-2 px-5 py-3 font-montserrat text-sm font-semibold hover:bg-primary hover:text-white">
                                                    <MonitorFill16 className="mr-1 size-4" />
                                                    <p>My Job Applications</p>
                                                </li>
                                            </Link>

                                            <Link href={route('candidate.logout')}>
                                                <li className="flex items-center gap-2 px-5 py-3 font-montserrat text-sm font-semibold hover:bg-primary hover:text-white">
                                                    <Exit className="size-4" />
                                                    <p>Logout</p>
                                                </li>
                                            </Link>
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ) : (
                            <div className="flex items-center gap-7">
                                <li
                                    className={`${page === 'login' && 'activeNav'} relative cursor-pointer font-sans font-semibold transition-colors duration-300 hover:text-primary`}
                                >
                                    {<LoginDialog />}
                                </li>
                                <li className="rounded-md bg-primary px-4 py-1.5 text-white">{<LoginDialog type="register" />}</li>
                            </div>
                        )}

                        <li>{<LanguagesIcon className="rounded-full border-2 border-gray-400" />}</li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
