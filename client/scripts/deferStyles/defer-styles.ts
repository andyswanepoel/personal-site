const loadDeferredStyles = () => {
  document.querySelectorAll("[data-defer-styles]").forEach(el => {
    el.removeAttribute("as");
    el.removeAttribute("data-defer-styles");
    el.setAttribute("rel", "stylesheet");
  });
};
export default () => {
  window.addEventListener("load", loadDeferredStyles);
};
