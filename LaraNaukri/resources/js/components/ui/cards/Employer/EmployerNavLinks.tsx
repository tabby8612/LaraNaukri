import { BaselineDashboard } from '@/SVGs/Dashboard';
import { Exit } from '@/SVGs/Exit';
import { RoundRemoveRedEye } from '@/SVGs/Eye';
import { FileInvoiceDollar } from '@/SVGs/Invoice';
import { Message } from '@/SVGs/Message';
import { MonitorFill16 } from '@/SVGs/Monitor';
import { Pencil } from '@/SVGs/Pencil';
import { User } from '@/SVGs/User';
import { Company } from '@/types/employer';
import { usePage } from '@inertiajs/react';
import { Search, SquareChartGantt, Users } from 'lucide-react';

export default function EmployerNavLinks({ page = 'dashboard' }: { page: string }) {
    const { auth } = usePage<{
        auth: {
            user: {
                id: string;
            };
            employer: Company;
        };
    }>().props;

    return (
        <ul className="ml-2">
            <a href={route('employer.dashboard')}>
                <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                    <BaselineDashboard className={`size-5 group-hover:text-primary ${page === 'dashboard' ? 'text-primary' : 'text-gray-500'}`} />
                    <p className={`group-hover:text-primary ${page === 'dashboard' ? 'text-primary' : 'text-gray-500'}`}>Dashboard</p>
                </li>
            </a>
            <a href={route('employer.editProfile')}>
                <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                    <Pencil className={`size-5 group-hover:text-primary ${page === 'editProfile' ? 'text-primary' : 'text-gray-500'}`} />
                    <p className={`group-hover:text-primary ${page === 'editProfile' ? 'text-primary' : 'text-gray-500'}`}>Edit Account Details</p>
                </li>
            </a>
            <a
                href={route('company.view', {
                    slug: auth.employer.slug,
                })}
            >
                <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                    <RoundRemoveRedEye
                        className={`size-5 group-hover:text-primary ${page === 'viewPublicProfile' ? 'text-primary' : 'text-gray-500'}`}
                    />
                    <p className={`group-hover:text-primary ${page === 'viewPublicProfile' ? 'text-primary' : 'text-gray-500'}`}>
                        Company Public Profile
                    </p>
                </li>
            </a>
            <a href={route('employer.postJob')}>
                <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                    <MonitorFill16 className={`size-5 group-hover:text-primary ${page === 'postJob' ? 'text-primary' : 'text-gray-500'}`} />
                    <p className={`group-hover:text-primary ${page === 'postJob' ? 'text-primary' : 'text-gray-500'}`}>Post Job</p>
                </li>
            </a>
            <a href={route('employer.manageJobs')}>
                <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                    <SquareChartGantt className={`size-5 group-hover:text-primary ${page === 'manageJobs' ? 'text-primary' : 'text-gray-500'}`} />
                    <p className={`group-hover:text-primary ${page === 'manageJobs' ? 'text-primary' : 'text-gray-500'}`}>Manage Jobs</p>
                </li>
            </a>
            <a href={route('employer.packages')}>
                <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                    <Search className={`size-5 group-hover:text-primary ${page === 'packages' ? 'text-primary' : 'text-gray-500'}`} />
                    <p className={`group-hover:text-primary ${page === 'packages' ? 'text-primary' : 'text-gray-500'}`}>CV Search Packages</p>
                </li>
            </a>
            <a href={route('employer.paymentHistory')}>
                <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                    <FileInvoiceDollar
                        className={`size-5 group-hover:text-primary ${page === 'paymentHistory' ? 'text-primary' : 'text-gray-500'}`}
                    />
                    <p className={`group-hover:text-primary ${page === 'paymentHistory' ? 'text-primary' : 'text-gray-500'}`}>Payment History</p>
                </li>
            </a>
            <a href={route('employer.unlockedUsers')}>
                <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                    <User className={`size-5 group-hover:text-primary ${page === 'unlockedUsers' ? 'text-primary' : 'text-gray-500'}`} />
                    <p className={`group-hover:text-primary ${page === 'unlockedUsers' ? 'text-primary' : 'text-gray-500'}`}>Unlocked Users</p>
                </li>
            </a>
            <a href={route('employer.messages')}>
                <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                    <Message className={`size-5 group-hover:text-primary ${page === 'messages' ? 'text-primary' : 'text-gray-500'}`} />
                    <p className={`group-hover:text-primary ${page === 'messages' ? 'text-primary' : 'text-gray-500'}`}>Company Messages</p>
                </li>
            </a>
            <a href={route('employer.followings')}>
                <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                    <Users fill="gray" className={`size-5 group-hover:text-primary ${page === 'followings' ? 'text-primary' : 'text-gray-500'}`} />
                    <p className={`group-hover:text-primary ${page === 'followings' ? 'text-primary' : 'text-gray-500'}`}>Company Followers</p>
                </li>
            </a>

            <a href={route('employer.logout')}>
                <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                    <Exit className={`size-5 group-hover:text-primary ${page === 'logout' ? 'text-primary' : 'text-gray-500'}`} />
                    <p className={`group-hover:text-primary ${page === 'logout' ? 'text-primary' : 'text-gray-500'}`}>Logout</p>
                </li>
            </a>
        </ul>
    );
}
