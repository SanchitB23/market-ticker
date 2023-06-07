import React from "react";
import { Montserrat_Subrayada } from "next/font/google";
import CryptoHighlight from "@/app/(Landing Page)/_hero/crypto-highlight";

const roboto = Montserrat_Subrayada({ weight: ["700"], subsets: ["latin"] });
async function Index() {
  return (
    <section
      id={"hero"}
      className={"flex h-[90vh] flex-col justify-center gap-y-10"}
    >
      <div className={"flex flex-col items-center"} style={roboto.style}>
        <h1
          className={
            "flex flex-col items-center justify-center text-7xl uppercase text-white"
          }
        >
          <span>Track and Trade</span>
          <span>Crypto and Stocks</span>
        </h1>
      </div>
      <CryptoHighlight />
    </section>
  );
}

export default Index;
