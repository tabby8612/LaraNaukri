import { useForm } from '@inertiajs/react';
import { SearchIcon } from 'lucide-react';
import { FormEvent } from 'react';
import CustomSelectField from '../ui/cards/CustomSelectField';
import { Button } from '../ui/UnusedUI/button';
import { Input } from '../ui/UnusedUI/input';

export default function SearchTalentHero() {
    const { data, setData, post } = useForm({
        name: '',
        category_id: '',
    });

    function searchHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        post(route('get.search.talent'));
    }

    return (
        <header className="bg-green-50 py-10">
            <section className="mx-auto flex flex-col items-center justify-between gap-12 px-10 md:w-3/4 md:flex-row">
                <h1 className="font-montserrat text-2xl font-bold md:w-1/4">Find Candidates</h1>
                <form className="flex w-full items-center gap-10 rounded-2xl border border-primary bg-white p-3" onSubmit={(e) => searchHandler(e)}>
                    <Input
                        className="h-11 border-0 border-gray-400 text-lg shadow-none selection:text-white focus-visible:ring-0"
                        placeholder="Enter job seeker name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                    />
                    <CustomSelectField
                        fetchTable="categories"
                        label="Functional Area"
                        name="category_id"
                        className="w-full border-0 focus-visible:outline-0"
                        showLabel={false}
                        value={data.category_id}
                        onChange={(e) => setData('category_id', e.target.value)}
                    />
                    <Button className="h-11 w-25 cursor-pointer rounded-lg border bg-primary p-3 font-bold text-white">
                        <SearchIcon className="size-6" />
                    </Button>
                </form>
            </section>
        </header>
    );
}
