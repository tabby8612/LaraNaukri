import { CandidateSkill } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { Card } from '../../card';
import AddSkill from '../AddSkill';
import SkillCard from './SkillCard';

export default function SkillsCard() {
    const { skills } = usePage<{ skills: CandidateSkill[] }>().props;

    function refreshHandler() {
        router.get(
            route('candidate.buildResume'),
            {},
            {
                preserveScroll: true,
                preserveState: true,
            },
        );
    }

    return (
        <Card className="mt-10 border-gray-200 p-7 shadow-xl">
            <div className="flex items-center justify-between">
                <h1 className="font-montserrat text-2xl font-bold">Skills</h1>
                <AddSkill trigger="+" skillsRefreshFn={refreshHandler} type="create" />
            </div>
            {skills.length > 0 && <SkillCard skills={skills} skillsRefreshFn={refreshHandler} />}
        </Card>
    );
}
