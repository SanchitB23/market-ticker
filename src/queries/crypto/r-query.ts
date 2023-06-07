import { fetchCryptoHighlight } from "@/queries/crypto/fetcher";
import { useQuery } from "@tanstack/react-query";

export function useCryptoHighlightQuery() {
  return useQuery({ queryKey: ["posts"], queryFn: fetchCryptoHighlight });
}
