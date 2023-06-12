"use client"

import { useState, useEffect } from "react"
import { PromptTemplate, PromptTemplateCreate } from "@/types/prompt-template"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import PromptContainer from "./prompt-container"
import { inferInputVariables } from "@/lib/utils"

type Props = {
    template?: PromptTemplate
    onSubmit: (form: PromptTemplateCreate) => Promise<void>
}

const PromptTemplateForm: React.FC<Props> = ({ template, onSubmit }) => {
    const [form, setForm] = useState<PromptTemplateCreate>({
        title: "",
        tags: [],
        project: null,
        template: {
            prompt: "",
            input_variables: [],
            format: "f-string",
        },
    })

    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (template) {
            const { title, tags, project } = template;
            const { prompt, input_variables, format } = template.templates[0];
            setForm({
                title,
                tags,
                project: project?.title || "",
                template: {
                    prompt,
                    input_variables,
                    format,
                },
            })
        }
    }, [])

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        setError(null)

        if (!form.title || !form.template.prompt) {
            setError("Title and Prompt fields cannot be empty.")
            return
        }

        if (form.template.input_variables.some(variable => variable.includes(' '))) {
            setError("Input variables should not contain spaces.")
            return
        }

        try {
            await onSubmit(form)
        } catch (error: any) {
            setError(error.message)
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setForm((currentForm) => {
            const updatedForm = { ...currentForm }
            if (name === "title") updatedForm.title = value
            if (name === "prompt") {
                updatedForm.template.prompt = value
                updatedForm.template.input_variables =
                    inferInputVariables(value)
            }
            if (name === "tags")
                updatedForm.tags = value.split(";").map((tag) => tag.trim())
            if (name === "project") updatedForm.project = value
            if (updatedForm.project === "") updatedForm.project = null
            return updatedForm
        })
    }

    return (
        <form onSubmit={handleSubmit} className="mx-auto">
            {error && <p className="mb-2 text-red-500">{error}</p>}
            <div className="mb-4">
                <Input
                    name="title"
                    type="text"
                    className="text-lg font-medium"
                    placeholder="Title"
                    value={form.title}
                    onChange={handleChange}
                />
            </div>
            <PromptContainer
                prompt={form.template.prompt}
                input_variables={form.template.input_variables}
                onChange={handleChange}
            />
            <div className="mb-4">
                <label className="text-sm font-medium leading-none">Tags</label>
                <Input
                    type="text"
                    name="tags"
                    className="my-2"
                    placeholder="Tags (semicolon-separated)"
                    value={form.tags.join(";")}
                    onChange={handleChange}
                />
                <p className="text-sm text-muted-foreground">
                    Use semi-colon to separate multiple tags.
                </p>
            </div>
            <div className="mb-6">
                <label className="text-sm font-medium leading-none">
                    Project
                </label>
                <Input
                    type="text"
                    name="project"
                    className="my-2"
                    placeholder="Project"
                    value={form.project || ""}
                    onChange={handleChange}
                />
                <p className="text-sm text-muted-foreground">
                    Add title of an existing project or create a new one.
                </p>
            </div>
            <Button type="submit" size="default">
                {template ? "Update Template" : "Save Template"}
            </Button>
        </form>
    )
}

export default PromptTemplateForm
