import createCharacterCard from "./components/card/card.js";
import { createButton } from "./components/nav-button/nav-button.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const navigation = document.querySelector('[data-js="navigation"]');

// States/*
let maxPage = 1;
let page = 1;
let searchQuery = "";

fetchCharacters();

async function fetchCharacters() {
  try {
    const url = `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`;
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      maxPage = data.info.pages;
      pagination.textContent = `${page}/${maxPage}`;
      cardContainer.innerHTML = "";
      data.results.forEach((character) => {
        const newCard = createCharacterCard(character);
        cardContainer.append(newCard);
      });
    } else {
      console.log("Bad Response");
    }
  } catch (error) {
    console.error("An Error occured");
  }
}

const prevButton = createButton({
  text: "previous",
  onClick: () => {
    if (page > 1) {
      page--;
      pagination.textContent = `${page}/${maxPage}`;
      fetchCharacters();
    }
  },
});

const nextButton = createButton({
  text: "next",
  onClick: () => {
    if (page < maxPage) {
      page++;
      fetchCharacters();
    }
  },
});

const pagination = createPagination();

const searchBar = createSearchBar({
  onSubmit: (event) => {
    event.preventDefault();
    searchQuery = event.target.elements.query.value;
    page = 1;
    fetchCharacters();
  },
});

searchBarContainer.append(searchBar);
navigation.append(prevButton, pagination, nextButton);
