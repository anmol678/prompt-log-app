"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SortAsc, SortDesc } from "lucide-react"
import { Log, LogWithPromptVersion } from "@/types/log"
import { parseISO } from "date-fns"

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
        sortingFn: (rowA, rowB, columnId) => {
            const dateA = parseISO(rowA.getValue(columnId));
            const dateB = parseISO(rowB.getValue(columnId));
            return dateA > dateB ? 1 : -1;
        },
    },
    {
        accessorKey: "function_name",
        header: "Function",
    },
    {
        accessorKey: "project",
        accessorFn: (log) => log.project?.title,
        header: "Project",
        filterFn: "arrIncludesSome",
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
]

export const columnsWithVersion: ColumnDef<LogWithPromptVersion>[] = [
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
        sortingFn: (rowA, rowB, columnId) => {
            const dateA = parseISO(rowA.getValue(columnId));
            const dateB = parseISO(rowB.getValue(columnId));
            return dateA > dateB ? 1 : -1;
        },
    },
    {
        accessorKey: "function_name",
        header: "Function",
    },
    {
        accessorKey: "project",
        accessorFn: (log) => log.project?.title,
        header: "Project",
        filterFn: "arrIncludesSome",
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
        accessorKey: "version_number",
        header: "Version",
        filterFn: "arrIncludesSome",
        cell: ({ row }) => (
            <div className="flex flex-wrap gap-2">
                {row.getValue("version_number")}
            </div>
        ),
    },
]
