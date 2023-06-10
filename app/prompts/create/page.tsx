"use client"

import { useState } from "react"
import { Card } from "@tremor/react"

import { PromptTemplateCreate, TemplateCreate } from "@/types/prompt-template"
import { promptTemplatesAPI } from "@/lib/client"
import Title from "@/components/ui/title"

import PromptTemplateForm from "../_components/prompt-template-form"

const CreatePromptTemplate: React.FC = () => {
  
  const handleSubmit = async (form: PromptTemplateCreate) => {
    // const response = await promptTemplatesAPI.createPromptTemplate(form)
    console.log(form);
    
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
