export function createSearchBar({ onSubmit }) {
  const searchBar = document.createElement("form");
  searchBar.classList.add("search-bar");
  searchBar.addEventListener("submit", onSubmit);

  const searchBarInput = document.createElement("input");
  searchBarInput.classList.add("search-bar__input");
  searchBarInput.setAttribute("name", "query");
  searchBarInput.setAttribute("type", "text");
  searchBarInput.setAttribute("placeholder", "search characters");
  searchBarInput.setAttribute("aria-label", "character name");

  const searchBarButton = document.createElement("button");
  searchBarButton.classList.add("search-bar__button");
  searchBarButton.setAttribute("aria-label", "search for character");

  const searchBarIcon = document.createElement("img");
  searchBarIcon.classList.add("search-bar__icon");
  searchBarIcon.setAttribute("src", "assets/magnifying-glass.png");

  searchBarButton.append(searchBarIcon);
  searchBar.append(searchBarInput, searchBarButton);

  return searchBar;
}
