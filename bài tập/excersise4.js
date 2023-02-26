/** *******Requirement
4. Get a new array from the given array so that the elements appear only once (implement 2 ways: using Set, not using Set)
Example: [1,2,3,1,2,3,4,5,6,4] => [1,2,3,4,5,6]
*/

/** Program */
// write your code here

const array = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4];

const resultOne = (array) => {
  const res = new Set(array);
  return [...res];
};

const resultTwo = (array) => {
  const temp = array.filter((c, index) => {
    return array.indexOf(c) === index;
  });
  return temp;
};

console.log(resultOne(array));
console.log(resultTwo(array));
