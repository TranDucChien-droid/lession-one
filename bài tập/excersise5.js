/** *******Requirement
5. Get a new array of duplicate elements in 2 arrays, each element appears exactly once in the new array
Example: 	const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
			const arr2 = [3, 5, 9, 10, 88];
			=> [3,5,9]
*/

/** Program */
// write your code here

const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const arr2 = [3, 5, 9, 10, 88];

const result = (arr1, arr2) => {
  const tempArr1 = arr1.filter((c, index) => {
    return arr1.indexOf(c) === index;
  });
  const tempArr2 = arr2.filter((c, index) => {
    return arr2.indexOf(c) === index;
  });
  const temp = [...tempArr1, ...tempArr2].sort((a, b) => a - b);
  const res = [];
  for (let index = 0; index < temp.length - 1; index++) {
    if (temp[index] === temp[index + 1]) {
      res.push(temp[index]);
    }
  }
  return res;
};

console.log(result(arr1, arr2));
