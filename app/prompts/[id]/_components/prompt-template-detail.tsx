"use client"

import { useState } from "react";
import { Grid, Card } from "@tremor/react";
import Timeline from "./template-timeline";
import PromptTemplateHeader from "./prompt-template-header";
import { Heading3 } from "@/components/ui/heading";
import PromptContainer from "../../_components/prompt-container";
import PromptTemplateLogs from "./prompt-template-logs";
import { PromptTemplate, Template } from "@/types/prompt-template";
import { useRouter } from "next/navigation";

type PromptTemplateDetailProps = {
    template: PromptTemplate
}

export default function PromptTemplateDetail({ template }: PromptTemplateDetailProps) {
    const router = useRouter()

    const [selectedTemplateIndex, setSelectedTemplate] = useState(0)

    const selectedTemplate: Template = template.templates[selectedTemplateIndex]

    function handleEdit() {
        router.push(`/prompts/${template.id}/edit`);
    }

    return (
        <>
            <Grid numCols={2} className="gap-4 flex flex-none min-h-[calc(16vh)] max-h-[calc(16vh)]">
                <Card className="p-6">
                    <PromptTemplateHeader template={template} onEdit={handleEdit} />
                </Card>
                <Card className="text-wrap break-words p-0 overflow-none">
                    <Timeline templates={template.templates} selectedTemplate={selectedTemplateIndex} onSelect={setSelectedTemplate} />
                </Card>
            </Grid>
            <Card className="min-h-[calc(16vh)] text-wrap break-words">
                <Heading3 className="mb-4">Prompt</Heading3>
                {selectedTemplate &&
                    <PromptContainer prompt={selectedTemplate.prompt} input_variables={selectedTemplate.input_variables} />
                }
            </Card>
            <Card className="flex-1">
                <Heading3 className="mb-4">Logs</Heading3>
                <PromptTemplateLogs template={template} selectedTemplate={selectedTemplate} />
            </Card>
        </>
    )
}
