"use client";
import React, { useState } from "react";
import DataTable from "@/components/ui/data-table";
import { columns } from "@/app/(Landing Page)/_market-updates/columns";
import { Space_Grotesk } from "next/font/google";
import { useCryptoTableQuery } from "@/queries/crypto/r-query";
import LoadingTable from "@/components/loading-table";

const spaceGrotesk = Space_Grotesk({ weight: ["700"], subsets: ["latin"] });

function Crypto() {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const { data, isLoading, isError } = useCryptoTableQuery(pageNumber);
  const tableData = data?.data.data.coins ?? [];
  return (
    <section className={"space-y-4 text-white"}>
      <h1
        className={"text-2xl text-primary-foreground"}
        style={spaceGrotesk.style}
      >
        Crypto Updates
      </h1>
      {/*Implement Search Sort Pagination*/}
      {isLoading && <LoadingTable columns={columns} limit={10} />}
      {!isLoading && !isError && (
        <DataTable
          columns={columns}
          data={tableData}
          setPageNumber={setPageNumber}
        />
      )}
    </section>
  );
}

export default Crypto;
