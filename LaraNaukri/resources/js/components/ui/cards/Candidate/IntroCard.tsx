import { Location } from '@/SVGs/Location';
import { Email } from '@/SVGs/Mail';
import { Phone } from '@/SVGs/Phone';

export default function IntroCard() {
    return (
        <section id="candidate-overview" className="absolute -bottom-1/4 left-10 mx-auto size-11/12 h-1/2 rounded-2xl bg-green-100 p-7">
            <div className="flex items-center gap-5">
                <img
                    src="https://www.sharjeelanjum.com/demos/jobsportal-update/user_images/-1741437874-596.jpg"
                    alt=""
                    className="size-30 rounded-lg"
                />
                <div>
                    <h1 className="font-montserrat text-2xl font-bold text-primary">Job Seeker</h1>
                    <div className="mt-2 flex items-center gap-3">
                        <Location className="text-gray-500" />
                        <p className="text-gray-500">Bainbridge Island, Washington, United States of America</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="text-gray-500" />
                        <p className="text-gray-500">+1234567890</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Email className="text-gray-500" />
                        <p className="text-gray-500">seeker@jobsportal.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
