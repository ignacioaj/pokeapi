export async function Fetching(fetch_url) {
  let dataList = [];
  await fetch(fetch_url)
    .then((response) => {
      return response.ok ? response.json() : { results: [] };
    })
    .then((data) => {
      dataList = data.results;
    });
  return dataList;
}
