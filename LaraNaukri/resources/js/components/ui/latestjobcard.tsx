type Props = {
    imageUrl: string;
    title: string;
    company: string;
    type: string;
    city: string;
};

export default function Latestjobcard({ imageUrl, title, company, type, city }: Props) {
    return (
        <div className="flex cursor-pointer gap-5 rounded-xl border p-3 transition-all duration-300 hover:border-primary hover:shadow-xl">
            <img src={imageUrl} alt="" className="size-24 rounded-lg" />
            <div className="w-full">
                <h1 className="h-4 font-montserrat leading-5 font-semibold">{title}</h1>
                <p className="py-2">
                    <a href="#" className="text-primary">
                        {company}
                    </a>
                    <span className="text-stone-500"> ⋅ {city}</span>
                </p>
                <p className="mt-2 w-fit rounded-full bg-purple-500 px-3 py-1 text-sm tracking-wider text-white">{type}</p>
            </div>
        </div>
    );
}
