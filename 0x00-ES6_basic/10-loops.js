// export default function appendToEachArrayValue(array, appendString) {
//   for (var idx in array) {
//     var value = array[idx];
//     array[idx] = appendString + value;
//   }

// return array;
// }
export default function appendToEachArrayValue(array, appendString) {
  let index = 0;
  for (let value of array) {
    array[index] = appendString + array[index];
    index++;
  }

  return array;
}
