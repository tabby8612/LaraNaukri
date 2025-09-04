type Props = {
    dateOfBirth: string;
    age: number;
    gender: string;
    martial_status: string;
    functional_area: string;
    industry: string;
    career_level: string;
    currentSalary: string;
    expectationSalary: string;
    nationality: string;
};

export default function PersonalDetails({
    dateOfBirth,
    age,
    gender,
    martial_status,
    functional_area,
    industry,
    career_level,
    currentSalary,
    expectationSalary,
    nationality,
}: Props) {
    return (
        <div id="personal-details" className="mt-3">
            <h1 className="font-montserrat text-xl font-bold text-white">Personal Details</h1>
            <hr className="h-0.5 rounded-2xl bg-white/50" />
            <table>
                <tbody>
                    <tr className="text-white">
                        <td className="w-35 py-3 text-sm font-bold">D.O.B</td>
                        <td>{dateOfBirth}</td>
                    </tr>
                    <tr className="text-white">
                        <td className="w-35 py-3 text-sm font-bold">Age</td>
                        <td>{age} Years</td>
                    </tr>
                    <tr className="text-white">
                        <td className="w-35 py-3 text-sm font-bold">Gender</td>
                        <td>{gender}</td>
                    </tr>
                    <tr className="text-white">
                        <td className="w-35 py-3 text-sm font-bold">Marital Status</td>
                        <td>{martial_status}</td>
                    </tr>
                    <tr className="text-white">
                        <td className="w-35 py-3 text-sm font-bold">Functional Area</td>
                        <td>{functional_area}</td>
                    </tr>
                    <tr className="text-white">
                        <td className="w-35 py-3 text-sm font-bold">Industry</td>
                        <td>{industry}</td>
                    </tr>
                    <tr className="text-white">
                        <td className="w-35 py-3 text-sm font-bold">Career Level</td>
                        <td>{career_level}</td>
                    </tr>
                    <tr className="text-white">
                        <td className="w-35 py-3 text-sm font-bold">Current Salary</td>
                        <td>{currentSalary}</td>
                    </tr>
                    <tr className="text-white">
                        <td className="w-35 py-3 text-sm font-bold">Expectation Salary</td>
                        <td>{expectationSalary}</td>
                    </tr>
                    <tr className="text-white">
                        <td className="w-35 py-3 text-sm font-bold">Nationality</td>
                        <td>{nationality}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
