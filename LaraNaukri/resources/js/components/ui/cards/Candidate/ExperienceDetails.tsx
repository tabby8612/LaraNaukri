export default function ExperienceDetails({ experience }: { experience: number }) {
    return (
        <div id="experience-details">
            <hr className="my-7 h-0.5 rounded-2xl bg-white/50" />
            <div className="mx-auto flex items-center justify-center border-2 py-2 text-center text-lg text-white">
                <p className="font-montserrat text-2xl font-semibold uppercase">{experience} Years</p>
            </div>
            <p className="mt-1 text-center font-montserrat tracking-widest text-white uppercase">of Experience</p>
        </div>
    );
}
