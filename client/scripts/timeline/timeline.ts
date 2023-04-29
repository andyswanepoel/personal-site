const changeYear = (event: Event) => {
  const target = event.currentTarget as HTMLElement;
  const year = target.getAttribute("data-timeline-selector");

  document
    .querySelectorAll("[data-timeline-year]")
    .forEach(card => card.classList.remove("timeline__experience__visible"));

  document
    .querySelectorAll(`[data-timeline-year='${year}']`)
    .forEach(exp => exp.classList.add("timeline__experience__visible"));
};

export default () => {
  document.querySelectorAll("[data-timeline-selector]").forEach(btn => {
    btn.addEventListener("click", changeYear);
  });
};
