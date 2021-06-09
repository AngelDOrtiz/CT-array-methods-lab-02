export function mappingFunction(arr, callback) {
  const booger = [];
    
  for(let i = 0; i < arr.length; i++) {
    booger[i] = callback(arr[i]);
  }
  return booger;
}
