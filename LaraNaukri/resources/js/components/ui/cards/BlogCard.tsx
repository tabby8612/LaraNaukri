import { CalendarCheck } from 'lucide-react';

type Props = {
    imageUrl: string;
    date: string;
    title: string;
};

export default function BlogCard({ imageUrl, date, title }: Props) {
    return (
        <div className="p-7">
            <img src={imageUrl} alt={title} />
            <div className="my-3 flex gap-2">
                <CalendarCheck />
                <p>{date}</p>
            </div>
            <a href="http://google.com" className="font-montserrat text-lg font-semibold transition-colors delay-100 duration-500 hover:text-primary">
                {title}
            </a>
        </div>
    );
}
