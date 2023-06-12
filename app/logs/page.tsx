import { Grid, Col, Card } from "@tremor/react";
import { columns } from "./_components/columns"
import DataTable from "./_components/data-table";
import { Heading2 } from "@/components/ui/heading";
import { getLogs } from "@/lib/data"
import { Log } from "@/types/log"

export default async function Page() {
    const data: Log[] = await getLogs()

    return (
        <Grid numCols={1} className="gap-4">
            <Col numColSpan={1}>
                <Card>
                    <Heading2 className="mb-4">Logs</Heading2>
                    <DataTable columns={columns} data={data} />
                </Card>
            </Col>
        </Grid>
    )
}
