export default () => {
  document.querySelectorAll("[data-nav-link]").forEach(navLink => {
    navLink.addEventListener("click", event => {
      event.preventDefault();
      //   if current scroll is below target, scroll to position +
      const linkTarget = (event.currentTarget as HTMLElement).getAttribute(
        "href"
      );

      if (linkTarget) {
        const targetElTop = document
          .querySelector(linkTarget)
          ?.getBoundingClientRect().top;

        const scrollPos = document.documentElement.scrollTop;
        const headerHeight = document.getElementById("header")?.clientHeight;

        scroll({
          top: scrollPos + (targetElTop || 0) - (headerHeight || 0),
          behavior: "smooth"
        });
      }
    });
  });
};
