import { Grid, Col, Card, Title } from "@tremor/react";
import { getLogs } from "@/lib/data"
import { Log } from "@/types/log"
import { columns } from "./columns"
import { DataTable } from "./data-table";

export default async function Page() {
    const data: Log[] = await getLogs()

    return (
        <Grid numCols={1} className="gap-4">
            <Col numColSpan={1}>
                <Card>
                    <Title className="mb-8">Logs</Title>
                    <DataTable columns={columns} data={data} />
                </Card>
            </Col>
        </Grid>
    )
}
