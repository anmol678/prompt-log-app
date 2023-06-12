"use client"

import { useState } from "react";
import { Grid, Card } from "@tremor/react";
import { PromptTemplate } from "@/types/prompt-template";
import Timeline from "./template-timeline";
import PromptTemplateHeaderCard from "./prompt-template-header";

type PromptTemplateDetailProps = {
    template: PromptTemplate
}

export default function PromptTemplateDetail({ template }: PromptTemplateDetailProps) {
    const [selectedTemplate, setSelectedTemplate] = useState(0)

    function handleEdit() {
        // To be implemented
        console.log("Edit button clicked");
    }

    return (
        <>
            <Grid numCols={2} className="gap-4 flex flex-none min-h-[calc(12vh)] max-h-[calc(16vh)]">
                <Card className="p-6">
                    <PromptTemplateHeaderCard template={template} />
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
