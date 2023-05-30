"use client"

import { Table } from "@tanstack/react-table"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { DataTableFacetedFilter } from "./data-table-faceted-filter"

import {
    ArrowBigDown,
    ArrowRight,
    ArrowUpCircle,
    ArrowBigUp,
    CheckCircle2,
    Circle,
    HelpCircle,
    XCircle,
} from "lucide-react"

export const statuses = [
    {
        value: "backlog",
        label: "Backlog",
        icon: HelpCircle,
    },
    {
        value: "todo",
        label: "Todo",
        icon: Circle,
    },
    {
        value: "in progress",
        label: "In Progress",
        icon: ArrowUpCircle,
    },
    {
        value: "done",
        label: "Done",
        icon: CheckCircle2,
    },
    {
        value: "canceled",
        label: "Canceled",
        icon: XCircle,
    },
]

export const priorities = [
    {
        label: "Low",
        value: "low",
        icon: ArrowBigDown,
    },
    {
        label: "Medium",
        value: "medium",
        icon: ArrowRight,
    },
    {
        label: "High",
        value: "high",
        icon: ArrowBigUp,
    },
]


interface DataTableToolbarProps<TData> {
    table: Table<TData>
}

export function DataTableToolbar<TData>({
    table,
}: DataTableToolbarProps<TData>) {
    const isFiltered =
        table.getPreFilteredRowModel().rows.length >
        table.getFilteredRowModel().rows.length

    return (
        <div className="flex items-center justify-between mb-4">
            <div className="flex flex-1 items-center space-x-2">
                <Input
                    placeholder="Filter logs..."
                    value={(table.getColumn("function_name")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("function_name")?.setFilterValue(event.target.value)
                    }
                    className="h-8 w-[150px] lg:w-[250px]"
                />
                {table.getColumn("model") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("model")}
                        title="Model"
                        options={statuses}
                    />
                )}
                {table.getColumn("tags") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("tags")}
                        title="Tags"
                        options={priorities}
                    />
                )}
                {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={() => table.resetColumnFilters()}
                        className="h-8 px-2 lg:px-3"
                    >
                        Reset
                        <X className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>
        </div>
    )
}
