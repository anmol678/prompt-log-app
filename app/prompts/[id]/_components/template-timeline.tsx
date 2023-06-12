
import { Template } from "@/types/prompt-template";

type TimelineItemProps = {
    selected: boolean;
    label: string;
    subLabel: string;
    onClick: () => void;
};

const TimelineItem: React.FC<TimelineItemProps> = ({ selected, label, subLabel, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`w-full px-2 flex items-center justify-between ${selected ? 'bg-secondary' : 'hover:bg-secondary'}`}
            role="tab"
            type="button"
            aria-selected={selected}
        >
            <div className="relative ml-6 text-start">
                <div className="absolute -left-2 mt-3 h-4 w-4 rounded-full border border-foreground/50 bg-background" />
                <div className="pl-6 py-2 flex flex-col gap-1 border-l border-foreground/50 ">
                    <div>{label}</div>
                    <div className="text-xs text-accent-foreground/50">{subLabel}</div>
                </div>
            </div>
        </button>
    );
};

type TimelineProps = {
    templates: Template[];
    selectedTemplate: number;
    onSelect: (version: number) => void;
};

const Timeline: React.FC<TimelineProps> = ({ templates, selectedTemplate, onSelect }) => {
    return (
        <div className="relative max-h-full h-full overflow-y-scroll rounded-lg" role="tablist">
            {templates.map((t: Template, index) => (
                <TimelineItem
                    key={index}
                    selected={selectedTemplate === index}
                    label={`Version ${t.version}`}
                    subLabel={`${new Date(t.created_at).toLocaleTimeString()} ${new Date(t.created_at).toDateString()}`}
                    onClick={() => onSelect(index)}
                />
            ))}
        </div>
    );
};

export default Timeline
