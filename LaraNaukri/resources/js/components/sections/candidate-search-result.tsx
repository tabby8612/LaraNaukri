import { Candidate } from '@/types';
import FeaturedCandidateCard from '../ui/cards/FeaturedCandidateCard';

export default function CandidateSearchResults({ candidates }: { candidates: Candidate[] }) {
    console.log(candidates);

    return (
        <div id="job-results" className="w-3/4">
            {candidates?.length ? (
                <div>
                    <h1>{candidates.length} Candidates Found</h1>
                    <p>
                        Showing Candidates: 1 - {candidates.length} Total {candidates.length}
                    </p>
                </div>
            ) : (
                <div>
                    <h1>0 Jobs Found</h1>
                    <p>Showing Jobs: 0 jobs</p>
                </div>
            )}

            <div className="my-7 grid grid-cols-3 gap-5">
                {candidates &&
                    candidates.map((candidate) => (
                        <FeaturedCandidateCard
                            id={candidate.user_id ?? candidate.id}
                            imageUrl={candidate.image_path}
                            location={candidate.country?.name ?? 'Country Not Set'}
                            name={`${candidate.first_name} ${candidate.last_name}`}
                            profession={candidate.profession}
                            featured={candidate.is_featured ? true : false}
                            key={candidate.id}
                        />
                    ))}
            </div>
        </div>
    );
}
