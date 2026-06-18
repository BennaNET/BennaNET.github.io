export function getQueryParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

export function encodeQuery(q) {
  return encodeURIComponent((q || "").trim());
}
