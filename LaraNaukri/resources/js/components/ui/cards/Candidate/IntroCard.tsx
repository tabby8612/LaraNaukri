import { Location } from '@/SVGs/Location';
import { Email } from '@/SVGs/Mail';
import { Phone } from '@/SVGs/Phone';
import { Candidate } from '@/types';

export default function IntroCard({ candidate }: { candidate: Candidate }) {
    return (
        <section id="candidate-overview" className="absolute -bottom-1/4 left-10 mx-auto size-11/12 h-1/2 rounded-2xl bg-green-100 p-7">
            <div className="flex h-full items-center gap-5">
                <img
                    src={`/storage/${candidate.image_path ? candidate.image_path : '/user_images/default.png'}`}
                    alt={candidate.name}
                    className="h-20 w-30 rounded-lg"
                />
                <div>
                    <h1 className="font-montserrat text-2xl font-bold text-primary">{candidate.name}</h1>
                    <div className="mt-2 flex items-center gap-3">
                        <Location className="text-gray-500" />
                        <p className="text-gray-500">{candidate.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="text-gray-500" />
                        <p className="text-gray-500">+{candidate.phone}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Email className="text-gray-500" />
                        <p className="text-gray-500">{candidate.user.email}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
