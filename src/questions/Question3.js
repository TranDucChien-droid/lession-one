import AnswerSheet from "../components/AnswerSheet";
import Code from "../components/Code";

function Question3() {
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

  const title = (
    <>
      3. Find pairs of elements whose sum is equal to a given number
      <br />
      Example: [1,7,9,2,5,3,8], sum = 10 =&gt; [1,9] ; [7,3]; [2,8]
    </>
  );

  const codes = `
  const result = (array) => {
    const temp = array.sort((a, b) => b - a);
    return [temp[0], temp[1]];
  };
  `;

  return (
    <AnswerSheet
      title={title}
      codes={<Code code={codes} language="javascript" />}
      result={JSON.stringify(result(array, sum))}
      logResult={result(array, sum)}
    />
  );
}

export default Question3;
