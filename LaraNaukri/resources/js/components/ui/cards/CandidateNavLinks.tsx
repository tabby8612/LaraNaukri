import { BaselineDashboard } from '@/SVGs/Dashboard';
import { Exit } from '@/SVGs/Exit';
import { RoundRemoveRedEye } from '@/SVGs/Eye';
import { RoundInsertDriveFile } from '@/SVGs/File';
import { Heart } from '@/SVGs/Heart';
import { FileInvoiceDollar } from '@/SVGs/Invoice';
import { Message } from '@/SVGs/Message';
import { MonitorFill16 } from '@/SVGs/Monitor';
import { Pencil } from '@/SVGs/Pencil';
import { RoundPrint } from '@/SVGs/Print';
import { Speaker } from '@/SVGs/Speaker';
import { User } from '@/SVGs/User';
import { usePage } from '@inertiajs/react';
import { Sparkles } from 'lucide-react';

export default function CandidateNavLinks({ page = 'dashboard' }: { page: string }) {
    const { auth } = usePage<{
        auth: {
            user: {
                id: string;
            };
        };
    }>().props;

    return (
        <ul className="ml-2">
            <a href={route('candidate.dashboard')}>
                <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                    <BaselineDashboard className={`size-5 group-hover:text-primary ${page === 'dashboard' ? 'text-primary' : 'text-gray-500'}`} />
                    <p className={`group-hover:text-primary ${page === 'dashboard' ? 'text-primary' : 'text-gray-500'}`}>Dashboard</p>
                </li>
            </a>
            <a href={route('candidate.editProfile')}>
                <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                    <Pencil className={`size-5 group-hover:text-primary ${page === 'edit-profile' ? 'text-primary' : 'text-gray-500'}`} />
                    <p className={`group-hover:text-primary ${page === 'edit-profile' ? 'text-primary' : 'text-gray-500'}`}>Edit Profile</p>
                </li>
            </a>
            <a href={route('candidate.buildResume')}>
                <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                    <RoundInsertDriveFile
                        className={`size-5 group-hover:text-primary ${page === 'build-resume' ? 'text-primary' : 'text-gray-500'}`}
                    />
                    <p className={`group-hover:text-primary ${page === 'build-resume' ? 'text-primary' : 'text-gray-500'}`}>Build Resume</p>
                </li>
            </a>
            <a href={route('candidate.downloadResume')}>
                <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                    <RoundPrint className={`size-5 group-hover:text-primary ${page === 'download-cv' ? 'text-primary' : 'text-gray-500'}`} />
                    <p className={`group-hover:text-primary ${page === 'download-cv' ? 'text-primary' : 'text-gray-500'}`}>Download CV</p>
                </li>
            </a>
            <a href={route('candidate.analyze.resume')}>
                <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                    <Sparkles
                        fill="gray"
                        className={`size-5 group-hover:text-primary ${page === 'resume-analyzer' ? 'text-primary' : 'text-gray-500'}`}
                    />
                    <p className={`group-hover:text-primary ${page === 'resume-analyzer' ? 'text-primary' : 'text-gray-500'}`}>AI Resume Analyzer</p>
                </li>
            </a>
            <a
                href={route('candidate.viewPublicProfile', {
                    id: auth.user.id,
                })}
            >
                <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                    <RoundRemoveRedEye
                        className={`size-5 group-hover:text-primary ${page === 'view-public-profile' ? 'text-primary' : 'text-gray-500'}`}
                    />
                    <p className={`group-hover:text-primary ${page === 'view-public-profile' ? 'text-primary' : 'text-gray-500'}`}>
                        View Public Profile
                    </p>
                </li>
            </a>

            <a href={route('candidate.jobApplications')}>
                <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                    <MonitorFill16
                        className={`size-5 group-hover:text-primary ${page === 'my-job-application' ? 'text-primary' : 'text-gray-500'}`}
                    />
                    <p className={`group-hover:text-primary ${page === 'my-job-application' ? 'text-primary' : 'text-gray-500'}`}>
                        My Job Applications
                    </p>
                </li>
            </a>
            <a href={route('candidate.favoriteJobs')}>
                <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                    <Heart className={`size-5 group-hover:text-primary ${page === 'my-favorite-jobs' ? 'text-primary' : 'text-gray-500'}`} />
                    <p className={`group-hover:text-primary ${page === 'my-favorite-jobs' ? 'text-primary' : 'text-gray-500'}`}>My Favorite Jobs</p>
                </li>
            </a>
            <a href={route('candidate.jobsAlert')}>
                <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                    <Speaker className={`size-5 group-hover:text-primary ${page === 'my-job-alert' ? 'text-primary' : 'text-gray-500'}`} />
                    <p className={`group-hover:text-primary ${page === 'my-job-alert' ? 'text-primary' : 'text-gray-500'}`}>My Jobs Alert</p>
                </li>
            </a>
            <a href={route('candidate.PaymentHistory')}>
                <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                    <FileInvoiceDollar
                        className={`size-5 group-hover:text-primary ${page === 'payment-history' ? 'text-primary' : 'text-gray-500'}`}
                    />
                    <p className={`group-hover:text-primary ${page === 'payment-history' ? 'text-primary' : 'text-gray-500'}`}>Payment History</p>
                </li>
            </a>
            <a href={route('candidate.editProfile')}>
                <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                    <RoundInsertDriveFile
                        className={`size-5 group-hover:text-primary ${page === 'manage-resume' ? 'text-primary' : 'text-gray-500'}`}
                    />
                    <p className={`group-hover:text-primary ${page === 'manage-resume' ? 'text-primary' : 'text-gray-500'}`}>Manage Resume</p>
                </li>
            </a>
            <a href={route('candidate.messages')}>
                <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                    <Message className={`size-5 group-hover:text-primary ${page === 'messages' ? 'text-primary' : 'text-gray-500'}`} />
                    <p className={`group-hover:text-primary ${page === 'messages' ? 'text-primary' : 'text-gray-500'}`}>My Messages</p>
                </li>
            </a>
            <a href={route('candidate.followings')}>
                <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                    <User className={`size-5 group-hover:text-primary ${page === 'my-followings' ? 'text-primary' : 'text-gray-500'}`} />
                    <p className={`group-hover:text-primary ${page === 'my-followings' ? 'text-primary' : 'text-gray-500'}`}>My Followings</p>
                </li>
            </a>
            <a href={route('candidate.messages')}>
                <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                    <Message className={`size-5 group-hover:text-primary ${page === 'messages' ? 'text-primary' : 'text-gray-500'}`} />
                    <p className={`group-hover:text-primary ${page === 'messages' ? 'text-primary' : 'text-gray-500'}`}>Messages</p>
                </li>
            </a>
            <a href={route('candidate.logout')}>
                <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                    <Exit className={`size-5 group-hover:text-primary ${page === 'logout' ? 'text-primary' : 'text-gray-500'}`} />
                    <p className={`group-hover:text-primary ${page === 'logout' ? 'text-primary' : 'text-gray-500'}`}>Logout</p>
                </li>
            </a>
        </ul>
    );
}
