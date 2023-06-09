import { Grid, Col, Card, Title } from "@tremor/react";
import { getPromptTemplates } from "@/lib/data"
import { PromptTemplate } from "@/types/prompt-template";

export default async function Page() {
    const data: PromptTemplate[] = await getPromptTemplates()

    console.log(data);


    return (
        <Grid numCols={1} className="gap-4">
            <Col numColSpan={1}>
                <Card>
                    <Title className="mb-4 text-xl font-bold text-foreground">Prompts</Title>
                    <div>
                        {JSON.stringify(data)}
                    </div>
                </Card>
            </Col>
        </Grid>
    )
}
