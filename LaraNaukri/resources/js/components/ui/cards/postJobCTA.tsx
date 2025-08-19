export default function PostJobCTA() {
    return (
        <div
            id="postjobctr"
            className="group flex w-1/2 cursor-pointer justify-between rounded-lg border bg-gray-300/50 px-5 py-6 transition-colors delay-75 duration-500 hover:bg-white"
        >
            <div>
                <h1 className="group-hover:text-primary font-montserrat text-3xl font-bold transition-colors delay-75 duration-500">
                    Post a Job Today
                </h1>
                <p className="text-lg text-gray-500/80">Discover ideal candidate for your team</p>
            </div>
            <div>
                <img src="https://www.sharjeelanjum.com/demos/jobsportal-update/images/postjob.png" alt="post job" className="size-16" />
            </div>
        </div>
    );
}
