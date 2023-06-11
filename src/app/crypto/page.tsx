"use client";
import React, { useState } from "react";
import Hero from "@/app/crypto/hero";
import CryptoTable from "@/app/crypto/_market-updates";
import CoinDetailModal from "@/app/crypto/CoinDetailModal";
import { Dialog } from "@/components/ui/dialog";

function Page() {
  const [selectedCoin, setSelectedCoin] = useState("fds");
  return (
    <Dialog open={!!selectedCoin}>
      <Hero setCoin={setSelectedCoin} />
      <CryptoTable setCoin={setSelectedCoin} />
      <CoinDetailModal setCoin={setSelectedCoin} coin={selectedCoin} />
    </Dialog>
  );
}

export default Page;
