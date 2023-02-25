import AnswerSheet from "../components/AnswerSheet";
import Code from "../components/Code";

function Question6() {
  const arr1 = [1, 2, 3, 4, 2, 3, 5, 3, 1, 1, 5, 2, 3];

  const myFunc = (array) => {
    const temp = array.filter((c, index) => {
      return array.indexOf(c) !== index;
    });
    return [...new Set(temp)];
  };

  const arr2 = myFunc(arr1);

  const title = (
    <>
      6. Given an array arr1. Write a function that returns a new array of
      elements that appear more than once in arr1. The elements in new array can
      only appear once in this array.
      <br />
      Example: const arr1 = [1,2,3,4,2,3,5,3,1,1,5,2,3];
      <br />
      const myFunc = (inputArr) ={">"} {"{"}
      <br />
      // write your code here
      <br />
      {"}"}
      <br />
      const arr2 = myFunc(arr1); // [2,3,1,5]
    </>
  );

  const codes = `
  const arr1 = [1, 2, 3, 4, 2, 3, 5, 3, 1, 1, 5, 2, 3];

  const myFunc = (array) => {
    const temp = array.filter((c, index) => {
      return array.indexOf(c) !== index;
    });
    return [...new Set(temp)];
  };

  const arr2 = myFunc(arr1);
  `;

  return (
    <AnswerSheet
      title={title}
      codes={<Code code={codes} language="javascript" />}
      result={JSON.stringify(arr2)}
      logResult={arr2}
    />
  );
}

export default Question6;
