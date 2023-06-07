import React from "react";
import DataTable from "@/components/ui/data-table";
import { columns } from "@/app/(Landing Page)/_market-updates/columns";
import DUMMY_DATA from "@/data/crypto-highlight.json";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["700"], subsets: ["latin"] });

function Crypto() {
  return (
    <section className={"space-y-4 text-white"}>
      <h1 className={"text-2xl text-primary-foreground"} style={roboto.style}>
        Crypto Updates
      </h1>
      <DataTable columns={columns} data={DUMMY_DATA} />
    </section>
  );
}

export default Crypto;
