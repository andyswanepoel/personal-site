const throttlePause: Record<string, boolean> = {};

export default (
  callback: (event?: Event) => void,
  wait: number,
  pauseKey: string
) => {
  if (throttlePause[pauseKey]) return;

  throttlePause[pauseKey] = true;
  setTimeout(() => {
    callback();
    throttlePause[pauseKey] = false;
  }, wait);
};
