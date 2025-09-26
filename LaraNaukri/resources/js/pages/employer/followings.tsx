import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/UnusedUI/button';
import AppEmployerLayout from '@/layouts/app/app-employer-layout';

export default function followings() {
    return (
        <AppEmployerLayout displaySearch={false} page="followings" titleText="Company Followers">
            <h1 className="font-montserrat text-2xl font-bold">Company Followers</h1>
            <Card className="items-center justify-center gap-3 border-gray-200 bg-gray-200 p-7">
                <p className="font-montserrat text-xl font-bold">No Followers Found. Please select Candidates</p>
                <Button className="h-11 w-60 text-xl text-white">Search Candidates</Button>
            </Card>
        </AppEmployerLayout>
    );
}
