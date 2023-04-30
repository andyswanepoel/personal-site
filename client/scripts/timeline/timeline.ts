const changeYear = (event: Event) => {
  const target = event.currentTarget as HTMLElement;
  const year = target.getAttribute("data-timeline-selector");

  document.querySelectorAll("[data-timeline-year]").forEach(exp => {
    exp.classList.remove("timeline__experience__visible");
    if (exp.getAttribute("data-timeline-year") === year) {
      exp.classList.add("timeline__experience__visible");
    }
  });

  document.querySelectorAll("[data-timeline-selector]").forEach(btn => {
    btn.classList.remove("timeline__button__selected");
    if (btn === target) {
      btn.classList.add("timeline__button__selected");
    }
  });

  scrollToSelectedYear();
};

const scrollToSelectedYear = () => {
  const scrollWindow = document.getElementById(
    "timeline__window"
  ) as HTMLElement;
  const selectedYear = scrollWindow?.querySelector(
    ".timeline__button__selected"
  ) as HTMLElement;

  const selectedYearContainer = selectedYear.parentElement as HTMLElement;

  const scrollTo =
    selectedYear.clientWidth / 2 + selectedYearContainer.offsetLeft;
  scrollWindow.style.transform = `translateX(calc(50% - ${scrollTo}px))`;
};

export default () => {
  scrollToSelectedYear();
  document.querySelectorAll("[data-timeline-selector]").forEach(btn => {
    btn.addEventListener("click", changeYear);
  });
};
