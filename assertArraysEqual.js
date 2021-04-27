const eqArrays = (arr1, arr2) => {
  return arr1.length === arr2.length && arr1.every((item, i) => {
     return item === arr2[i]})
 }
 