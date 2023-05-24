"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Log } from "@/types/log"

export const columns: ColumnDef<Log>[] = [
    {
        accessorKey: "request_time",
        header: "Time",
    },
    {
        accessorKey: "function_name",
        header: "Function",
    },
    {
        accessorKey: "tags",
        header: "Tags",
    },
    {
        accessorKey: "model",
        header: "Model",
    },
    {
        accessorKey: "provider",
        header: "Provider",
    },

]
