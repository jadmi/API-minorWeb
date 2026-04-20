export async function GET({ url }) {
  const userInput = url.searchParams.get("artist");

  if (!userInput) {
    return new Response(
      JSON.stringify({
        error: "Please specify an artist",
      }),
      {
        status: 400,
      },
    );
  }

  const groqResponse = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.PUBLIC_GROQ_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content:
              "Je geeft drie muziek artiesten terug gebaseerd op wat de gebruiker als input geeft, alleen de artiesten namen en niks anders. Als de gebruiker een muziekartiest op geeft geef dan drie artiesten die vergelijkbare muziek hebben. Gebruik geen markdown of andere opmaak in je berichten. Als je niks uit de user input kan halen en/of de opgegeven input is een naam maar geen spotify artiest zeg dan aan: Sorry hier kan ik geen artiesten uit halen, probeer wat anders!",
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
  console.log(artistSuggestions);

  // je token wordt alleen hier gebruikt
  // ..
  return new Response(
    JSON.stringify({
      answer: artistSuggestions,
    }),
  );
}
