import React from "react";
import { Roboto } from "next/font/google";
import CryptoHighlight from "@/app/(Landing Page)/_hero/crypto-highlight";

const roboto = Roboto({ weight: ["700"], subsets: ["latin"] });
async function Index() {
  return (
    <section
      id={"hero"}
      className={"flex h-[90vh] items-center justify-center "}
    >
      <div className={roboto.className}>
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
