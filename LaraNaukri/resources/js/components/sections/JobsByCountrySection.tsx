import { Card } from '../ui/card';

export default function JobsByCountrySection() {
    return (
        <section id="jobsByCities" className="bg-green-50 px-14 py-10">
            <h1 className="my-7 text-center font-montserrat text-4xl font-semibold">Find Jobs By Country</h1>
            <div className="my-auto flex items-center justify-center gap-5">
                <Card className="w-xs cursor-pointer gap-0 border-gray-200 bg-white p-3 transition-colors duration-300 hover:border-primary">
                    <h1 className="font-montserrat font-semibold">Jobs in United States of America</h1>
                    <p className="text-black/50">(16) Open Jobs</p>
                </Card>
                <Card className="w-xs cursor-pointer gap-0 border-gray-200 bg-white p-3 transition-colors duration-300 hover:border-primary">
                    <h1 className="font-montserrat font-semibold">Jobs in Pakistan</h1>
                    <p className="text-black/50">(2) Open Jobs</p>
                </Card>
            </div>
        </section>
    );
}
