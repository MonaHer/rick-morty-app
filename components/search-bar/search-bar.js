export function createSearchBar() {
  const searchBar = document.createElement("form");
  searchBar.classList.add("search-bar");

  const searchBarInput = document.createElement("input");
  searchBarInput.classList.add("search-bar__input");
  searchBarInput.setAttribute("type", "text");

  const searchBarButton = document.createElement("button");
  searchBarButton.classList.add("search-bar__button");

  const searchBarIcon = document.createElement("img");
  searchBarIcon.setAttribute("src", "assets/magnifying-glass.png");
  searchBarIcon.classList.add("search-bar__icon");
}
/*searchBar.addEventListener("submit", (event) => {
    event.preventDefault();
    searchQuery = event.target.elements.query.value;
    page = 1;
    fetchCharacters();
  });*/
