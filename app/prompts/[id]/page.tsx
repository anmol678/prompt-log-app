import { Grid } from "@tremor/react";
import { PromptTemplate } from "@/types/prompt-template";
import { promptTemplatesAPI as api } from "@/lib/client"
import PromptTemplateDetail from "./_components/prompt-template-detail";
import RefreshOnView from "@/components/refresh-onview";

export default async function Page({ params }: { params: { id: string } }) {
    const promptTemplate: PromptTemplate = await api.getPromptTemplate(Number(params.id))

    if (!promptTemplate) return <div>Prompt Template not found</div>

    return (
        <Grid numCols={1} className="gap-4 h-full flex flex-col">
            <PromptTemplateDetail template={promptTemplate} />
            <RefreshOnView />
        </Grid>
    )
}
