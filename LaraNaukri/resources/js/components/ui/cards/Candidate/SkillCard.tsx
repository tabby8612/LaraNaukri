import { Pencil } from '@/SVGs/Pencil';
import { CandidateSkill } from '@/types';
import { router } from '@inertiajs/react';
import { X } from 'lucide-react';
import AddSkill from '../AddSkill';
import DeleteConfirmation from '../DeleteConfirmation';

export default function SkillCard({ skills, skillsRefreshFn }: { skills: CandidateSkill[]; skillsRefreshFn: () => void }) {
    function deleteHandler(id: string) {
        router.delete(route('candidate.skillDelete', id), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                skillsRefreshFn();
            },
        });
    }

    return (
        <table>
            <tbody className="">
                {skills.map((skill) => (
                    <tr id={skill.id} className="my-3 h-7 odd:bg-gray-200" key={skill.id}>
                        <td className="p-1 font-bold">{skill.skill.name}</td>
                        <td className="p-1">{skill.experience.name}</td>
                        <td className="p-1">
                            <span className="flex items-center justify-center gap-2">
                                <AddSkill trigger={<Pencil className="size-4" />} skill={skill} skillsRefreshFn={skillsRefreshFn} type="update" />
                                <DeleteConfirmation trigger={<X className="size-5 text-red-500" />} deleteFn={() => deleteHandler(skill.id)} />
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
