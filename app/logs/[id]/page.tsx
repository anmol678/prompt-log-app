import { Col, Card, Title, Text, Grid } from "@tremor/react";
import { getLogs } from "@/lib/data"
import { Log } from "@/types/log"

export default async function Page({ params }: { params: { id: string } }) {
    const data: Log[] = await getLogs()
    const log: Log | undefined = data.find(l => l.id === Number(params.id))

    if (!log) return <div>Log not found</div>

    return (
        <>
            <Col numColSpan={1}>
                <Card>
                    <Title className="mb-2">{log.function_name}</Title>
                    <Text>{log.provider}, {log.model}</Text>
                    <Text>{log.tags}</Text>
                </Card>
            </Col>
            <Grid numCols={2} className="gap-4">
                <Col>
                    <Card>
                        <Text>{JSON.stringify(log.prompt)}</Text>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Text>{JSON.stringify(log.response)}</Text>
                    </Card>
                </Col>
            </Grid>
        </>
    )
}