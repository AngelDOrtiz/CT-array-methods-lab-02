import { mappingFunction, filterFunction, findIndex, reduceFunction, everyFunction } from '../map.js';

describe('map(arr, callback)', () => {
  it('Takes an array and callback of signature item => {} and creates a new array with the return value of each called callback', () => {
    const expectedArray = [1, 2, 3, 4];
    const mappedArray = mappingFunction(expectedArray, (item) => {return item + 1;});
    expect(mappedArray).toEqual([2, 3, 4, 5]);
  });
});

describe('filter(arr, callback', () => {
  it('Takes an Array and callback of signature item => {} and creates a new Array with all items whose callback returned true or a truthy value.', () => {
    const testingArray = ['cool', 'cat', 'bumper', 'six-shooter'];
    const filteredArray = filterFunction(testingArray, (item) => {return item.length < 5;});
    expect(filteredArray).toEqual(['cool', 'cat']);

  });
});

describe('findIndex(arr, callback)', () => {
  it('Takes an Array and callback of signature item => {} and returns the index of the first item whose callback returns true or a truthy value.', () => {
    const testingArray = ['one', 'two', 'three', 'four'];
    const filteredArray = findIndex(testingArray, (item) => {return item === 'two';});
    expect(filteredArray).toEqual(1);
  });
});

describe('reduce(arr, callback, [intialValue])', () => {
  it('Takes an Array and callback of signature (accumulator, item) => {} and an (optional) second initialValue parameter that is the initial value of the accumulator. After each function call, the return value is passed as the accumulator argument of the next function call.', () => {
    const testingArray = [1, 2, 3, 4];
    const reducedArray = reduceFunction(testingArray, (item) => {return item;}, 0);
    expect(reducedArray).toEqual(10);
  });
});

describe('every(arr, callback)', () => {
  it('Takes an Array and callback of signature item => {} and returns an overall true value if all callback return true or a truthy value.', () => {
    const testingArray = [1, 2, 3, 4, 5];
    const trueArray = everyFunction(testingArray, (item) => {return item > 0;});
    expect(trueArray).toEqual(true);
  });
});
