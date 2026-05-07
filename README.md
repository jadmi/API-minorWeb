# Week 1 dag 1 
Vandaag ben ik bezig geweest met het conceptualiseren van mijn idee. Ik had al wat in gedachte m.b.t de spotify api en was de volgende stap om te gaan kijken op welke manier ik deze ga gebruiken. Ik wilde graag iets maken wat ik zelf ook zou gebruiken om nieuwe muziek te ontdekken.

# Voortgangsgesprek
Voor mijn concept heb ik het volgende in gedachte:
1. User geeft een prompt - vibe, of een specifieke artiest
2. AI vertaald dat naar relevante artiesten, in json
3. Ik zet dat antwoord om naar spotify api call
4. Ik pak de response van spotify
5. Ik weergeef de spotify antwoorden op een interessante manier - hierbij web API's gebruiken.

<img width="991" height="644" alt="Screenshot 2026-04-02 at 13 14 10" src="https://github.com/user-attachments/assets/ac99da27-0358-4675-a970-7fcf323267f5" />


## Feedback idee

- Begin met sotify API onderzoeken, authenticatie, data ophalen op basis van vaste antwoorden
- Daarna AI-laag toevoegen
- Web AI toevoeging?
- Lijst van artiesten die bij bepaalde genres passen meegeven aan Web AI, inclusief genres — Web AI testen
- Spotify player ophalen

- Stapsgewijs werken
- Mock pagina is prima

## Checkout week 2 dag 1
Vandaag heb ik als eerst de workshop gevolgd over componenten, waarna ik aan de slag ben gegaan met de Spotify (web) API. Ik heb de authentication opgezet en de eerste calls gemaakt. Daarna ben ik gaan kijken in hoeverre ik mijn idee kan toepassen zoals ik het oorspronkelijk in gedachte had. Een aantal van de endpoints die ik dacht nodig te moeten hebben zijn deprecated zoals artist top tracks en similar artists, dus ben ik gaan testen met de search endpoint waarmee je met een iets omstandigere manier wel populaire nummers van een artiest kan pakken. Het AI gedeelte komt dan van pas voor vergelijkbare artiesten.

<img width="300" height="117" alt="image" src="https://github.com/user-attachments/assets/0ba9bbe8-2030-4967-bb5c-40d0b5f881d6" />
<img width="300" height="119" alt="image" src="https://github.com/user-attachments/assets/8e25572e-e75c-4bf5-9530-4ad02eeaf2f8" />

Eerst authenticaten met spotify

<img width="663" height="263" alt="Screenshot 2026-04-08 at 20 13 48" src="https://github.com/user-attachments/assets/8526f2ea-7797-40d4-9ee8-0daa7bd9d352" />

Testen met de search endpoint, api call om 3 relevante nummers van de artiest terug krijgen. Dit werkt dus kan ik deze combineren met de AI call die 3 vergelijkbare artiesten geeft waarvan ik vervolgens met de spotify search endpoint nummers kan opvragen en weergeven.

<img width="825" height="199" alt="Screenshot 2026-04-08 at 20 21 20" src="https://github.com/user-attachments/assets/79da38a9-5a40-4ac9-83d4-c9d75baa63ce" />

# Voortgang/checkout
Ik ben de hele dag bezig geweest met Web ai en uitvinden hoe het werkt. Ik moest verschillende dingen in chrome aanzetten en vervolgens het model lokaal downloaden, met veel errors in de tussentijd (vooral typescript). 

<img width="706" height="518" alt="Screenshot 2026-04-10 at 09 32 21" src="https://github.com/user-attachments/assets/96626faf-4423-442f-ab47-8900820556ba" />

Daarnaast heb ik de input gekoppeld aan een textarea en de output aan een p om de output van web ai te testen. 

<img width="317" height="111" alt="Screenshot 2026-04-10 at 09 44 08" src="https://github.com/user-attachments/assets/b8f13ef0-4294-48fd-847d-c454c7a9a35a" />

Na wat testen met de output en de systemprompt zijn er zeker beperkingen dus heb ik als "fallback" ook een gratis LLM geimplementeerd die dan antwoord geeft in plaats van web ai als de gebruiker deze niet lokaal heeft draaien.

<img width="782" height="461" alt="Screenshot 2026-04-10 at 09 40 53" src="https://github.com/user-attachments/assets/790e9faa-1cef-4fe8-9ee4-9a9e0194c764" />

## Tussentijd
Bezig geweest met de techniek --> api calls en begin aan visueel gemaakt


# Proces
## Opzet idee + begin
Het leek mij interessant om met de Spotify api te werken, vervolgens ben ik gaan brainstormen met een relevant onderwerp hiervoor. Ik wilde een applicatie maken waarvan ik zelf ook gebruik zou maken als ik het ergens tegenkwam. Zo ben ik uitgekomen op het idee van SpotiMatch, waarbij je een artiest of vibe kan invullen die je leuk vind en gebaseerd daarop krijg je drie bijpassende artiesten waar je de muziek van kan ontdekken. Zo heb ik zelf wat nummers toegevoegd van een aangeraden rap artiest die gegenereerd werd door de applicatie.

Vervolgens heb ik een begin gemaakt met de Spotify API en het laten werken in de basis:
<img width="1127" height="641" alt="image" src="https://github.com/user-attachments/assets/a101acd8-aa76-41fb-9dc3-5ae86be8b351" />
Ik moest gelijk wat aanpassingen maken omdat de top tracks endpoint deprecated is, als vervanger gebruik ik de spotify search endpoint om de top tracks van elke artiest op te halen. 

