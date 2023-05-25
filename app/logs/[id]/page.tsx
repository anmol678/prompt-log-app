import { Col, Grid } from "@tremor/react";
import { getLogs } from "@/lib/data"
import { Log } from "@/types/log"
import HeaderCard from "./header-card";
import MessageCard from "./message-card";

export default async function Page({ params }: { params: { id: string } }) {
    const data: Log[] = await getLogs()
    const log: Log | undefined = data.find(l => l.id === Number(params.id))

    if (!log) return <div>Log not found</div>

    return (
        <Grid numCols={1} className="gap-4 h-full flex flex-col">
            <Col numColSpan={1}>
                <HeaderCard log={log} />
            </Col>
            <Grid numCols={2} className="gap-4 flex-grow">
                <Col>
                    <MessageCard title="Prompt" messages={log.prompt} />
                </Col>
                <Col>
                    <MessageCard title="Response" messages={log.response} />
                </Col>
            </Grid>
        </Grid >
    )
}
