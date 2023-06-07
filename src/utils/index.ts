export function getCurrencyCode() {
  return "inr";
}

export function formatToCurrency(value: number) {
  return new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: getCurrencyCode(),
  }).format(value);
}

export function formatToPercentage(value: number) {
  return new Intl.NumberFormat(navigator.language, {
    style: "percent",
    minimumFractionDigits: 2,
  }).format(value);
}
