import { Grid, Col, Card, Title } from "@tremor/react";
import { getLogs } from "@/lib/data"
import { Log } from "@/types/log"
import { columns } from "./_components/columns"
import { DataTable } from "./_components/data-table";

export default async function Page() {
    let t = await getLogs()
    const data: Log[] = [...t, ...t, ...t, ...t, ...t]

    return (
        <Grid numCols={1} className="gap-4">
            <Col numColSpan={1}>
                <Card>
                    <Title className="mb-4 text-xl font-bold text-foreground">Logs</Title>
                    <DataTable columns={columns} data={data} />
                </Card>
            </Col>
        </Grid>
    )
}
