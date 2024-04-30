let position = 0;
const cards = document.querySelectorAll(".card");
const titles = document.querySelectorAll("h2");
const backgrounds = [
  "assets/paladin_background.jpeg",
  "assets/ranger_background.jpeg",
  "assets/wizard_background.jpeg"
];

function rotateRight() {
  position = (position + 1) % 3;
  updateCards();
}

function rotateLeft() {
  position = (position - 1 + 3) % 3;
  updateCards();
}

function updateCards() {
  cards.forEach((card, i) => {
    let offset = (i - position + 3) % 3;
    card.style.transform = `translateX(${
      offset === 1 ? -250 : offset === 2 ? 250 : 0
    }px) rotateY(${offset === 1 ? -30 : offset === 2 ? 30 : 0}deg) scale(${
      offset === 0 ? 1 : 0.8
    })`;
    card.style.opacity = offset === 0 ? 1 : 0.8;
    card.style.zIndex = offset === 0 ? 3 : 1;
  });
  titles.forEach((title, i) => {
    title.style.opacity = i === position ? 1 : 0;
  });
  document.body.style.backgroundImage = `url('${backgrounds[position]}')`;
}
document.querySelectorAll(".flip-button").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents the rotation function from being triggered
    let card = button.closest(".card");
    card.classList.toggle("is-flipped");
  });
});
