import { Pencil } from '@/SVGs/Pencil';
import { X } from 'lucide-react';
import AddSkill from '../AddSkill';

type Skill = {
    id: string;
    name: string;
    years: string;
};
export default function SkillCard({ skills }: { skills: Skill[] }) {
    return (
        <table>
            <tbody className="">
                {skills.map((skill) => (
                    <tr id={skill.id} className="my-3 h-7 odd:bg-gray-200" key={skill.id}>
                        <td className="p-1 font-bold">{skill.name}</td>
                        <td className="p-1">{skill.years}</td>
                        <td className="p-1">
                            <span className="flex items-center justify-center gap-2">
                                <AddSkill trigger={<Pencil className="size-4" />} />
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
