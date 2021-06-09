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

export function findIndex(arr, callback) {
  
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) 
      return i;
  }    
  return -1;
}

export function reduceFunction(arr, callback, initialValue) {
  let accumulator = initialValue === undefined ? 0 : initialValue;

  for(let i = 0; i < arr.length; i++) {
    accumulator = accumulator + callback(arr[i]);
  }
  return accumulator;
    
}

export function everyFunction(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    if(!callback(arr[i])) return false;
  }
  return true;
}
