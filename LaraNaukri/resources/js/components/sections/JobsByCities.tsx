import CityCard from '../ui/cards/CityCard';

const cities = [
    {
        imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/city_images/durant-1741389489-2.jpg',
        cityName: 'Durant',
        id: 1,
        jobs: 2,
    },
    {
        imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/city_images/bessemer-1741389506-375.jpg',
        cityName: 'Bessemer',
        id: 2,
        jobs: 5,
    },
    {
        imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/city_images/atlanta-1741392599-737.jpg',
        cityName: 'Atlanta',
        id: 3,
        jobs: 2,
    },
    {
        imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/city_images/barrington-1741389466-492.jpg',
        cityName: 'Barrington',
        id: 4,
        jobs: 10,
    },
    {
        imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/city_images/kaneohe-station-1741389578-723.jpg',
        cityName: 'Kaneohe Station',
        id: 5,
        jobs: 20,
    },
    {
        imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/city_images/el-dorado-1741389627-330.jpg',
        cityName: 'Eldorado',
        id: 6,
        jobs: 5,
    },
];

export default function JobsByCities() {
    return (
        <section id="jobsByCities" className="bg-green-50 px-14 py-10">
            <h1 className="my-7 text-center font-montserrat text-4xl font-semibold">Jobs By Cities</h1>
            <div className="grid grid-cols-4 gap-5" id="citygrid">
                {cities.map((city) => (
                    <CityCard imageUrl={city.imageUrl} cityName={city.cityName} id={city.id} jobs={city.jobs} key={city.id} />
                ))}
            </div>
        </section>
    );
}
