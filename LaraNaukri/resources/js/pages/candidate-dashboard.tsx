import Searchjobhero from '@/components/sections/searchjobhero';
import CandidateSidebarHeader from '@/components/ui/cards/CandidateSidebarHeader';
import OpenToWork from '@/components/ui/cards/OpenToWork';
import AppLayout from '@/layouts/app/app-layout';
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

export default function CandidateDashboard() {
    return (
        <AppLayout page="">
            <Searchjobhero />
            <section className="mx-auto flex w-11/12 gap-1 p-7">
                <div id="candidate-sidebar" className="w-[28%] p-4">
                    <CandidateSidebarHeader />
                    <OpenToWork />
                    <ul className="ml-2">
                        <a href="">
                            <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                                <BaselineDashboard className="size-5 text-gray-500 group-hover:text-primary" />
                                <p className="text-gray-500 group-hover:text-primary">Dashboard</p>
                            </li>
                        </a>
                        <a href="">
                            <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                                <Pencil className="size-5 text-gray-500 group-hover:text-primary" />
                                <p className="text-gray-500 group-hover:text-primary">Edit Profile</p>
                            </li>
                        </a>
                        <a href="">
                            <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                                <RoundInsertDriveFile className="size-5 text-gray-500 group-hover:text-primary" />
                                <p className="text-gray-500 group-hover:text-primary">Build Resume</p>
                            </li>
                        </a>
                        <a href="">
                            <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                                <RoundPrint className="size-5 text-gray-500 group-hover:text-primary" />
                                <p className="text-gray-500 group-hover:text-primary">Download CV</p>
                            </li>
                        </a>
                        <a href="">
                            <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                                <RoundRemoveRedEye className="size-5 text-gray-500 group-hover:text-primary" />
                                <p className="text-gray-500 group-hover:text-primary">View Public Profile</p>
                            </li>
                        </a>
                        <a href="">
                            <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                                <MonitorFill16 className="size-5 text-gray-500 group-hover:text-primary" />
                                <p className="text-gray-500 group-hover:text-primary">My Job Applications</p>
                            </li>
                        </a>
                        <a href="">
                            <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                                <Heart className="size-5 text-gray-500 group-hover:text-primary" />
                                <p className="text-gray-500 group-hover:text-primary">My Favorite Jobs</p>
                            </li>
                        </a>
                        <a href="">
                            <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                                <Speaker className="size-5 text-gray-500 group-hover:text-primary" />
                                <p className="text-gray-500 group-hover:text-primary">My Jobs Alert</p>
                            </li>
                        </a>
                        <a href="">
                            <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                                <FileInvoiceDollar className="size-5 text-gray-500 group-hover:text-primary" />
                                <p className="text-gray-500 group-hover:text-primary">Payment History</p>
                            </li>
                        </a>
                        <a href="">
                            <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                                <RoundInsertDriveFile className="size-5 text-gray-500 group-hover:text-primary" />
                                <p className="text-gray-500 group-hover:text-primary">Manage Resume</p>
                            </li>
                        </a>
                        <a href="">
                            <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                                <Message className="size-5 text-gray-500 group-hover:text-primary" />
                                <p className="text-gray-500 group-hover:text-primary">My Messages</p>
                            </li>
                        </a>
                        <a href="">
                            <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                                <User className="size-5 text-gray-500 group-hover:text-primary" />
                                <p className="text-gray-500 group-hover:text-primary">My Followings</p>
                            </li>
                        </a>
                        <a href="">
                            <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                                <Message className="size-5 text-gray-500 group-hover:text-primary" />
                                <p className="text-gray-500 group-hover:text-primary">Messages</p>
                            </li>
                        </a>
                        <a href="">
                            <li className="group mt-4 flex items-center gap-2 hover:cursor-pointer">
                                <Exit className="size-5 text-gray-500 group-hover:text-primary" />
                                <p className="text-gray-500 group-hover:text-primary">Logout</p>
                            </li>
                        </a>
                    </ul>
                </div>
                <div id="candidate-content" className="w-[72%] bg-blue-400 p-4">
                    <h1>Content</h1>
                </div>
            </section>
        </AppLayout>
    );
}
