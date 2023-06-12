import axios from "axios";
import { CoinDetailsRes, CryptoRes } from "@/types/types";
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

export function fetchCoinDetails(coinId: string, timePeriod = "7d") {
  return axios.get<CoinDetailsRes>(
    `https://api.coinranking.com/v2/coin/${coinId}`,
    {
      params: {
        referenceCurrencyUuid: getAPICurrencyCode(),
        timePeriod,
      },
      headers: {
        "Content-Type": "application/json",
        "x-access-token": process.env.COIN_RANKING_API,
      },
    }
  );
}
