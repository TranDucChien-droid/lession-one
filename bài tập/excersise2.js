/** *******Requirement
2. Find 2 elements with the greatest sum in an array
Example: [1,7,9,2,5,3,8] => [9,8]
*/

/** Program */
// write your code here

const array = [1, 7, 9, 2, 5, 3, 8];

const result = (array) => {
  const temp = array.sort((a, b) => b - a);
  return [temp[0], temp[1]];
};

console.log(result(array));
