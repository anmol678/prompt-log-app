import { Card, Title } from "@tremor/react";
import { getLogs } from "@/lib/data"
import { Log } from "@/types/log"
import { columns } from "./columns"
import { DataTable } from "./data-table";

export default async function Page() {
    const data: Log[] = await getLogs()

    return (
        <Card>
            <Title className="mb-8">Logs</Title>
            <DataTable columns={columns} data={data} />
        </Card>
    )
}