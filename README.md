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


