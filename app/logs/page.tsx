import { Grid, Col, Card } from "@tremor/react";
import { columns } from "./_components/columns"
import DataTable from "./_components/data-table";
import Title from "@/components/ui/title";
import { getLogs } from "@/lib/data"
import { Log } from "@/types/log"

export default async function Page() {
    const data: Log[] = await getLogs()

    return (
        <Grid numCols={1} className="gap-4">
            <Col numColSpan={1}>
                <Card>
                    <Title className="mb-4">Logs</Title>
                    <DataTable columns={columns} data={data} />
                </Card>
            </Col>
        </Grid>
    )
}
