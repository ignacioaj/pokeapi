export function Fetching(fetch_url, setState) {
  fetch(fetch_url)
    .then((response) => {
      return response.ok ? response.json() : { results: [] };
    })
    .then((data) => {
      (fetch_url === "https://pokeapi.co/api/v2/pokemon") |
      (fetch_url === "https://pokeapi.co/api/v2/type")
        ? setState(data.results)
        : setState(data);
    });
}
