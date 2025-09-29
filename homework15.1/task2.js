export async function fetchWithHeadersAndParams(
  params = {},
  headers = {},
  client = null,
) {
  const http = client || (await import("axios")).default;
  const response = await http.get(
    "https://jsonplaceholder.typicode.com/posts",
    {
      params,
      headers,
    },
  );
  return response;
}
