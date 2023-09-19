export default (callback: (event: Event) => void, wait: number) => {
  setTimeout(callback, wait);
};
