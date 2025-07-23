import PostJobCTA from './ui/postJobCTA';
import SearchJobCTA from './ui/searchJobCTA';

export default function Calltoaction() {
    return (
        <section id="calltoaction" className="mx-auto flex items-center justify-center gap-10 px-14 py-10">
            <SearchJobCTA />
            <PostJobCTA />
        </section>
    );
}
