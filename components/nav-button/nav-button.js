export function createButton({ text, onClick }) {
  const newButton = document.createElement("button");
  newButton.classList.add("button", "button--${text}");
  newButton.addEventListener("click", onClick);
  newButton.textContent = text;

  return newButton;
}
