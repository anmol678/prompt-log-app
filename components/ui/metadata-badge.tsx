import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type MetadataBadgeProps = {
    title: string
    content: string | number
    mono?: boolean
}

export default function MetadataBadge({ title, content, mono = true }: MetadataBadgeProps) {
    (
        <Badge
            variant="secondary"
            className={cn(
                "px-2 h-8 border-ring text-md font-medium text-accent-foreground/75 whitespace-nowrap",
                mono && "font-mono"
            )}
        >
            {title}
            < Separator orientation="vertical" className="mx-2" />
            {content}
        </Badge >
    )
}