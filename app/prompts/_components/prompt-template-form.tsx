"use client"

import { useState } from "react"

import { PromptTemplateCreate } from "@/types/prompt-template"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

type Props = {
    onSubmit: (form: PromptTemplateCreate) => Promise<void>
}

const PromptTemplateForm: React.FC<Props> = ({ onSubmit }) => {
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

    const inferInputVariables = (prompt: string) => {
        const regex = /\{+(.*?)\}+/g
        const matches = []
        let match
        while ((match = regex.exec(prompt)) !== null) {
            matches.push(match[1])
        }
        return matches
    }

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

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
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
            <div className="mb-4 rounded-md border border-input ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                <Textarea
                    name="prompt"
                    id="prompt"
                    className="font-medium"
                    placeholder="Write a prompt..."
                    value={form.template.prompt}
                    onChange={handleChange}
                />
                <Separator />
                <div className="px-3 py-2">
                    {form.template.input_variables.length ? (
                        <>
                            <label className="text-sm font-medium leading-none">
                                Input Variables
                            </label>
                            <div className="mt-2 mb-1 flex flex-wrap gap-2">
                                {form.template.input_variables.map(
                                    (variable, index) => (
                                        <Badge
                                            key={index}
                                            variant="secondary"
                                            className="px-2 py-0 rounded-xl border-ring border-2 text-md font-medium text-accent-foreground/75 whitespace-nowrap"
                                        >
                                            {variable}
                                        </Badge>
                                    )
                                )}
                            </div>
                        </>
                    ) : (
                        <label className="text-muted-foreground text-md">
                            {"Define input variables using {braces}"}
                        </label>
                    )}
                    {/* <Input className="mt-1 border-0 text-md font-medium" disabled value={JSON.stringify(form.template.input_variables)} /> */}
                </div>
            </div>
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
                    Use semi-colon as a delimiter to add multiple tags.
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
                Save Template
            </Button>
        </form>
    )
}

export default PromptTemplateForm
