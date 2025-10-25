import JobDialog from '../ui/cards/JobDialog';
import PostJobCTA from '../ui/cards/postJobCTA';
import SearchJobCTA from '../ui/cards/searchJobCTA';

export default function Calltoaction() {
    return (
        <section id="calltoaction" className="mx-auto flex flex-col items-center justify-center gap-10 px-14 py-10 md:flex-row">
            <div className="w-full md:w-1/2">
                {/* <SearchJobCTA /> */}
                <JobDialog title="Login or register to create your Resume/CV" type="candidate" content={<SearchJobCTA />} />
            </div>

            <div className="w-full md:w-1/2">
                <JobDialog title="Welcome to Employer Portal" type="company" content={<PostJobCTA />} />
            </div>
            {/* <SearchJobCTA /> */}
            {/* <JobDialog /> */}
            {/* <PostJobCTA /> */}
        </section>
    );
}
