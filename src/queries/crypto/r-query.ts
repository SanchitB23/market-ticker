import { fetchCoinDetails, fetchCrypto } from "@/queries/crypto/fetcher";
import { useQuery } from "@tanstack/react-query";

export function useCryptoHighlightQuery() {
  return useQuery({
    queryKey: ["crypto-highlight"],
    queryFn: () => fetchCrypto(0, 4, ""),
    retry: false,
  });
}

export function useCryptoTableQuery(page = 0, limit = 10, search = "") {
  return useQuery({
    queryKey: ["crypto-table", page],
    queryFn: () => fetchCrypto(page, limit, search),
    retry: false,
    keepPreviousData: true,
    staleTime: 1000,
  });
}

export function useCoinDataQuery(id: string, timePeriod = "7d") {
  return useQuery({
    queryKey: ["crypto-coin", id],
    queryFn: () => fetchCoinDetails(id, timePeriod),
    retry: false,
  });
}
