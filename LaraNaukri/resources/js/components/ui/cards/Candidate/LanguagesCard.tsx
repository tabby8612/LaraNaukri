import { CandidateLanguage } from '@/types';
import { useEffect, useState } from 'react';
import { Card } from '../../card';
import AddLanguage from '../AddLanguage';
import LanguageCard from './LanguageCard';

export default function LanguagesCard() {
    const [languages, setLanguages] = useState<CandidateLanguage[] | []>([]);

    async function getCandidateLanguages() {
        const response = await fetch(route('candidate.languages'));
        const data = await response.json();

        setLanguages(data);
    }

    useEffect(() => {
        getCandidateLanguages();
    }, []);

    return (
        <Card className="mt-10 border-gray-200 p-7 shadow-xl">
            <div className="flex items-center justify-between">
                <h1 className="font-montserrat text-2xl font-bold">Languages</h1>
                <AddLanguage trigger="+" type="create" refreshFn={getCandidateLanguages} />
            </div>
            {languages && <LanguageCard languages={languages} refreshFn={getCandidateLanguages} />}
        </Card>
    );
}
