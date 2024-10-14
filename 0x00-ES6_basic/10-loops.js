// export default function appendToEachArrayValue(array, appendString) {
//   for (var idx in array) {
//     var value = array[idx];
//     array[idx] = appendString + value;
//   }

// return array;
// }
export default function appendToEachArrayValue(array, appendString) {
  let index = 0;
  for (const value of array) {
    array[index] = appendString + value;
    index += 1;
  }

  return array;
}
