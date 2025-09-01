import { Tooltip, TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip';
import { ShieldQuestionIcon } from 'lucide-react';
import { TooltipProvider } from '../UnusedUI/tooltip';
import CustomSwitch from './CustomSwitch';

export default function OpenToWork() {
    return (
        <div className="mt-5 flex flex-col items-center rounded-lg bg-primary/10 p-7">
            <div className="flex gap-1">
                <h1 className="font-bold">Open to Work</h1>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <ShieldQuestionIcon className="size-4" />
                        </TooltipTrigger>
                        <TooltipContent className="border bg-white p-1 text-xs">
                            <p>Are you ready to join immediate?</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <CustomSwitch />
        </div>
    );
}
