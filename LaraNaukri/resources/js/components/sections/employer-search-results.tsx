import { Company } from '@/types';
import EmployerCard from '../ui/cards/EmployerCard';

export default function EmployerSearchResults({ companies }: { companies: Company[] }) {
    console.log(companies);

    return (
        <div id="job-results" className="w-3/4">
            <h1 className="font-montserrat text-xl font-semibold">{companies.length} Employers Found</h1>
            <p>
                Showing Employers: 1 - {companies.length} Total {companies.length}
            </p>

            <div className="my-7 grid grid-cols-3 gap-5">
                {companies.map((company) => (
                    <EmployerCard
                        imageUrl={company.image_path}
                        industry={company.industry?.name ?? ''}
                        location={company.location}
                        openJobCount={company.jobs_count}
                        title={company.name}
                        slug={company.slug}
                        id={`${company.id}`}
                        key={company.id}
                    />
                ))}
            </div>
        </div>
    );
}
