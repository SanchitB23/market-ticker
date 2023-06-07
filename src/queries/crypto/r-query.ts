import { fetchCryptoHighlight } from "@/queries/crypto/fetcher";
import { useQuery } from "@tanstack/react-query";

export function useCryptoHighlightQuery(page = 1) {
  return useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchCryptoHighlight(page),
    retry: false,
  });
}
