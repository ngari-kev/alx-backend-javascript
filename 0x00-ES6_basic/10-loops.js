// export default function appendToEachArrayValue(array, appendString) {
//   for (var idx in array) {
//     var value = array[idx];
//     array[idx] = appendString + value;
//   }

// return array;
// }
export default function appendToEachArrayValue(array, appendString) {
  const array2 = array;
  for (const [index, value] of array.entries()) {
    array2[index] = appendString + value;
  }
  return array2;
}
