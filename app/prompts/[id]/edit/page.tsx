"use client"

import { Card } from "@tremor/react"
import { Heading2 } from "@/components/ui/heading"
import PromptTemplateForm from "../../_components/prompt-template-form"
import { PromptTemplatePatch, PromptTemplate, PromptTemplateCreate } from "@/types/prompt-template"
import { promptTemplatesAPI } from "@/lib/client"
import { useRouter } from "next/navigation"
import { promptTemplatesAPI as api } from "@/lib/client"

export default async function EditPromptTemplate({ params }: { params: { id: string } }) {
    const router = useRouter()

    const template: PromptTemplate = await api.getPromptTemplate(Number(params.id))

    if (!template) return <div>Prompt Template not found</div>

    const handleSubmit = async (form: PromptTemplateCreate) => {
        await api.updatePromptTemplate(Number(params.id), form as PromptTemplatePatch)
        router.push(`/prompts/${params.id}`)
    }

    return (
        <Card>
            <div className="flex justify-between items-center mb-6">
                <Heading2>{`Edit ${template.title}`}</Heading2>
            </div>
            <PromptTemplateForm template={template} onSubmit={handleSubmit} />
        </Card>
    )
}
