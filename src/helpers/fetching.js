export function Fetching(fetch_url, setState) {
  fetch(fetch_url)
    .then((response) => {
      return response.ok ? response.json() : { results: [] };
    })
    .then((data) => {
      setState(data.results);
    });
}
