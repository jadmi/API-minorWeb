// Hulp van Jad

export async function GET({ url }) {
  const userInput = url.searchParams.get("artist");

  const groqResponse = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.PRIVATE_GROQ_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content:
              "Je geeft drie muziek artiesten terug gebaseerd op wat de gebruiker als input geeft, alleen de artiesten namen en niks anders. Als de gebruiker een muziekartiest op geeft geef dan drie artiesten die vergelijkbare muziek hebben. Gebruik geen markdown of andere opmaak in je berichten. elke artiest op een nieuwe regel. Geen markdown, geen nummering, geen extra tekst. Geen lege regels. Als je niks uit de user input kan halen en/of de opgegeven input is een naam maar geen spotify artiest zeg dan aan: Sorry hier kan ik geen artiesten uit halen, probeer wat anders!",
          },
          {
            role: "user",
            content: userInput,
          },
        ],
      }),
    },
  );
  const groqData = await groqResponse.json();
  const artistSuggestions = groqData.choices[0].message.content;
  console.log(JSON.stringify(artistSuggestions));
  if (
    artistSuggestions ===
    "Sorry hier kan ik geen artiesten uit halen, probeer wat anders!"
  ) {
    return new Response(JSON.stringify({ error: artistSuggestions }));
  }
  const artistNames = artistSuggestions.split("\n");
  console.log(artistNames);

  const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: import.meta.env.SPOTIFY_CLIENT_ID,
      client_secret: import.meta.env.SPOTIFY_CLIENT_SECRET,
    }),
  });
  const { access_token } = await tokenRes.json();

  // Promise.all --> hulp van Jad
  // https://www.reddit.com/r/learnjavascript/comments/ylcdrt/what_does_the_map_function_actually_do/

  const results = await Promise.all(
    artistNames.map(async (artist) => {
      const searchRes = await fetch(
        `https://api.spotify.com/v1/search?q=${artist}&type=track&limit=3&market=US`,
        { headers: { Authorization: `Bearer ${access_token}` } },
      );
      const searchData = await searchRes.json();
      console.log(searchData);
      return { artist, tracks: searchData.tracks.items };
      console.log(tracks);
    }),
  );

  return new Response(JSON.stringify({ results }));
}
