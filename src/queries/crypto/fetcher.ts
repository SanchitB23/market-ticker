import axios from "axios";

type CryptoRes = [
  {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
  }
];
export function fetchCryptoHighlight() {
  return axios.get<CryptoRes>(
    "https://api.coingecko.com/api/v3/coins/markets",
    {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 4,
        page: 1,
      },
    }
  );
}
