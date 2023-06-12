"use client";
import React, { useState } from "react";
import DataTable from "@/components/ui/data-table";
import { columns } from "@/app/crypto/_market-updates/columns";
import { useCryptoTableQuery } from "@/queries/crypto/r-query";
import LoadingTable from "@/components/loading-table";

function CryptoTable({
  setCoin,
}: {
  setCoin: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const { data, isLoading, isError } = useCryptoTableQuery(pageNumber);
  const tableData = data?.data.data.coins ?? [];
  return (
    <section className={"text-white"}>
      {isLoading && <LoadingTable columns={columns} limit={10} />}
      {!isLoading && !isError && (
        <DataTable
          columns={columns}
          data={tableData}
          setPageNumber={setPageNumber}
          onRowClick={setCoin}
          uniqueId={"uuid"}
          title={"Crypto Updates"}
        />
      )}
    </section>
  );
}

export default CryptoTable;
