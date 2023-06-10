import axios from "axios";
import { CryptoRes } from "@/types/types";
import { getAPICurrencyCode } from "@/utils";

export function fetchCrypto(page: number, limit: number, search: string) {
  return axios.get<CryptoRes>("https://api.coinranking.com/v2/coins", {
    params: {
      referenceCurrencyUuid: getAPICurrencyCode(),
      offset: page * limit,
      search,
      limit,
    },
    headers: {
      "Content-Type": "application/json",
      "x-access-token": process.env.COIN_RANKING_API,
    },
  });
}
