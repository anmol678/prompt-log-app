"use client"

import { useState } from "react";
import { Grid, Card } from "@tremor/react";
import { PromptTemplate } from "@/types/prompt-template";
import Timeline from "./template-timeline";
import PromptTemplateHeaderCard from "./prompt-template-header";
import { useRouter } from "next/navigation";

type PromptTemplateDetailProps = {
    template: PromptTemplate
}

export default function PromptTemplateDetail({ template }: PromptTemplateDetailProps) {
    const router = useRouter()

    const [selectedTemplate, setSelectedTemplate] = useState(0)

    function handleEdit() {
        router.push(`/prompts/${template.id}/edit`);
    }

    return (
        <>
            <Grid numCols={2} className="gap-4 flex flex-none min-h-[calc(12vh)] max-h-[calc(16vh)]">
                <Card className="p-6">
                    <PromptTemplateHeaderCard template={template} onEdit={handleEdit} />
                </Card>
                <Card className="text-wrap break-words p-0 overflow-none">
                    <Timeline templates={template.templates} selectedTemplate={selectedTemplate} onSelect={setSelectedTemplate} />
                </Card>
            </Grid>
            <Card className="min-h-[calc(16vh)] text-wrap break-words">
            <Card className="flex-1">
            </Card>
        </>
    )
}
