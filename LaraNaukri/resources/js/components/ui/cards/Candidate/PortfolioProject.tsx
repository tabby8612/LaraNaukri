type Props = {
    image: string;
    id: string;
    name: string;
    dateFrom: string;
    dateTo: string;
    description: string;
};

export default function PortfilioProject({ image, id, name, dateFrom, dateTo, description }: Props) {
    return (
        <div className="size-full border-0 shadow-none">
            <img src={image} alt={name} className="rounded-lg" />
            <h1 className="font-montserrat font-bold">{name}</h1>
            <p className="mt-3">
                {dateFrom} - {dateTo}
            </p>
            <p>{description}</p>

            <p className="mt-3">
                <span className="cursor-pointer text-primary" onClick={() => console.log(id)}>
                    Edit
                </span>{' '}
                |{' '}
                <span className="cursor-pointer text-red-500" onClick={() => console.log(id)}>
                    Delete
                </span>
            </p>
        </div>
    );
}
