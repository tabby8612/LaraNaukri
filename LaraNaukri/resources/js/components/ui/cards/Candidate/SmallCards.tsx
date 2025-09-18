import { CandidateLanguage, Skills } from '@/types';
import { Card } from '../../card';

export default function SmallCards({ skills, languages }: { skills?: Skills[]; languages?: CandidateLanguage[] }) {
    return (
        <div className="flex gap-5">
            {skills &&
                skills.map((skill) => (
                    <Card className="gap-0 border-gray-300 bg-green-50 px-7 py-2 text-center shadow-none hover:border-primary" key={skill.skill.id}>
                        <h1 className="font-bold">{skill.skill.name}</h1>
                        <p>{skill.experience.name}</p>
                    </Card>
                ))}
            {languages &&
                languages.map((language) => (
                    <Card className="gap-0 border-gray-300 bg-green-50 px-7 py-2 text-center shadow-none hover:border-primary" key={language.id}>
                        <h1 className="font-bold">{language.name}</h1>
                        <p>{language.pivot.language_level}</p>
                    </Card>
                ))}
        </div>
    );
}
