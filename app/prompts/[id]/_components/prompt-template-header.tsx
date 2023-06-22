import { Heading2, Subtitle } from "@/components/ui/heading";
import { PromptTemplate } from "@/types/prompt-template";
import MetadataTags from "@/components/ui/metadata-tags";
import { Button } from "@/components/ui/button";

type PromptTemplateHeaderCardProps = {
    template: PromptTemplate
    onEdit: () => void
}

export default function PromptTemplateHeaderCard({ template, onEdit }: PromptTemplateHeaderCardProps) {
    return (
        <div className="flex flex-row justify-between h-full w-full">
            <div className="flex flex-col justify-between h-full flex-shrink-1">
                <div>
                    <Heading2>{template.title}</Heading2>
                    <Subtitle>{template.templates[0].created_at.toString()}</Subtitle>
                </div>
                <MetadataTags project={template.project} tags={template.tags} />
            </div>
            <Button variant="outline" className="flex-shrink-0" onClick={onEdit}>Edit Template</Button>
        </div>
    )
}