## Eerste stap - webAI
Als eerste stap ben ik aan de slag gegaan met web AI om te kijken of ik het hiermee kon laten werken en dat als informatiebron te gebruiken voor de artiesten, het was meer moeite dan ik dacht maar gelukt om op te zetten op mijn laptop. je vult een artiest in en webAI geeft soortgelijke artiesten gebaseerd op de ingevoerde artiest.
Gedurende dit proces kreeg ik wel te horen van Jad dat je dan mijn applicatie alleen kan gebruiken als je zelf ook web AI heb draaien, omdat het lokaal is. 
<img width="750" height="202" alt="Screenshot 2026-05-07 at 18 17 33" src="https://github.com/user-attachments/assets/5efe0d78-4fab-4d9d-931e-c2eed344c9d0" />

<img width="329" height="104" alt="image" src="https://github.com/user-attachments/assets/39062723-3cec-4669-a903-bea79c2b7354" />

<img width="843" height="360" alt="image" src="https://github.com/user-attachments/assets/f989c6cd-a428-4ddc-8b16-35fe214e4bbc" />

## Tweede stap - fallback regelen
Ik wilde dat anderen mijn applicatie ook zouden kunnen gebruiken dus ben ik bezig geweest om een "fallback" te maken. Ik heb gezocht naar een gratis LLM AI en kwam uit bij Groq, ik heb hun documentatie bekeken en het zo laten werken met een if else dat als je geen web ai hebt draaien dat de call naar groq wordt gemaakt en je dus alsnog gebruik kan maken van de applicatie. 

<img width="1022" height="290" alt="image" src="https://github.com/user-attachments/assets/25571f7a-4113-42f6-b713-0c46b525f3ca" />

## Derde stap - AJAX + Spotify API
Na het combineren van web ai en groq liep ik tegen twee dingen aan; de pagina moest elke keer herladen en de api keys kon je gewoon terug vinden in de code. Met deze twee problemen ging ik naar Jad en hij kwam met een API route, waarbij je de calls naar api.js die op de server staat en die stuurt json terug, geen nieuwe pagina. Vervolgens pak je de JSON, stuur je die naar de spotify api, die stuurt antwoorden terug, en vervolgens update je daarmee de DOM om de resultaten erin te zetten.

<img width="742" height="79" alt="image" src="https://github.com/user-attachments/assets/66c5de18-1a85-4ebb-90d6-774cd7860161" />

<img width="515" height="134" alt="image" src="https://github.com/user-attachments/assets/25f7e011-7eac-41cf-8934-300de9d5e47a" />


Tot slot heb ik de eerste pagina visueel gemaakt, input en resultaten.

https://github.com/user-attachments/assets/179abccf-1135-4f0f-93c0-40af8eb138b5

## Vierde stap - detailpagina
Ik had nog niet gedacht aan een detailpagina dus ben ik vervolgens daarmee aan de slag gegaan. Op de detailpagina krijg je dynamisch per artiest de top nummers en top albums te zien. Deze nummers komen deels overeen met de nummers die je op het beginscherm te zien krijgt. Hiermee krijg je genoeg mogelijkheden om nieuwe muziek te ontdekken. Elk nummer linkt dan ook naar Spotify aangezien ik mijn applicatie wil zonder dat je hoeft in te loggen bij Spotify. Ook hier heb ik gaandeweg aanpassingen gemaakt op basis van de Spotify api waarbij veel dingen deprecated zijn (artiest followers, popularity) dus moest ik vervangende manieren vinden.

<img width="641" height="721" alt="image" src="https://github.com/user-attachments/assets/947d1613-744c-417b-af37-2559ce541b04" />


## Afronding
Tot slot ben ik visueel bezig geweest om het een geheel te maken o.a. met een logo, favicon en microanimaties. Daarbij een logischer verhaal met een duidelijkere uitleg op het beginscherm zodat je weet wat je te wachten staat bij het gebruik van mijn applicatie: nieuwe muziek ontdekken. Tot slot de detailpagina ook verbeterd met de populaire albums i.p.v. de nieuwste, iframes per nummer omdat de player niet kan zonder in te loggen en de algemene layout.



https://github.com/user-attachments/assets/6424a1a1-96db-450b-ae2c-4c8d3145f72a


# Content API
- Spotify

## Web API's
- Web AI
- LocalStorage


## Bronnen

Jad - technisch gedeelte api.js/ajax
Braham


### Spotify API
https://developer.spotify.com/documentation/web-api/tutorials/getting-started

https://developer.spotify.com/documentation/web-api/reference/search

https://developer.spotify.com/documentation/web-api/reference/get-an-artist

https://developer.spotify.com/documentation/web-api/reference/get-an-artists-albums

### Andere

Claude: specifiek stukje in code, algemene slordigheid etc. checks.

https://curlconverter.com/javascript/

https://developer.chrome.com/docs/ai/prompt-api

https://console.groq.com/docs/openai

https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation

https://www.reddit.com/r/learnjavascript/comments/ylcdrt/what_does_the_map_function_actually_do/

https://javascript.info/array-methods

https://blog.logrocket.com/localstorage-javascript-complete-guide/


