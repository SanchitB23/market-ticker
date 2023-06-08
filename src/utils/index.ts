export function getAPICurrencyCode(currCode?: string) {
  switch (currCode) {
    case "USD":
      return "yhjMzLPhuIDl";
    case "EUR":
      return "5k-_VTxqtCEI";
    case "INR":
      return "6mUvpzCc2lFo";
    default:
      return "6mUvpzCc2lFo"; //inr
  }
}

type TypeNotation = Intl.NumberFormatOptions["notation"];

export function formatToCurrency(
  value: number,
  notation: TypeNotation = "standard",
  currency?: string
) {
  return new Intl.NumberFormat("en-IN", {
    compactDisplay: "long",
    currency: currency ?? "INR",
    style: "currency",
    notation,
  }).format(value);
}

export function formatToPercentage(value: number) {
  return new Intl.NumberFormat(navigator.language, {
    style: "percent",
    minimumFractionDigits: 2,
  }).format(value);
}
