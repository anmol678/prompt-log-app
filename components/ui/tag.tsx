import { Badge } from "@/components/ui/badge";

type TagProps = {
    content: string
}

export default function Tag({ content }: TagProps) {
    return (
        <Badge variant="secondary" className="px-2 h-8 border-ring text-md font-medium text-accent-foreground/75 whitespace-nowrap">
            {content}
        </Badge>
    )
}