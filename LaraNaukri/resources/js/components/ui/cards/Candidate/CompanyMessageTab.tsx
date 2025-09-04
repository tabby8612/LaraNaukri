import { Card } from '../../card';

type Props = {
    company_image_path: string;
    company_name: string;
    unread_message_count: number;
};

export default function CompanyMessageTab({ company_image_path, company_name, unread_message_count }: Props) {
    return (
        <Card className="flex cursor-pointer flex-row items-center gap-3 rounded-none border-0 bg-gray-300/30 px-3 py-3 shadow-none not-first:mt-2">
            <img src={company_image_path} alt={company_name} className="size-12 rounded-full" />
            <h1 className="grow font-bold">{company_name}</h1>
            <p className="text-primary">{unread_message_count}</p>
        </Card>
    );
}
