/** *******Requirement
1. Write a function with 2 input parameters (each parameter is an array). This function returns an array of the same elements in two arrays;

Example: 	array1 = [1,2,3,4,5,6];
			array2 = [3,4,8,9,12];
			=> [3,4]
*/

/** Program */
// write your code here

const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [3, 4, 8, 9, 12];

const result = (array1, array2) => {
  const temp = [...array1, ...array2].sort((a, b) => a - b);
  const res = [];
  for (let index = 0; index < temp.length - 1; index++) {
    if (temp[index] === temp[index + 1]) {
      res.push(temp[index]);
    }
  }
  return res;
};

console.log(result(array1, array2));
