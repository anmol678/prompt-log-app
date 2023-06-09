"use client"

import { Table } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import DataTableFacetedFilter from "./data-table-faceted-filter"
import { X } from "lucide-react"
import { getUniqueProjects, getUniqueTags, getUniqueModels } from "@/lib/utils"

interface DataTableToolbarProps<TData> {
    table: Table<TData>
    data: TData[]
}

export default function DataTableToolbar<TData>({
    table,
    data,
}: DataTableToolbarProps<TData>) {
    const isFiltered =
        table.getPreFilteredRowModel().rows.length >
        table.getFilteredRowModel().rows.length

    const projects = getUniqueProjects(data).map(p => ({ label: p, value: p }));
    const tags = getUniqueTags(data).map(t => ({ label: t, value: t }));
    const models = getUniqueModels(data).map(m => ({ label: m, value: m }));

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
                {table.getColumn("project") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("project")}
                        title="Project"
                        options={projects}
                    />
                )}
                {table.getColumn("tags") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("tags")}
                        title="Tags"
                        options={tags}
                    />
                )}
                {table.getColumn("model") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("model")}
                        title="Model"
                        options={models}
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
