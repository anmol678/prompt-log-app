import { Card } from "@tremor/react";
import AddPromptButton from "./_components/add-prompt-button";
import PromptTemplateCard from "./_components/prompt-template-card";
import { Heading2 } from "@/components/ui/heading";
import { PromptTemplate } from "@/types/prompt-template";
import { promptTemplatesAPI as api } from "@/lib/client"
import RefreshOnView from "@/components/refresh-onview";

export default async function Page() {
    const data: PromptTemplate[] = await api.getPromptTemplates()

    return (
        <Card>
            <div className="flex justify-between items-center mb-6">
                <Heading2>Prompts</Heading2>
                <AddPromptButton />
            </div>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                {data.map((template) => (
                    <PromptTemplateCard key={template.id} template={template} />
                ))}
            </div>
            <RefreshOnView />
        </Card>
    )
}
