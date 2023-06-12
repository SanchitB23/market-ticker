"use client";
import React, { useState } from "react";
import Hero from "@/app/crypto/hero";
import CryptoTable from "@/app/crypto/_market-updates";
import CoinDetailModal from "@/app/crypto/CoinDetailModal";
import { Dialog } from "@/components/ui/dialog";

function Page() {
  const [selectedCoin, setSelectedCoin] = useState<string>("");
  return (
    <Dialog open={!!selectedCoin}>
      <Hero setCoin={setSelectedCoin} />
      <CryptoTable setCoin={setSelectedCoin} />
      {selectedCoin && (
        <CoinDetailModal setCoin={setSelectedCoin} coin={selectedCoin} />
      )}
    </Dialog>
  );
}

export default Page;
