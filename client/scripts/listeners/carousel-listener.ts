import throttle from "./throttle";

const carouselScrollHandler = (event: Event) => {
  const scrollContainer = event.target as HTMLElement;
  const scrollLeft = scrollContainer.scrollLeft;
  const clientWidth = scrollContainer.clientWidth;
  const scrollWidth = scrollContainer.scrollWidth;

  const containerClassList = (scrollContainer.parentElement as HTMLElement)
    .classList;
  if (scrollLeft > 10) {
    containerClassList.add("carousel__container__left");
  } else {
    containerClassList.remove("carousel__container__left");
  }

  if (scrollWidth - (scrollLeft + clientWidth) > 10) {
    containerClassList.add("carousel__container__right");
  } else {
    containerClassList.remove("carousel__container__right");
  }
};

export default () => {
  document.getElementById("carousel")?.addEventListener("scroll", event => {
    throttle(carouselScrollHandler.bind(null, event), 150, "carousel-throttle");
  });
};
