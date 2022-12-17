export default () => {
  document.querySelectorAll(".carousel__card").forEach(card => {
    card.addEventListener("click", event => {
      const target = event.currentTarget as HTMLElement;
      target?.classList.toggle("carousel__card__active");
    });
    card.addEventListener("keydown", event => {
      const target = event.currentTarget as HTMLElement;
      if (
        (event as KeyboardEvent).key === " " ||
        (event as KeyboardEvent).key === "Enter"
      ) {
        event.preventDefault();
        target?.classList.toggle("carousel__card__active");
      }
    });
  });
};
