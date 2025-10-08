import { Application } from '@/types';
import { useDroppable } from '@dnd-kit/core';
import { Card } from '../../card';

import DraggableAppliedCandidate from './DraggableAppliedCandidate';
import NoAppliedCandidate from './NoAppliedCandidate';

type Props = {
    label: string;
    id: 'applied' | 'rejected' | 'shortlisted' | 'hired';
    applications: Application[] | undefined;
};

export default function DroppableCard({ label, id, applications }: Props) {
    const { isOver, setNodeRef } = useDroppable({
        id: id,
    });

    let bgColor = '';
    switch (id) {
        case 'applied':
            bgColor = 'bg-blue-100';
            break;
        case 'rejected':
            bgColor = 'bg-red-100';
            break;
        case 'shortlisted':
            bgColor = 'bg-yellow-100';
            break;
        case 'hired':
            bgColor = 'bg-green-100';
            break;
        default:
            bgColor = 'bg-blue-100';
            break;
    }

    return (
        <Card className={`${isOver && 'bg-green-100'} min-h-screen rounded-none border-none ${bgColor} px-3`} ref={setNodeRef}>
            <h1 className="font-montserrat text-lg font-semibold text-black">{label}</h1>
            {applications ? (
                applications.map((application) => {
                    return <DraggableAppliedCandidate application={application} key={application.id} />;
                })
            ) : (
                <NoAppliedCandidate />
            )}
        </Card>
    );
}
