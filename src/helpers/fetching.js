export async function Fetching(fetch_url) {
  try {
    const res = await fetch(fetch_url);
    if (!res.ok) {
      throw new Error("");
    }
    const data = await res.json();

    if (
      fetch_url === "https://pokeapi.co/api/v2/pokemon" ||
      fetch_url === "https://pokeapi.co/api/v2/type"
    ) {
      return data.results;
    } else {
      console.log(data);
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}
