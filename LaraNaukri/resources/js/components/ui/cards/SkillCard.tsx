import { Puzzle } from 'lucide-react';
import { Card, CardDescription, CardTitle } from '../card';

export default function SkillCard({ skills }: { skills: string[] }) {
    return (
        <Card className="my-7 border-stone-200 px-3 shadow-transparent">
            <CardTitle className="text-xl">
                <div className="flex items-center gap-2">
                    <Puzzle fill="#6a7282" className="text-gray-500" />
                    <p>Skills</p>
                </div>
            </CardTitle>
            <CardDescription>
                {skills.map((skill, index) => (
                    <span className="cursor-text rounded-lg bg-stone-200 px-3 py-2 font-semibold" key={index}>
                        {skill}
                    </span>
                ))}
            </CardDescription>
        </Card>
    );
}
