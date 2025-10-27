import { Skills } from '@/types';

export default function SkillsDetails({ skills }: { skills: Skills[] }) {
    return (
        <div id="skills-details" className="">
            <h1 className="font-montserrat text-xl font-bold text-white">Key Skills</h1>
            <hr className="my-3 h-0.5 rounded-2xl bg-white/50" />
            <ul className="flex list-disc flex-wrap text-white">
                {skills.length > 0 ? (
                    skills.map((skill) => (
                        <li className="mx-3 mt-2 rounded-full bg-gray-300 px-2 py-1 text-sm text-black" key={skill.skill.id}>
                            {skill.skill.name}
                        </li>
                    ))
                ) : (
                    <div className="text-center">😢'No Skills To Display. Start Adding them to show it here'</div>
                )}
            </ul>
        </div>
    );
}
