import AnswerSheet from "../components/AnswerSheet";
import Code from "../components/Code";

function Question4() {
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

  const title = (
    <>
      4. Get a new array from the given array so that the elements appear only
      once (implement 2 ways: using Set, not using Set)
      <br />
      Example: [1,2,3,1,2,3,4,5,6,4] =&gt; [1,2,3,4,5,6]
    </>
  );

  const codesOne = `
  const result = (array) => {
    const res = new Set(array);
    return [...res];
  };
  `;

  const codesTwo = `
  const result = (array) => {
    const temp = array.filter((c, index) => {
      return array.indexOf(c) === index;
    });
    return temp;
  };
  `;

  return (
    <AnswerSheet
      title={title}
      codes={
        <>
          <p>
            Solution 1 {"("}using Set{")"}:
            <Code code={codesOne} language="javascript" />
          </p>
          <p>
            Solution 2 {"("}not using Set{")"}:
            <Code code={codesTwo} language="javascript" />
          </p>
        </>
      }
      result={JSON.stringify(resultTwo(array))}
      logResult={resultOne(array)}
    />
  );
}

export default Question4;
