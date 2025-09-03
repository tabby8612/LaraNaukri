import { Card } from '../../card';
import AddSkill from '../AddSkill';
import SkillCard from './SkillCard';

type Skill = {
    id: string;
    name: string;
    years: string;
};

export default function SkillsCard({ skills }: { skills: Skill[] }) {
    return (
        <Card className="mt-10 border-gray-200 p-7 shadow-xl">
            <div className="flex items-center justify-between">
                <h1 className="font-montserrat text-2xl font-bold">Skills</h1>
                <AddSkill type="+" />
            </div>
            <SkillCard skills={skills} />
        </Card>
    );
}
