"use client";
import React, { useState } from "react";
import DataTable from "@/components/ui/data-table";
import { columns } from "@/app/crypto/_market-updates/columns";
import { useCryptoTableQuery } from "@/queries/crypto/r-query";
import LoadingTable from "@/components/loading-table";
import { spaceGrotesk700 } from "@/styles/fonts";

function CryptoTable({
  setCoin,
}: {
  setCoin: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const { data, isLoading, isError } = useCryptoTableQuery(pageNumber);
  const tableData = data?.data.data.coins ?? [];
  return (
    <section className={"space-y-4 text-white"}>
      <h1
        className={"text-2xl text-primary-foreground"}
        style={spaceGrotesk700.style}
      >
        Crypto Updates
      </h1>
      {isLoading && <LoadingTable columns={columns} limit={10} />}
      {!isLoading && !isError && (
        <DataTable
          columns={columns}
          data={tableData}
          setPageNumber={setPageNumber}
          onRowClick={setCoin}
          uniqueId={"uuid"}
        />
      )}
    </section>
  );
}

export default CryptoTable;
