import { taskA, taskB } from "../../src/labs/func/func";

describe('Tests taskA', () => {
  it('should return 6 values', () => {
    const answer = [
      0.054368820470632684,
      0.06622080335286436,
      0.09709503896690738,
      NaN,
      NaN,
      NaN,
  ];
  expect (taskA(1.2, 0.48, 0.7, 2.2, 0.3)).toEqual(answer);
});
  it('should return 7 values', () => {
    const answer = [
      0.054368820470632684,
      0.06622080335286436,
      0.09709503896690738,
      NaN,
      NaN,
      NaN,
      NaN
    ];
    expect (taskA(1.2, 0.48, 0.7, 2.5, 0.3)).toEqual(answer);
});
  it('Should return 0 values since the step is negative', () => {
    expect (taskA(1.2, 0.48, 0.7, 2.2, -0.3)).toEqual([]);
});
  it('The beginning is bigger than ending, the step is negative. Should return 6 numbers', () => {
    const answer = [
      NaN,
      NaN,
      NaN,
      0.09709503896690738,
      0.06622080335286436,
      0.054368820470632684
    ];
    expect (taskA(1.2, 0.48, 2.2, 0.7, -0.3)).toEqual(answer);
});
  it('The beginning is bigger than ending, the step is positive. Should return 0 numbers', () => {
    expect (taskA(1.2, 0.48, 2.2, 0.7, 0.3)).toEqual([]);
});
  it('The beginning is equal to the end', () => {
    expect (taskA(1.2, 0.48, 2.2, 2.2, 0.3)).toEqual([NaN]);
});
  it('The beginning is positive, the end is negative, the step is negative', () => {
    const answer = [
      0.06622080335286436,
      0.049657425813011594,
      0.043018577102869514,
      0.04048285552560282,
      0.04083714024691526,
      NaN,
      NaN
    ];
    expect (taskA(1.2, 0.48, 1, -2, -0.5)).toEqual(answer);
  });
  it('The step is 0', () => { 
    expect (taskA(1.2, 0.48, 0.7, 2.2, 0)).toEqual([]);
  });    
})

describe('Tests taskB', () => {
  it('should return 5 values', () => {
    const answer = [
      0.0456484669199151,
      0.04720879843185251,
      0.05089896000040642,
      0.06313548270500532,
      0.09329695241232179
    ];
    expect (taskB(1.2, 0.48, [0.25, 0.36, 0.56, 0.94, 1.28])).toEqual(answer);
  });
  it('should return empty array', () => {
    expect (taskB(1.2, 0.48, [])).toEqual([]);
});
})