"use client"

import { useState, useEffect } from "react"
import { PromptTemplate, Template } from "@/types/prompt-template";
import DataTable from "@/app/logs/_components/data-table";
import { columns } from "@/app/logs/_components/columns";
import { getLogsForPromptTemplate } from "@/lib/data";
import { Log } from "@/types/log";

type PromptTemplateLogsProps = {
    template: PromptTemplate
    selectedTemplate: Template
}

export default function PromptTemplateLogs({ template, selectedTemplate }: PromptTemplateLogsProps) {
    const [logs, setLogs] = useState<Log[]>([])

    useEffect(() => {
        getLogsForPromptTemplate(template.id).then(setLogs)
    }, [])

    console.log(logs, template, selectedTemplate.version);

    return (
        <DataTable columns={columns} data={logs} />
    )
}
