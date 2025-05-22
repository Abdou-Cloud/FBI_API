import './style.css'

const zoekInput = document.getElementById("searchInput");
const filterType = document.getElementById("filterOptions");
const container = document.getElementById("resultsContainer");
const sorteerSelect = document.getElementById("sortOrder");
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
        <a href="/personen.html?id=${persoon.uid}">
          <h3>${persoon.title}</h3>
          <img src="${persoon.images[0].thumb}" alt="Foto van ${persoon.title}">
          </a>
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

  filterType.addEventListener("change", function () {
    const zoekTerm = zoekInput.value.toLowerCase();
    const filterWaarde = filterType.value;
  
    const gefilterd = allePersonen.filter(function (persoon) {
      const titel = persoon.title.toLowerCase();
      const type = persoon.poster_classification.toLowerCase();
  
      return titel.includes(zoekTerm) && (filterWaarde === "" || type.includes(filterWaarde));
    });
  
    toonPersonen(gefilterd);
  });

  sorteerSelect.addEventListener("change", function () {
    const zoekTerm = zoekInput.value.toLowerCase();
    const filterWaarde = filterType.value;
    const sorteerVolgorde = sorteerSelect.value;
  
    let gefilterd = allePersonen.filter(function (persoon) {
      const titel = persoon.title.toLowerCase();
      const type = persoon.poster_classification.toLowerCase();
      return titel.includes(zoekTerm) && (filterWaarde === "" || type.includes(filterWaarde));
    });
  
    if (sorteerVolgorde === "newest") {
      gefilterd.sort(function (a, b) {
        return new Date(b.publication) - new Date(a.publication);
      });
    } else if (sorteerVolgorde === "oldest") {
      gefilterd.sort(function (a, b) {
        return new Date(a.publication) - new Date(b.publication);
      });
    }
  
    toonPersonen(gefilterd);
  });

  const teller = document.getElementById("aantalResultaten");

const observer = new MutationObserver(() => {
  const aantal = container.querySelectorAll(".kaart").length;
  teller.textContent = `Aantal resultaten: ${aantal}`;
});

observer.observe(container, { childList: true });