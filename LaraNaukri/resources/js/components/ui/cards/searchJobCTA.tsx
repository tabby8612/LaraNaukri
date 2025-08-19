export default function SearchJobCTA() {
    return (
        <div
            id="searchjobctr"
            className="group flex w-1/2 cursor-pointer justify-between rounded-lg border bg-gray-300/50 px-5 py-6 transition-colors delay-75 duration-500 hover:bg-white"
        >
            <div>
                <h1 className="group-hover:text-primary font-montserrat text-3xl font-bold transition-colors delay-75 duration-500">
                    Search your desired Job
                </h1>
                <p className="text-lg text-gray-500/80">Discover a career you are passionate about</p>
            </div>
            <div>
                <img src="https://www.sharjeelanjum.com/demos/jobsportal-update/images/search-job-icon.png" alt="Search job" className="size-16" />
            </div>
        </div>
    );
}
