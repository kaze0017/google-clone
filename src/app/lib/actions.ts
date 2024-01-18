export async function getRandomWord() {
  const response = await fetch(
    "https://random-word-api.herokuapp.com/word?number=1"
  );
  const data = await response.json();
  return data[0];
}

export async function searchWeb({ query }: { query: string }) {
  const api_key = process.env.GOOGLE_API_KEY;
  const api_cx = process.env.GOOGLE_API_CX;

  const result = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${api_key}&cx=${api_cx}&q=${query}`
  );
  if (!result.ok) throw new Error("Failed to fetch" + result.status);

  const data = await result.json();
  return data;
}
