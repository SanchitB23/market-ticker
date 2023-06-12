"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  PaginationState,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import React, { useEffect, useMemo, useState } from "react";
import { spaceGrotesk700 } from "@/styles/fonts";
import { Input } from "@/components/ui/input";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  onRowClick: React.Dispatch<React.SetStateAction<never>> | (() => {});
  uniqueId: string;
  title?: string;
}

function DataTable<TData, TValue>({
  columns,
  data,
  setPageNumber,
  onRowClick,
  uniqueId,
  title,
}: DataTableProps<TData, TValue>) {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  useEffect(() => {
    setPageNumber(pageIndex);
  }, [pageIndex, setPageNumber]);

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const table = useReactTable({
    data,
    columns,
    pageCount: -1,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    debugTable: true,
    initialState: { pagination: { pageIndex: 1 } },
  });

  return (
    <section>
      <div className={"flex justify-between"}>
        <h1
          className={"mb-4 text-2xl text-primary-foreground"}
          style={spaceGrotesk700.style}
        >
          {title}
        </h1>
        <Input type={"search"} placeholder={"To Do"} />
      </div>
      <Table style={spaceGrotesk700.style} className="text">
        <TableHeader
          className={"bg-gradient-to-r from-red-500 to-yellow-500 text-white"}
        >
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
                );
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
                className={"hover:cursor-pointer"}
                onClick={
                  /*@ts-ignore-line*/
                  () => onRowClick(row.original[uniqueId])
                }
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
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>{table.getState().pagination.pageIndex + 1}</strong>
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </section>
  );
}

export default DataTable;
