import './style.css'

const zoekInput = document.getElementById("searchInput");
const filterType = document.getElementById("filterOptions");
const container = document.getElementById("resultsContainer");

let allePersonen = [];

async function dataOphalen() {
    const res = await fetch("https://api.fbi.gov/wanted/v1/list?pageSize=50");
    const data = await res.json();
    allePersonen = data.items;
    toonPersonen(allePersonen);
  }

  function toonPersonen(personen) {
    container.innerHTML = "";
  
    personen.forEach(function (persoon) {
      container.innerHTML += `
        <div class="kaart">
          <h3>${persoon.title}</h3>
          <img src="${persoon.images[0].thumb}" alt="Foto van ${persoon.title}">
          <p>Type: ${persoon.poster_classification}</p>
          <p>Geslacht: ${persoon.sex}</p>
          <p>Gewicht: ${persoon.weight}</p>
          <p>Lengte: ${persoon.height_max}</p>
          <p>Reward: ${persoon.reward_text}</p>
          <p>Publicatiedatum: ${persoon.publication}</p>
        </div>
      `;
    });
  }

  zoekInput.addEventListener("input", function () {
    const zoekTerm = zoekInput.value.toLowerCase();
  
    const gefilterd = allePersonen.filter(function (persoon) {
      return persoon.title.toLowerCase().includes(zoekTerm);
    });
  
    toonPersonen(gefilterd);
  
  });

  dataOphalen();