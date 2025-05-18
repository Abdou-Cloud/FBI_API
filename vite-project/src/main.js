import './style.css'

const zoekInput = document.getElementById("searchInput");
const filterType = document.getElementById("filterOptions");
const container = document.getElementById("resultsContainer");


async function dataOphalen() {
    const res = await fetch("https://api.fbi.gov/wanted/v1/list?pageSize=50");
    const data = await res.json();
    return data.items;
  }