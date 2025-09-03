import { Pencil } from '@/SVGs/Pencil';
import { X } from 'lucide-react';
import AddLanguage from '../AddLanguage';

type Language = {
    id: string;
    name: string;
    language_level: string;
};
export default function LanguageCard({ languages }: { languages: Language[] }) {
    return (
        <table>
            <tbody className="">
                {languages.map((language) => (
                    <tr id={language.id} className="my-3 h-7 odd:bg-gray-200" key={language.id}>
                        <td className="text-center font-bold">{language.name}</td>
                        <td className="text-center">{language.language_level}</td>
                        <td className="text-center">
                            <span className="flex items-center justify-center gap-2">
                                <AddLanguage type={<Pencil className="size-4" />} />
                                <a href="">
                                    <X className="text-red-500" />
                                </a>
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
