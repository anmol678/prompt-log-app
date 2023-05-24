import { getLogs } from "@/lib/data"
import { Log } from "@/types/log"
import { columns } from "./columns"
import { DataTable } from "./data-table";

export default async function Page() {
    const data: Log[] = await getLogs()

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}