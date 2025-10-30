import { Candidate } from '@/types';
import { Company } from '@/types/employer';
import { Head, usePage } from '@inertiajs/react';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import NavItems from './navItems';
// import Logo from '/public/storage/LaraNaukri Logo.png';

type Props = {
    auth: {
        user: {
            id: number;
            name: string;
            role: 'candidate' | 'employer';
        };
        candidate: Candidate;
        employer: Company;
    };
    site_favicon_path: string;
    site_logo: string;
};

export default function Nav({ page }: { page: string }) {
    const [isNavSticky, setNavSticky] = useState(false);
    const [isMobNav, setIsMobNav] = useState(false);
    const [isMobAside, setIsMobAside] = useState(false);

    const { site_favicon_path, site_logo } = usePage<Props>().props;

    useEffect(() => {
        function handleScroll() {
            const coordsY = window.scrollY;

            setNavSticky(coordsY > 500);
        }

        function handleResize() {
            console.log(window.screen.width);
            if (window.screen.width < 1000) {
                setIsMobNav(true);
            } else {
                setIsMobNav(false);
            }
        }

        document.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', () => {
            console.log(`resizing`);
            console.log(window.screen.width);
            return window.screen.width < 1000 ? setIsMobNav(true) : setIsMobNav(false);
        });
        window.addEventListener('load', handleResize);
        // document.addEventListener('resize', handleResize);

        return () => {
            document.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('load', handleResize);
        };
    }, []);

    return (
        <>
            <Head>
                <link rel="icon" type="image/x-icon" href={site_favicon_path} />
            </Head>
            <aside
                className={`smoothTransition fixed top-0 right-0 z-20 h-screen bg-white pt-16 shadow-2xl ${isMobAside ? 'w-1/2 translate-x-0 sm:w-1/2' : 'w-0 translate-x-96'}`}
            >
                <p className="px-4 py-2 text-right text-2xl" onClick={() => setIsMobAside(false)}>
                    X
                </p>
                <NavItems page={page} navType="vertical" />
            </aside>
            <nav
                className={`${isNavSticky && 'sticky opacity-100 shadow-lg'} top-0 z-50 flex items-center justify-between border-b-2 border-gray-200/50 bg-white px-8 py-4 font-montserrat transition-all delay-150 duration-300`}
            >
                <div id="logoImage" className="">
                    <a href={route('home')}>
                        <img src={site_logo} alt="LaraNaukri" className="h-10" />
                    </a>
                </div>

                <div onClick={() => setIsMobAside(!isMobAside)} className="cursor-pointer md:hidden md:size-0">
                    <Menu />
                </div>

                {isMobNav ? (
                    <div onClick={() => setIsMobAside(true)}>
                        <Menu />
                    </div>
                ) : (
                    <div id="navitems" className={`hidden items-center justify-center md:flex`}>
                        <NavItems page={page} navType="horizontal" />
                    </div>
                )}
            </nav>
        </>
    );
}
