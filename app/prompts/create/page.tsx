"use client"

import { Card } from "@tremor/react"
import Title from "@/components/ui/title"
import PromptTemplateForm from "../_components/prompt-template-form"
import { PromptTemplateCreate } from "@/types/prompt-template"
import { promptTemplatesAPI } from "@/lib/client"
import { useRouter } from "next/navigation"

const CreatePromptTemplate: React.FC = () => {
  const router = useRouter()

  const handleSubmit = async (form: PromptTemplateCreate) => {
    await promptTemplatesAPI.createPromptTemplate(form)
    router.push('/prompts')
  }

  return (
    <Card>
        <div className="flex justify-between items-center mb-6">
            <Title>Create a Prompt Template</Title>
        </div>
        <PromptTemplateForm onSubmit={handleSubmit} />
    </Card>
  )
}

export default CreatePromptTemplate
