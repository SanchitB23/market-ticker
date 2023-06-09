import axios from "axios";
import { CryptoRes } from "@/types/types";
import { getAPICurrencyCode } from "@/utils";

export function fetchCrypto(page: number, limit: number, search: string) {
  return axios.get<CryptoRes>(
    "https://api.coinranking.com/v2/coins",
    //temp Do not use original due to API Limit Error "https://api.coingecko.com/api/v3/coins/markets",
    {
      params: {
        referenceCurrencyUuid: getAPICurrencyCode(),
        offset: page * limit,
        search,
        limit,
      },
    }
  );
}
