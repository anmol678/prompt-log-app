"use client"

import { Card } from "@tremor/react";
import MetadataBadge from "@/components/ui/metadata-badge";
import Tag from "@/components/ui/tag";
import { PromptTemplate } from "@/types/prompt-template";
import { useRouter } from "next/navigation";

type PromptTemplateCardProps = {
    template: PromptTemplate
}

export default function PromptTemplateCard({ template }: PromptTemplateCardProps) {
    const router = useRouter()

    return (
        <Card
            className="p-6 flex flex-col gap-4 justify-between h-32 cursor-pointer hover:bg-muted/50"
            onClick={() => router.push(`/prompts/${template.id}`)}
        >
            <h3 className="text-lg font-semibold text-foreground">
                {template.title}
            </h3>
            <div className="flex flex-wrap gap-2">
                {template.project &&
                    <MetadataBadge title='project' content={template.project.title} mono={false} />
                }
                {template.tags.map((tag, index) => (
                    <Tag key={index} content={tag} />
                ))}
            </div>
        </Card>
    )
}
