"use client"

import React, { useState, useEffect } from "react"
import { ColumnDef, ColumnFiltersState, SortingState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table/table"
import { DataTablePagination } from "@/components/ui/table/table-pagination"
import DataTableToolbar from "./data-table-toolbar"
import { useRouter } from "next/navigation"

interface PromptVersionData {
    selected: string
    versions: string[]
}

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    promptVersion?: PromptVersionData
}

export default function DataTable<TData, TValue>({
    columns,
    data,
    promptVersion,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )

    const router = useRouter()
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,
        },
        initialState: {
            pagination: {
                pageSize: 25,
            },
        },
    })

    useEffect(() => {
        if (promptVersion?.selected) {
            setColumnFilters(filters => {
                const existingFilterIndex = filters.findIndex(filter => filter.id === "version_number")

                if (existingFilterIndex !== -1) {
                    const updatedFilters = [...filters];
                    updatedFilters[existingFilterIndex].value = [promptVersion.selected]
                    return updatedFilters
                } else {
                    return [
                        ...filters,
                        {
                            id: "version_number",
                            value: [promptVersion.selected]
                        }
                    ]
                }
            })
        }
    }, [promptVersion?.selected])

    return (
        <>
            <DataTableToolbar table={table} data={data} versions={promptVersion?.versions} />
            <div className="rounded-md border bg-background">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                    isDataRow
                                    onClick={() => router.push(`/logs/${row.original.id}`)}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <DataTablePagination table={table} />
        </>
    )
}
