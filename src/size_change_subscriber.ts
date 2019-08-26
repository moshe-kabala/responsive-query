
const listeners = new Set<Function>();

const __getWinSize = () =>
  Object.freeze({
    width: window.outerWidth as number,
    height: window.outerHeight as number
  });

let size = __getWinSize();

var onresize = function(e) {
  size = __getWinSize();
  for (const func of listeners) {
    if (typeof func == "function") {
      func(size);
    }
  }
};

window.addEventListener("resize", onresize);

export const sizeChangeSubscriber = Object.freeze({
  subscribe(func) {
    listeners.add(func);
  },
  unsubscribe(func) {
    listeners.add(func);
  }
});

export function getWinSize() {
  return size;
}
