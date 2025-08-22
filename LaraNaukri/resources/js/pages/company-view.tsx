import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import CompanyCharacteristic from '@/components/ui/cards/Characteristic';
import CompanyIntro from '@/components/ui/cards/CompanyIntro';
import { default as DescriptionCard } from '@/components/ui/cards/DescriptionCard';
import FeaturedJobCard from '@/components/ui/cards/FeaturedJobCard';
import AppLayout from '@/layouts/app/app-layout';
import { BriefcaseBusinessIcon, Building2Icon, CakeIcon, Landmark, Users, VerifiedIcon } from 'lucide-react';

export default function CompanyView() {
    return (
        <AppLayout page="">
            <section className="mx-auto mt-18 flex w-10/12 gap-10">
                <div className="w-7/12">
                    <CompanyIntro />
                    <DescriptionCard
                        type="Company"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi consequatur perferendis nulla iusto nostrum assumenda dolorem molestias enim tempora eum eligendi ullam totam ratione, consequuntur magni ipsam, praesentium ea impedit error. Suscipit, illum. Esse consequatur a suscipit facilis minus nemo animi non, nulla harum corrupti temporibus, rem necessitatibus quod dignissimos et quibusdam vitae delectus nobis velit atque. Quaerat, sint! Magnam, tempora obcaecati. Id facere qui, maxime nulla doloremque quibusdam unde consequatur veniam temporibus saepe vitae illum cupiditate suscipit exercitationem. Quos, consectetur error sint accusamus corporis reiciendis assumenda adipisci repudiandae. Porro voluptatem asperiores quod eius hic rerum fuga iste dolores ratione consectetur libero architecto pariatur id sed inventore eos aut, sunt commodi dolorem soluta ut? Tempora magnam dolorum explicabo voluptas vero aperiam recusandae error, ab culpa quam voluptates voluptatibus corporis pariatur natus perferendis quod? Quis tenetur, repellat molestias blanditiis, et voluptatem eos aspernatur perspiciatis rem vel optio ipsum, sed vitae totam."
                    />
                </div>

                <div className="w-5/12">
                    <Card className="border-stone-200">
                        <CardTitle className="px-6 font-montserrat text-lg font-bold text-primary">Company Detail</CardTitle>
                        <CardContent>
                            <div className="grid grid-cols-3 gap-3">
                                <CompanyCharacteristic Icon={VerifiedIcon} name="Verified" value="Yes" />
                                <CompanyCharacteristic Icon={Users} name="Company Size" value="301-600" />
                                <CompanyCharacteristic Icon={CakeIcon} name="Founded In" value="2002" />
                                <CompanyCharacteristic Icon={Building2Icon} name="Organization Type" value="Private" />
                                <CompanyCharacteristic Icon={Landmark} name="Total Offices" value="1" />
                                <CompanyCharacteristic Icon={BriefcaseBusinessIcon} name="Opened Jobs" value="1" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="mt-5 border-stone-200 px-6">
                        <CardDescription>Map Not Loaded</CardDescription>
                    </Card>
                </div>
            </section>
            <section className="mx-auto mt-7 w-10/12 gap-10">
                <h1 className="my-7 font-montserrat text-2xl font-bold">Current Openings</h1>
                <div className="my-7 grid grid-cols-4 gap-3">
                    <FeaturedJobCard
                        companyImageURL="https://www.sharjeelanjum.com/demos/jobsportal-update/admin_assets/no-image.png"
                        companyName="New Design Studio"
                        location="Milton"
                        postedDate="Mar 07, 2025"
                        title="Web Designer"
                        type="Internship"
                        salary={2000}
                    />
                    <FeaturedJobCard
                        companyImageURL="https://www.sharjeelanjum.com/demos/jobsportal-update/admin_assets/no-image.png"
                        companyName="New Design Studio"
                        location="Milton"
                        postedDate="Mar 07, 2025"
                        title="Web Designer"
                        type="Internship"
                        salary={2000}
                    />
                </div>
            </section>
        </AppLayout>
    );
}
