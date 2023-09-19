const scrollToContent = (event: Event) => {
  const target = event.currentTarget as HTMLElement;
  const year = target.getAttribute("data-timeline-selector");

  document
    .querySelector(`[data-timeline-year='${year}']`)
    ?.scrollIntoView({ behavior: "smooth" });
};

const changeTimelineYear = (year: string) => {
  document
    .querySelectorAll("[data-timeline-selector]")
    .forEach(btn => btn.classList.remove("timeline__button__selected"));

  document
    .querySelector(`[data-timeline-selector='${year}']`)
    ?.classList.add("timeline__button__selected");

  scrollToSelectedYear();
};

let scrollToYearTimeout;

const changeYearScroll = (entry: IntersectionObserverEntry) => {
  if (scrollToYearTimeout) {
    clearTimeout(scrollToYearTimeout);
  }

  if (entry.isIntersecting) {
    console.log("entry: ", entry);
    const year = entry.target.getAttribute("data-timeline-year");

    scrollToYearTimeout = setTimeout(() => {
      if (year) {
        console.log("@@@@fitring");
        changeTimelineYear(year);
      }
    }, 50);
  }
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

const timelineObserverOptions = {
  root: document.getElementById("timeline__experience__container"),
  rootMargin: "0px",
  threshold: 0.9
};

const callback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach(changeYearScroll);
};

let observer = new IntersectionObserver(callback, timelineObserverOptions);

export default () => {
  document.querySelectorAll("[data-timeline-selector]").forEach(btn => {
    btn.addEventListener("click", scrollToContent);
  });

  document
    .querySelectorAll(".timeline__experience__wrapper")
    .forEach(w => observer.observe(w));
};
