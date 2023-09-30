const addVisibleClass = (entry: IntersectionObserverEntry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add("timeline__year__container__visible");
    observer.unobserve(entry.target);
  }
};

const timelineObserverOptions = {
  root: document.getElementById("timeline__experience__container"),
  rootMargin: "-100px",
  threshold: 0
};

const callback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach(addVisibleClass);
};

let observer = new IntersectionObserver(callback, timelineObserverOptions);

export default () => {
  document.querySelectorAll("[data-timeline-year]").forEach(year => {
    observer.observe(year);
  });
};
