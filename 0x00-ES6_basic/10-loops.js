// export default function appendToEachArrayValue(array, appendString) {
//   for (var idx in array) {
//     var value = array[idx];
//     array[idx] = appendString + value;
//   }

// return array;
// }
export default function appendToEachArrayValue(array, appendString) {
  let index = 0;
  const array2 = array;
  for (const value of array) {
    array2[index] = appendString + value;
    index += 1;
  }

  return array2;
}
