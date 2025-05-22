# FBI_API

## Projectbeschrijving en functionaliteiten
De FBI_API is een webapplicatie die de "Most Wanted"-lijst van de FBI toont. Gebruikers kunnen:
- Zoeken naar specifieke cases.
- Filteren op type (bijvoorbeeld "missing", "information").
- Sorteren op publicatiedatum (nieuwste of oudste).
- Details van een case bekijken.
- Cases opslaan als favorieten in LocalStorage.

## Gebruikte API's
- **FBI Wanted API**: [https://api.fbi.gov/wanted/v1/list](https://api.fbi.gov/wanted/v1/list)

## Implementatie van elke technisch vereiste

### DOM Manipulatie
- **Elementen selecteren**: 
  - `document.getElementById("searchInput")` in [src/main.js](src/main.js), lijn 3.
- **Elementen manipuleren**: 
  - `container.innerHTML +=` in [src/main.js](src/main.js), lijn 17.
- **Events aan elementen koppelen**: 
  - `zoekInput.addEventListener("input", ...)` in [src/main.js](src/main.js), lijn 31.

### Modern JavaScript
- **Gebruik van constanten**: 
  - `const zoekInput = document.getElementById("searchInput");` in [src/main.js](src/main.js), lijn 3.
- **Template literals**: 
  - `` `<div class="kaart">...</div>` `` in [src/main.js](src/main.js), lijn 21.
- **Iteratie over arrays**: 
  - `personen.forEach(function (persoon) {...})` in [src/main.js](src/main.js), lijn 19.
- **Array methodes**: 
  - `allePersonen.filter(...)` in [src/main.js](src/main.js), lijn 49.
- **Arrow functions**: 
  - `personen.forEach((persoon) => {...})` in [src/main.js](src/main.js), lijn 85.
- **Conditional (ternary) operator**: 
  - `filterWaarde === "" ? true : type.includes(filterWaarde)` in [src/main.js](src/main.js), lijn 67.
- **Callback functions**: 
  - `allePersonen.filter(function (persoon) {...})` in [src/main.js](src/main.js), lijn 49.
- **Promises**: 
  - `haalPersoon(...).then(...)` in [personen.html](personen.html), lijn 127.
- **Async & Await**: 
  - `async function dataOphalen() {...}` in [src/main.js](src/main.js), lijn 9-10.
- **Observer API**: 
  - `const observer = new MutationObserver(...)` in [src/main.js](src/main.js), lijn 79.

### Data & API
- **Fetch om data op te halen**: 
  - `const res = await fetch("https://api.fbi.gov/wanted/v1/list?pageSize=50");` in [src/main.js](src/main.js), lijn 10.
- **JSON manipuleren en weergeven**: 
  - `const data = await res.json();` in [src/main.js](src/main.js), lijn 11.

### Opslag & validatie
- **Gebruik van LocalStorage**: 
  - `localStorage.setItem("favorieten", JSON.stringify(favorieten));` in [personen.html](personen.html), lijn 178.

### Styling & Layout
- **Basis HTML layout**: 
  - Flexbox wordt gebruikt in [style.css](/src/style.css), bijvoorbeeld `.functions` op lijn 22.
- **Basis CSS**: 
  - Styling van kaarten in [style.css](/src/style.css), `.kaart` op lijn 50.
- **Gebruiksvriendelijke elementen**: 
  - Verwijderknoppen en icoontjes zoals `★` in [index.html](/index.html), lijn 12.

### Tooling & Structuur
- **Project opgezet met Vite**: 
  - Zie [package.json](/package.json)
- **Correcte folderstructuur**: 
  - HTML, CSS en JS zijn gescheiden in respectievelijk `index.html`, `style.css` en `main.js`.

## Installatiehandleiding
1. Clone de repository:
   ```bash
   git clone <repository-url>

2. Start npm:
npm run dev

3. druk op link:
Local:   http://localhost:5175/


## Screenshots van de applicatie
![Home-pagina](/public/images/home.png)
![Profielpagina](/public/images/profiel.png)
![Favorietenpagina](/public/images/favorieten.png)

## Gebruikte bronnen
- [ChatGPT AI Chatlog](https://chatgpt.com/share/682f8ff1-5bcc-800b-aa66-d1baed8c859e): Voor algemene ondersteuning en uitleg.
- [Observer API Tutorial](https://youtu.be/Mi4EF9K87aM?si=B_45wBP63iDa3M_3): Uitleg over het gebruik van de Observer API.
- [API Fetchen](https://youtu.be/37vxWr0WgQk?si=TYaTehjtcKOfnTz7): Handleiding voor het ophalen van data met fetch.
- [Callback Functions](https://youtu.be/i2SPq-nb3NQ?si=pnPME0M6WeEacQIT): Uitleg over callback functies in JavaScript.