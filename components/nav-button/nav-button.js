console.log("zgz");

export function createButton() {
  const prevButton = document.createElement("button");
  prevButton.classList.add("button");
  prevButton.setAttribute("type", "button");
  prevButton.textContent = "previous";
  return prevButton;
}

export function createNextButton() {
  const nextButton = document.createElement("button");
  nextButton.classList.add("button");
  nextButton.setAttribute("type", "button");
  nextButton.textContent = "next";
  return nextButton;
}

/*prevButton.addEventListener("submit", () => {});
    return prevButton();*/

/*prevButton.addEventListener("click", () => {
    if (page > 1) {
      page--;
      pagination.textContent = `${page}/${maxPage}`;
      fetchCharacters();
    }
  });*/
/*prevButton.addEventListener("submit", () => {});
  return prevButton();*/

/*nextButton.addEventListener("click", () => {
    if (page < maxPage) {
      page++;
      fetchCharacters();
    }
  });*/
