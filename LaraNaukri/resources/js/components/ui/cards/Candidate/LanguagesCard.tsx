import { CandidateLanguage } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { Card } from '../../card';
import AddLanguage from '../AddLanguage';
import LanguageCard from './LanguageCard';

export default function LanguagesCard() {
    const { languages } = usePage<{ languages: CandidateLanguage[] }>().props;

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
                <h1 className="font-montserrat text-2xl font-bold">Languages</h1>
                <AddLanguage trigger="+" type="create" refreshFn={refreshHandler} />
            </div>
            {languages.length > 0 && <LanguageCard languages={languages} refreshFn={refreshHandler} />}
            {languages.length < 1 && <p className="text-center text-lg">😢 No Languages To Show. Click '+' To Add Language</p>}
        </Card>
    );
}
