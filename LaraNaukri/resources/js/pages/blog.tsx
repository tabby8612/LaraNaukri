import MainBlogSection from '@/components/sections/MainBlogSection';
import { Input } from '@/components/ui/UnusedUI/input';
import AppLayout from '@/layouts/app/app-layout';
import { ChevronRight, SearchIcon } from 'lucide-react';

export default function Blog() {
    return (
        <AppLayout page="blog">
            <div className="flex flex-col items-center justify-center bg-green-50 py-10">
                <h1 className="font-montserrat text-4xl font-bold">Blog</h1>
            </div>
            <section id="blog" className="flex gap-3 px-20">
                <MainBlogSection />
                <div id="blog-sidebar" className="w-1/4 border border-gray-100">
                    <div className="relative mx-auto mt-10 w-10/12">
                        <h1 className="text-lg font-semibold">Search</h1>
                        <Input className="relative mt-2 h-10 pr-12 text-lg selection:text-white focus-visible:ring-primary" />
                        <SearchIcon className="absolute top-11 right-4 cursor-pointer" />
                    </div>

                    <div id="categories" className="mx-auto mt-10 w-10/12">
                        <h1 className="text-lg font-semibold">Categories</h1>
                        <ul>
                            <li className="mt-2 flex items-center">
                                <ChevronRight className="mr-2 size-5 text-primary" />
                                <a href="http://google.com/category1">Jobseeker</a>
                            </li>
                            <li className="mt-2 flex items-center">
                                <ChevronRight className="mr-2 size-5 text-primary" />
                                <a href="http://google.com/category1">General</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
