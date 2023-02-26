/** *******Requirement
3. Find pairs of elements whose sum is equal to a given number
Example: [1,7,9,2,5,3,8], sum = 10 => [1,9] ; [7,3]; [2,8]
*/

/** Program */
// write your code here

const array = [1, 7, 9, 2, 5, 3, 8];
const sum = 10;

const result = (array, num) => {
  const res = [];
  const temp = array;
  for (let i = 0; i < temp.length; i++) {
    for (let j = i + 1; j < temp.length; j++) {
      if (temp[i] + temp[j] === num) {
        res.push([temp[i], temp[j]]);
      }
    }
  }
  return res;
};

console.log(result(array, sum));
