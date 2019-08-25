import { ScreenSizes } from "./screen_sizes";
import { ScreenTypes } from "./screen_types";

type BiggerOrSmaller = {
  andBigger: boolean;
  andSmaller: boolean;
};

type resQueryType = {
  is: {
    BigDesktop: boolean;
    Desktop: boolean;
    Smartphone: boolean;
    TabletLandscape: boolean;
    TabletPortrait: boolean;
  };
  BigDesktop: BiggerOrSmaller;
  Desktop: BiggerOrSmaller;
  Smartphone: BiggerOrSmaller;
  TabletLandscape: BiggerOrSmaller;
  TabletPortrait: BiggerOrSmaller;
  getSize: () => { width: number; height: number };
  getCurrentMode: () => ScreenTypes;
};

export function getResQuery(
  getSize: () => { width: number; height: number }
): resQueryType {
  const resQuery = {
    is: {},
    getSize,
    getCurrentMode
  } as any;

  for (const [p, opr] of [
    ["is", isBetween],
    ["andBigger", andBigger],
    ["andSmaller", andSmaller]
  ]) {
    for (const key of Object.keys(ScreenTypes)) {
      let first = p,
        second = key as string;
      if (p != "is") {
        first = second;
        second = p as string;
      }
      if (!resQuery[first as string]) {
        resQuery[first as string] = {};
      }
      Object.defineProperty(resQuery[first as string], second, {
        get: (opr as Function).bind(null, ScreenSizes[key])
      });
    }
  }

  return resQuery;

  function getCurrentMode(): ScreenTypes {
    for (const m in resQuery.is) {
      if (resQuery.is[m]) {
        return m as ScreenTypes;
      }
    }
  }

  function isBetween({ from, to }) {
    const w = getSize().width;
    return (!from || from <= w) && (!to || to > w);
  }

  function andBigger({ from, to }) {
    const w = getSize().width;
    return !from || from <= w || (to && to < w);
  }

  function andSmaller({ from, to }) {
    const w = getSize().width;
    return !from || from > w || (!to || to > w);
  }
}
