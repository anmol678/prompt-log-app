"use client"

import { useRouter } from "next/navigation"
import { Card } from "@tremor/react"

import { PromptTemplate } from "@/types/prompt-template"
import MetadataTags from "@/components/ui/metadata-tags"

type PromptTemplateCardProps = {
    template: PromptTemplate
}

export default function PromptTemplateCard({
    template,
}: PromptTemplateCardProps) {
    const router = useRouter()

    return (
        <Card
            className="p-4 flex flex-col gap-4 justify-between h-32 cursor-pointer hover:bg-muted/50"
            onClick={() => router.push(`/prompts/${template.id}`)}
        >
            <h3 className="text-lg font-semibold text-foreground">
                {template.title}
            </h3>
            <MetadataTags project={template.project} tags={template.tags} />
        </Card>
    )
}
