/** *******Requirement
7. 	I have an array: ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo']
	Write a function with 1 input parameter, an return a new object like this:
	{'face': 2, 'zalo': 3, 'gmail':1} // 2,3,1 are the number of occurrences of 'face', 'zalo', 'gmail' in the array

Example: 		const myArr = ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo']
			const myFunc = (inputArr) => {
				//write somthing here
			}
			console.log(myFunc(myArr)) // {'face': 2, 'zalo': 3, 'gmail':1}
*/

/** Program */
// write your code here

const myArr = ["face", "zalo", "face", "gmail", "zalo", "zalo"];

const myFunc = (inputArr) => {
  let res = {};
  inputArr.forEach((i) => {
    res[i] = (res[i] || 0) + 1;
  });
  return res;
};

console.log(myFunc(myArr));
