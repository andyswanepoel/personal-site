export default () => {
  document
    .getElementById("nav__hamburger")
    ?.addEventListener("click", event => {
      const target = event.currentTarget as HTMLElement;
      target?.classList.toggle("nav__hamburger__open");

      document.body.classList.toggle("overlay__active");

      if (target?.getAttribute("aria-expanded") === "true") {
        target?.setAttribute("aria-expanded", "false");
      } else {
        target?.setAttribute("aria-expanded", "true");
      }
    });
};
