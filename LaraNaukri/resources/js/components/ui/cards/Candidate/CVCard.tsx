import { Pencil } from '@/SVGs/Pencil';
import { Resume } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { Download, X } from 'lucide-react';
import { Card } from '../../card';
import DeleteConfirmation from '../DeleteConfirmation';
import UploadCV from '../UploadCV';

export default function CVCard() {
    const { resumes } = usePage<{ resumes: Resume[] }>().props;

    function deleteHandler(id: number) {
        router.delete(route('candidate.destroyResume', { id }));
    }

    return (
        <Card className="border-gray-200 p-7 shadow-xl">
            <div className="flex items-center justify-between">
                <h1 className="font-montserrat text-2xl font-bold">Attach CV</h1>
                <UploadCV type="+" />
            </div>
            {resumes.length > 0 ? (
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
                        {resumes.map((item) => (
                            <tr id={`${item.id}`} className="my-3 h-9 even:bg-gray-200" key={item.id}>
                                <td className="text-center">
                                    <a href={`/storage/${item.cv_path}`} className="text-primary underline" target="_blank">
                                        {item.title}
                                    </a>
                                </td>
                                <td className="text-center">{item.is_default ? 'Default' : 'Not Default'}</td>
                                <td className="text-center">{item.updated_at}</td>
                                <td className="text-center">
                                    <span className="flex items-center justify-center gap-2">
                                        <a href={`/storage/${item.cv_path}`} target="_blank">
                                            <Download className="text-primary" />
                                        </a>
                                        <UploadCV
                                            type={<Pencil className="size-4" />}
                                            title={item.title}
                                            cv_path={item.cv_path}
                                            forUpdate
                                            id={`${item.id}`}
                                        />
                                        <DeleteConfirmation trigger={<X className="text-red-500" />} deleteFn={() => deleteHandler(item.id)} />
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="text-center text-lg">😢 'No CV To Display. Start Adding them to show it here'</div>
            )}
        </Card>
    );
}
