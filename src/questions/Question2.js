import AnswerSheet from "../components/AnswerSheet";
import Code from "../components/Code";

function Question2() {
  const array = [1, 7, 9, 2, 5, 3, 8];

  const result = (array) => {
    const temp = array.sort((a, b) => b - a);
    return [temp[0], temp[1]];
  };

  const title = (
    <>
      2. Find 2 elements with the greatest sum in an array
      <br />
      Example: [1,7,9,2,5,3,8] =&gt; [9,8]
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
      result={JSON.stringify(result(array))}
      logResult={result(array)}
    />
  );
}

export default Question2;
