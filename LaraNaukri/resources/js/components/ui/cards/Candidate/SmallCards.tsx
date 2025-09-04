import { Card } from '../../card';

type Skill = {
    id: string;
    name: string;
    years: string;
};

type Language = {
    id: string;
    name: string;
    language_level: string;
};

export default function SmallCards({ skills, languages }: { skills?: Skill[]; languages?: Language[] }) {
    return (
        <div className="flex gap-5">
            {skills &&
                skills.map((skill) => (
                    <Card className="gap-0 border-gray-300 bg-green-50 px-7 py-2 text-center shadow-none hover:border-primary" key={skill.id}>
                        <h1 className="font-bold">{skill.name}</h1>
                        <p>{skill.years}</p>
                    </Card>
                ))}
            {languages &&
                languages.map((language) => (
                    <Card className="gap-0 border-gray-300 bg-green-50 px-7 py-2 text-center shadow-none hover:border-primary" key={language.id}>
                        <h1 className="font-bold">{language.name}</h1>
                        <p>{language.language_level}</p>
                    </Card>
                ))}
        </div>
    );
}
