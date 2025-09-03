import { Pencil } from '@/SVGs/Pencil';
import { Download, X } from 'lucide-react';
import { Card } from '../../card';
import UploadCV from '../UploadCV';

type CVProps = {
    title: string;
    isDefault: boolean;
    date: string;
    id: string;
};

export default function CVCard({ CVdetails }: { CVdetails: CVProps[] }) {
    return (
        <Card className="border-gray-200 p-7 shadow-xl">
            <div className="flex items-center justify-between">
                <h1 className="font-montserrat text-2xl font-bold">Attach CV</h1>
                <UploadCV type="+" />
            </div>
            <table>
                <thead>
                    <tr className="bg-primary text-white">
                        <th>CV Title</th>
                        <th>Default CV</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="">
                    {CVdetails.map((item) => (
                        <tr id="1" className="my-3 h-9 even:bg-gray-200" key={item.id}>
                            <td className="text-center">
                                <a href="" className="text-primary underline">
                                    {item.title}
                                </a>
                            </td>
                            <td className="text-center">{item.isDefault ? 'Default' : 'Not Default'}</td>
                            <td className="text-center">{item.date}</td>
                            <td className="text-center">
                                <span className="flex items-center justify-center gap-2">
                                    <a href="">
                                        <Download className="text-primary" />
                                    </a>
                                    <UploadCV type={<Pencil className="size-4" />} title="Previous CV" />
                                    <a href="">
                                        <X className="text-red-500" />
                                    </a>
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}
