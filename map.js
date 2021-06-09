export function mappingFunction(arr, callback) {
  const booger = [];
    
  for(let i = 0; i < arr.length; i++) {
    booger[i] = callback(arr[i]);
  }
  return booger;
}

export function filterFunction(arr, callback) {
  const array = [];
  let j = 0;
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) {
      array[j] = arr[i];
      j++;
    }
  }
  return array;
}
