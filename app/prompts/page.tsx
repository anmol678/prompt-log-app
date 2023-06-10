import { Card } from "@tremor/react";
import AddPromptButton from "./_components/add-prompt-button";
import PromptTemplateCard from "./_components/prompt-template-card";
import Title from "@/components/ui/title";
import { PromptTemplate } from "@/types/prompt-template";
import { getPromptTemplates } from "@/lib/data"

export default async function Page() {
    const data: PromptTemplate[] = await getPromptTemplates()

    return (
        <Card>
            <div className="flex justify-between items-center mb-6">
                <Title>Prompts</Title>
                <AddPromptButton />
            </div>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                {data.map((template) => (
                    <PromptTemplateCard key={template.id} template={template} />
                ))}
            </div>
        </Card>
    )
}
