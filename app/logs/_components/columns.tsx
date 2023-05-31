"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Log } from "@/types/log"
import { SortAsc, SortDesc } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const columns: ColumnDef<Log>[] = [
    {
        accessorKey: "request_time",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    size="sm"
                    className="-ml-3 h-8"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Time
                    {column.getIsSorted() === "asc"
                        ? <SortAsc className="ml-2 h-4 w-4" />
                        : <SortDesc className="ml-2 h-4 w-4" />
                    }
                </Button>
            )
        },
    },
    {
        accessorKey: "function_name",
        header: "Function",
    },
    {
        accessorKey: "tags",
        header: "Tags",
        filterFn: "arrIncludesSome",
        cell: ({ row }) => {
            const tags: string[] = row.getValue("tags")
            return (
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Badge
                            key={tag}
                            variant="secondary"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
            )
        },
    },
    {
        accessorKey: "model",
        header: "Model",
        filterFn: "arrIncludesSome",
        cell: ({ row }) => (
            <div className="flex flex-wrap gap-2">
                <Badge variant="outline">
                    {row.getValue("model")}
                </Badge>
            </div>
        ),
    },
    {
        accessorKey: "provider",
        header: "Provider",
    },

]
