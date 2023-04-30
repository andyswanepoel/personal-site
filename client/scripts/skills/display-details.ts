const showCard = (event: Event) => {
  const target = event.currentTarget as HTMLElement;
  const skill = target.getAttribute("data-skill");

  document.querySelectorAll("[data-skill-card]").forEach(card => {
    card.classList.remove("grid__skill__card__visible");
    if (card.getAttribute("data-skill-card") === skill) {
      card.classList.add("grid__skill__card__visible");
    }
  });
};

export default () => {
  document.querySelectorAll("[data-skill]").forEach(btn => {
    btn.addEventListener("click", showCard);
  });
};
