import CustomInputField from '@/components/ui/cards/CustomInputField';
import CustomSelectField from '@/components/ui/cards/CustomSelectField';
import { Input } from '@/components/ui/UnusedUI/input';
import { Label } from '@/components/ui/UnusedUI/label';

type Props = {
    experience_id: number;
    career_level_id: number;
    industry_id: number;
    category_id: number;
    salary_from: number;
    salary_to: number;
    is_subscribed: boolean;
    profession: string;
    setData: (att: string, val: string) => void;
};

export default function EditCareerInformation({
    experience_id,
    career_level_id,
    industry_id,
    category_id,
    salary_from,
    salary_to,
    is_subscribed,
    profession,
    setData,
}: Props) {
    return (
        <>
            <h1 className="font-montserrat text-2xl font-bold">Career Information</h1>
            <div className="mt-3 flex gap-3">
                <CustomSelectField
                    label="Job Experience"
                    name="experience_id"
                    fetchTable="experiences"
                    onChange={(e) => setData('experience_id', e.target.value)}
                    value={experience_id}
                    isrequired
                />
                <CustomSelectField
                    label="Career Level"
                    name="career_level_id"
                    fetchTable="career_levels"
                    value={career_level_id}
                    onChange={(e) => setData('career_level_id', e.target.value)}
                    isrequired
                />
            </div>
            <div className="mt-3 flex gap-3">
                <CustomInputField
                    label="Profession"
                    name="profession"
                    type="text"
                    placeholder="Enter Your Profession or Title"
                    value={profession}
                    onChange={(e) => setData('profession', e.target.value)}
                />

                <CustomSelectField
                    label="Select Industry"
                    name="industry_id"
                    fetchTable="industries"
                    value={industry_id}
                    onChange={(e) => setData('industry_id', e.target.value)}
                    isrequired
                />
                <CustomSelectField
                    label="Select Category"
                    name="category_id"
                    fetchTable="categories"
                    value={category_id}
                    onChange={(e) => setData('category_id', e.target.value)}
                    isrequired
                />
            </div>

            <div className="mt-3 flex gap-3">
                <CustomInputField label="Select Currency" disabled={true} type="text" name="currency" placeholder="" value="USD" />
                <CustomInputField
                    label="Current Salary"
                    type="text"
                    name="salary_from"
                    placeholder="Current Salary"
                    value={`${salary_from}`}
                    onChange={(e) => setData('salary_from', e.target.value)}
                    isrequired
                />
                <CustomInputField
                    label="Expected Salary"
                    type="text"
                    name="salary_to"
                    placeholder="Expected Salary"
                    value={`${salary_to}`}
                    onChange={(e) => setData('salary_to', e.target.value)}
                    isrequired
                />
            </div>
            <div className="my-7 flex items-center gap-3">
                <Input type="checkbox" name="is_subscribed" id="is_subscribed" className="size-5" defaultChecked={is_subscribed} />
                <Label>Subscribe to Newsletter</Label>
            </div>
        </>
    );
}
