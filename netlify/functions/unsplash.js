export async function handler(event) {
  const apiKey = process.env.UNSPLASH_API_KEY;
  const query = event.queryStringParameters.query || "house";

  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&per_page=10&client_id=${apiKey}`
  );
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}
