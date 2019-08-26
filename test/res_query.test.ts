import { getResQuery } from "../src/res_query";
import "jest";
import { ScreenTypes as st } from "../src/screen_types";

import { ScreenSizes as ss } from "../src/screen_sizes";

const testCases = Object.keys(st).map(key => [
  [`Is ${ss[key].from - 1} ${key}`, ss.Desktop.from - 1, "is", key, false],
  [`Is ${ss[key].to + 1} ${key}`, ss[key].to + 1, "is", key, false],
  [`Is ${ss[key].to} ${key}`, ss[key].to, "is", key, false],
  [`Is ${ss[key].from} ${key}`, ss[key].from, "is", key, true],
  [`Is ${ss[key].to - 1} ${key}`, ss[key].to - 1, "is", key, true],

  [`${key} and bigger ${ss[key].to}`, ss[key].to + 1, key, "andBigger", true],
  [`${key} and bigger ${ss[key].to}`, ss.Desktop.to, key, "andBigger", true],
  [
    `${key} and bigger ${ss[key].to - 1}`,
    ss.Desktop.to - 1,
    key,
    "andBigger",
    true
  ],
  [
    `${key} and bigger ${ss[key].from + 1}`,
    ss[key].from + 1,
    key,
    "andBigger",
    true
  ],
  [`${key} and bigger ${ss[key].from}`, ss[key].from, key, "andBigger", true],
  [
    `${key} and bigger ${ss[key].from - 1}`,
    ss[key].from - 1,
    key,
    "andBigger",
    false
  ],

  [
    `${key} and smaller ${ss[key].to}`,
    ss[key].to + 1,
    key,
    "andSmaller",
    false
  ],
  [`${key} and smaller ${ss[key].to}`, ss.Desktop.to, key, "andSmaller", false],
  [
    `${key} and smaller ${ss[key].to - 1}`,
    ss.Desktop.to - 1,
    key,
    "andSmaller",
    true
  ],
  [
    `${key} and smaller ${ss[key].from + 1}`,
    ss[key].from + 1,
    key,
    "andSmaller",
    true
  ],
  [`${key} and smaller ${ss[key].from}`, ss[key].from, key, "andSmaller", true],
  [
    `${key} and smaller ${ss[key].from - 1}`,
    ss[key].from - 1,
    key,
    "andSmaller",
    true
  ]
]);

describe("Responsive query", () => {
  for (const cases of testCases) {
    console.log(cases)
    for (const [text, width, propOne, propTow, expected] of cases) {
      test(text as any, () => {
        testCase(width, propOne, propTow, expected);
      });
    }
  }
});

function testCase(width, propOne, propTow, expected) {
  const resQuery = getResQuery(() => ({
    width,
    height: 0
  }));
  const result =resQuery[propOne][propTow] 
  if (result != expected) {
    console.log(width, propOne, propTow, expected)
  }
  expect(result).toEqual(expected);
}
