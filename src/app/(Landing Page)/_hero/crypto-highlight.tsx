"use client";

import React from "react";
import { useCryptoHighlightQuery } from "@/queries/crypto/r-query";

function CryptoHighlight() {
  const { error, data, isLoading } = useCryptoHighlightQuery();
  console.log("crypto data", error, data?.data, isLoading);
  return <div></div>;
}

export default CryptoHighlight;
