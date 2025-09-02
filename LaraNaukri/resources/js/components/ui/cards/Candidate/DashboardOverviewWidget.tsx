import { SVGProps } from 'react';
import { Card, CardContent } from '../../card';

type Props = {
    link: string;
    SVGIcon: React.ComponentType<SVGProps<SVGSVGElement>>;
    mainText: string;
    secondaryText: string;
};

export default function DashboardOverviewWidget({ link, SVGIcon, mainText, secondaryText }: Props) {
    return (
        <a href={link}>
            <Card className="smoothTransition border-gray-300 py-2 pr-6 pl-2 shadow-2xs hover:shadow-2xl">
                <CardContent className="flex items-center gap-4">
                    <SVGIcon className="size-10 text-primary" />
                    <div className="flex flex-col">
                        <h1 className="font-montserrat text-3xl font-bold">{mainText}</h1>
                        <p>{secondaryText}</p>
                    </div>
                </CardContent>
            </Card>
        </a>
    );
}
