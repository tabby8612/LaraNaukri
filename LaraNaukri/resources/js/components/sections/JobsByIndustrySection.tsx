export default function JobsByIndustrySection() {
    return (
        <section id="jobsByIndustry" className="bg-green-50 px-14 py-10">
            <h1 className="my-7 text-center font-montserrat text-4xl font-semibold">Popular Industry</h1>
            <div className="mx-auto size-10/12">
                <ul className="flex flex-wrap items-center justify-center gap-3">
                    <li className="hoverEffect rounded-md border-l border-l-primary px-3 py-1.5">Manufacturing (5)</li>
                    <li className="hoverEffect rounded-md border-l border-l-primary px-3 py-1.5">Fashion (3)</li>
                    <li className="hoverEffect rounded-md border-l border-l-primary px-3 py-1.5">Electronics (5)</li>
                    <li className="hoverEffect rounded-md border-l border-l-primary px-3 py-1.5">Information Technology (3)</li>
                    <li className="hoverEffect rounded-md border-l border-l-primary px-3 py-1.5">Advertising/PR (5)</li>
                    <li className="hoverEffect rounded-md border-l border-l-primary px-3 py-1.5">AutoMobile (6)</li>
                    <li className="hoverEffect rounded-md border-l border-l-primary px-3 py-1.5">Courier/Logistics (1)</li>
                    <li className="hoverEffect rounded-md border-l border-l-primary px-3 py-1.5">Banking/Financial Services (13)</li>
                    <li className="hoverEffect rounded-md border-l border-l-primary px-3 py-1.5">Education/Training (15)</li>
                    <li className="hoverEffect rounded-md border-l border-l-primary px-3 py-1.5">Health and Fitness (1)</li>
                </ul>
            </div>
        </section>
    );
}
