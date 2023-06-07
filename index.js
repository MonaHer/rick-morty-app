import createCharacterCard from "./components/card/card.js";
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');
const url = `https://rickandmortyapi.com/api/character?page=${page}`;

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

async function fetchCharacters() {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      maxPage = data.info.pages;

      cardContainer.innerHTML = "";
      data.results.forEach((character) => {
        const newCard = createCharacterCard(character);
        cardContainer.append(newCard);
        console.log(data);
      });
    } else {
      console.error("Bad Response");
    }
  } catch (error) {
    console.error("An Error occured");
  }
}
prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    pagination.textContent = `${page}/${maxPage}`;
    fetchCharacters();
  } else {
    page++;
  }
});
nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    pagination.textContent = `${page}/${maxPage}`;
    fetchCharacters();
  } else {
    page--;
  }
});
