import { Grid, Card } from "@tremor/react";
import { PromptTemplate } from "@/types/prompt-template";

type PromptTemplateDetailProps = {
    template: PromptTemplate
}

export default function PromptTemplateDetail({ template }: PromptTemplateDetailProps) {

    return (
        <>
            <Grid numCols={2} className="gap-4 flex flex-none min-h-[calc(12vh)] max-h-[calc(16vh)]">
                <Card className="p-6">
                </Card>
            </Grid>
            <Card className="min-h-[calc(16vh)] text-wrap break-words">
            <Card className="flex-1">
            </Card>
        </>
    )
}
