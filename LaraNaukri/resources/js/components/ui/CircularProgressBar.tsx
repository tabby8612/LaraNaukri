'use client';

import { cn } from '@/lib/utils';
interface CircularProgressProps {
    value: number;
    renderLabel?: (progress: number) => number | string;
    size?: number;
    strokeWidth?: number;
    circleStrokeWidth?: number;
    progressStrokeWidth?: number;
    shape?: 'square' | 'round';
    className?: string;
    progressClassName?: string;
    labelClassName?: string;
    showLabel?: boolean;
}
const CircularProgress = ({
    value,
    renderLabel,
    className,
    progressClassName,
    labelClassName,
    showLabel,
    shape = 'round',
    size = 100,
    strokeWidth,
    circleStrokeWidth = 10,
    progressStrokeWidth = 10,
}: CircularProgressProps) => {
    const radius = size / 2 - 10;
    const circumference = Math.ceil(3.14 * radius * 2);
    const percentage = Math.ceil(circumference * ((100 - value) / 100));
    const viewBox = `-${size * 0.125} -${size * 0.125} ${size * 1.25} ${size * 1.25}`;
    return (
        <div className="relative">
            <svg
                width={size}
                height={size}
                viewBox={viewBox}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: 'rotate(-90deg)' }}
                className="relative"
            >
                {/* Base Circle */}
                <circle
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                    fill="transparent"
                    strokeWidth={strokeWidth ?? circleStrokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset="0"
                    className={cn('stroke-primary/25', className)}
                />
                {/* Progress */}
                <circle
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                    strokeWidth={strokeWidth ?? progressStrokeWidth}
                    strokeLinecap={shape}
                    strokeDashoffset={percentage}
                    fill="transparent"
                    strokeDasharray={circumference}
                    className={cn('stroke-primary', progressClassName)}
                />
            </svg>
            {showLabel && (
                <div className={cn('text-md absolute inset-0 flex items-center justify-center', labelClassName)}>
                    {renderLabel ? renderLabel(value) : value}
                </div>
            )}
        </div>
    );
};
export default function CircularProgressColor({ value, size }: { value: number; size: number }) {
    return (
        <div className="mx-auto flex w-full max-w-xs flex-col items-center">
            <div className="flex items-center gap-1">
                <CircularProgress
                    value={value}
                    size={size}
                    strokeWidth={20}
                    showLabel
                    labelClassName="text-3xl font-bold"
                    renderLabel={(progress) => `${progress}%`}
                    className="stroke-green-600/25"
                    progressClassName="stroke-green-600"
                />
            </div>
        </div>
    );
}
