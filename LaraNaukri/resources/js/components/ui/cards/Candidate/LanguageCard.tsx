import { Pencil } from '@/SVGs/Pencil';
import { CandidateLanguage } from '@/types';
import { router } from '@inertiajs/react';
import { X } from 'lucide-react';
import AddLanguage from '../AddLanguage';
import DeleteConfirmation from '../DeleteConfirmation';

export default function LanguageCard({ languages, refreshFn }: { languages: CandidateLanguage[]; refreshFn: () => void }) {
    function deleteHandler(id: string) {
        router.delete(route('candidate.languageDelete', id), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                refreshFn();
            },
        });
    }

    return (
        <table>
            <tbody className="">
                {languages.map((language) => (
                    <tr id={language.id} className="my-3 h-7 odd:bg-gray-200" key={language.id}>
                        <td className="p-1 font-bold">{language.name}</td>
                        <td className="text-center">{language.pivot.language_level}</td>
                        <td className="text-right">
                            <span className="flex items-center justify-center gap-2">
                                <AddLanguage trigger={<Pencil className="size-4" />} language={language} type="update" refreshFn={refreshFn} />
                                <DeleteConfirmation
                                    trigger={<X className="size-5 text-red-500" />}
                                    deleteFn={() => deleteHandler(language.pivot.id)}
                                />
                                <a href=""></a>
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
