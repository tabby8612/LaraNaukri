import { Card } from '../../card';
import AddLanguage from '../AddLanguage';
import LanguageCard from './LanguageCard';

type Language = {
    id: string;
    name: string;
    language_level: string;
};

export default function LanguagesCard({ languages }: { languages: Language[] }) {
    return (
        <Card className="mt-10 border-gray-200 p-7 shadow-xl">
            <div className="flex items-center justify-between">
                <h1 className="font-montserrat text-2xl font-bold">Languages</h1>
                <AddLanguage type="+" />
            </div>
            <LanguageCard languages={languages} />
        </Card>
    );
}
