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
