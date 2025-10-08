import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { ReactNode } from 'react';

type Props = {
    dragEndFn: (event: DragEndEvent) => void;
    children: ReactNode;
};

export default function KanbanBoard({ children, dragEndFn }: Props) {
    return <DndContext onDragEnd={dragEndFn}>{children}</DndContext>;
}
