import { Location } from '@/SVGs/Location';
import { Application } from '@/types';
import { useDraggable } from '@dnd-kit/core';
import { router } from '@inertiajs/react';
import { Banknote } from 'lucide-react';
import { Card } from '../../card';
import { Button } from '../../UnusedUI/button';

type Props = {
    application: Application;
};

export default function DraggableAppliedCandidate({ application }: Props) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: application.id,
        data: application,
        attributes: { role: application.status },
    });

    const style = transform
        ? {
              transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
          }
        : undefined;

    return (
        <>
            <Card
                className="cursor-grab gap-3 rounded-sm border-0 bg-white/50 px-3 py-2.5"
                ref={setNodeRef}
                {...listeners}
                {...attributes}
                style={style}
            >
                <h1 className="text-xl font-bold">
                    {application.candidate.first_name} {application.candidate.last_name}
                </h1>
                <div className="flex items-center gap-2">
                    <Location className="text-primary" />
                    <p>{application.candidate.country.name}</p>
                </div>
                <div className="flex items-center gap-2">
                    <Banknote className="text-primary" />
                    <p>{application.candidate.salary_from} USD / Month</p>
                </div>
                <hr className="border-gray-400" />
                <div className="flex justify-between p-1">
                    <Button
                        onPointerDown={(e) => e.stopPropagation()}
                        className="cursor-pointer rounded-sm text-xs text-white"
                        onClick={() => router.get(route('employer.userProfile', application.candidate.user_id))}
                    >
                        View Profile
                    </Button>
                </div>
            </Card>
        </>
    );
}
