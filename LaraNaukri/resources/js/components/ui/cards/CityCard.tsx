type Props = {
    imageUrl: string;
    cityName: string;
    jobs: number;
    id: number;
};

export default function CityCard({ imageUrl, cityName, jobs, id }: Props) {
    return (
        <figure className="group relative float-left w-[100%] max-w-md min-w-xs cursor-pointer overflow-hidden bg-green-800 text-center">
            <img
                src={imageUrl}
                alt={cityName}
                className="relative block min-h-full w-full transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <figcaption className="absolute top-0 left-0 flex h-full w-full flex-wrap content-center items-center justify-center bg-gray-500/40 p-8 text-2xl text-white uppercase transition-colors duration-500 ease-in-out backface-hidden group-hover:bg-green-900/50">
                <h2 className="text-4xl transition-transform duration-500 group-hover:translate-y-[-20px]">{cityName}</h2>
                <div className="opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <p className="border-2 border-white px-5 py-3 text-center">({jobs}) Open Jobs</p>
                    <a
                        href={route('search.jobs', {
                            city_id: id,
                        })}
                        className="absolute top-0 left-0 block h-full w-full text-[0px] opacity-100"
                    >
                        View Jobs
                    </a>
                </div>
            </figcaption>
        </figure>
    );
}
