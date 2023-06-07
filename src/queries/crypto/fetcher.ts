import axios from "axios";
import { CryptoRes } from "@/types/types";
import { getCurrencyCode } from "@/utils";

export function fetchCryptoHighlight(page: number) {
  return axios.get<CryptoRes[]>(
    "https://api.coingeckos.com/api/v3/coins/markets",
    //temp Do not use original due to API Limit Error "https://api.coingecko.com/api/v3/coins/markets",
    {
      params: {
        vs_currency: getCurrencyCode(),
        order: "market_cap_desc",
        per_page: 4,
        page,
      },
    }
  );
}
