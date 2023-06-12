interface CryptoRes {
  status: string;
  data: {
    coins: CryptoData[];
  };
}
export type CryptoData = {
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
  price: number;
  change: number;
  marketCap: number;
};

interface CoinDetailsRes {
  status: string;
  data: {
    coin: CoinData;
  };
}

export type CoinData = {
  uuid: string;
  symbol: string;
  name: string;
  description: string;
  color: string;
  iconUrl: string;
  websiteUrl: string;
  "24hVolume": number;
  price: number;
  change: number;
  marketCap: number;
  priceAt: number;
  rank: number;
  sparkline: string[];
  allTimeHigh: {
    price: number;
    timestamp: number;
  };
  listedAt: number;
};
