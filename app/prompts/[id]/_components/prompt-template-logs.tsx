"use client"

import { useState, useEffect } from "react"
import { PromptTemplate, Template } from "@/types/prompt-template";
import DataTable from "@/app/logs/_components/data-table";
import { columnsWithVersion } from "@/app/logs/_components/columns";
import { getLogsForPromptTemplate } from "@/lib/data";
import { LogWithPromptVersion } from "@/types/log";

type PromptTemplateLogsProps = {
    template: PromptTemplate
    selectedTemplate: Template
}

export default function PromptTemplateLogs({ template, selectedTemplate }: PromptTemplateLogsProps) {
    const [logs, setLogs] = useState<LogWithPromptVersion[]>([])

    useEffect(() => {
        getLogsForPromptTemplate(template.id).then(setLogs)
    }, [])

    const promptVersion = {
        selected: String(selectedTemplate.version),
        versions: template.templates.map(t => String(t.version)),
    }

    return (
        <DataTable columns={columnsWithVersion} data={logs} promptVersion={promptVersion} />
    )
}
