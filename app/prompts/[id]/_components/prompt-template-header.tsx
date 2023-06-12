import { Heading2, Subtitle } from "@/components/ui/heading";
import { PromptTemplate } from "@/types/prompt-template";
import MetadataTags from "@/components/ui/metadata-tags";

type PromptTemplateHeaderCardProps = {
    template: PromptTemplate
}

export default function PromptTemplateHeaderCard({ template }: PromptTemplateHeaderCardProps) {
    return (
        <div className="flex flex-col justify-between h-full">
            <div>
                <Heading2>{template.title}</Heading2>
                <Subtitle>{template.templates[0].created_at.toString()}</Subtitle>
            </div>
            <MetadataTags project={template.project} tags={template.tags} />
        </div>
    )
}
