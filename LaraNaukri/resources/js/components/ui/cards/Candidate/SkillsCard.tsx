import { CandidateSkill } from '@/types';
import { useEffect, useState } from 'react';
import { Card } from '../../card';
import AddSkill from '../AddSkill';
import SkillCard from './SkillCard';

export default function SkillsCard() {
    const [skills, setSkills] = useState<CandidateSkill[] | []>([]);

    async function fetchCandidateSkills() {
        const response = await fetch(route('candidate.skills'));
        const data = await response.json();
        setSkills(data);
    }

    useEffect(() => {
        fetchCandidateSkills();
    }, []);

    return (
        <Card className="mt-10 border-gray-200 p-7 shadow-xl">
            <div className="flex items-center justify-between">
                <h1 className="font-montserrat text-2xl font-bold">Skills</h1>
                <AddSkill trigger="+" skillsRefreshFn={fetchCandidateSkills} type="create" />
            </div>
            {skills.length > 0 && <SkillCard skills={skills} skillsRefreshFn={fetchCandidateSkills} />}
        </Card>
    );
}
