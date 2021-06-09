import { mappingFunction } from '../map.js';

describe('map(arr, callback)', () => {
  it('Takes an array and callback of signature item => {} and creates a new array with the return value of each called callback', () => {
    const expectedArray = [1, 2, 3, 4];
    const mappedArray = mappingFunction(expectedArray, (item) => {return item + 1;});
    expect(mappedArray).toEqual([2, 3, 4, 5]);
  });
});
