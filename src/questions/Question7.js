import AnswerSheet from "../components/AnswerSheet";
import Code from "../components/Code";

function Question7() {
  const myArr = ["face", "zalo", "face", "gmail", "zalo", "zalo"];

  const myFunc = (inputArr) => {
    let res = {};
    inputArr.forEach((i) => {
      res[i] = (res[i] || 0) + 1;
    });
    return res;
  };

  const title = (
    <>
      7. I have an array: ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo']
      <br />
      &ensp;&ensp;Write a function with 1 input parameter, an return a new
      object like this:
      <br />
      &ensp;&ensp;{"{"}'face': 2, 'zalo': 3, 'gmail':1{"}"} // 2,3,1 are the
      number of occurrences of 'face', 'zalo', 'gmail' in the array
      <br />
      &ensp;&ensp;Example: const myArr = ['face', 'zalo', 'face', 'gmail',
      'zalo', 'zalo']
      <br />
      &ensp;&ensp;const myFunc = (inputArr) =&gt; {"{"}
      <br />
      &ensp;&ensp;&ensp;&ensp;//write somthing here
      <br />
      &ensp;&ensp;{"}"}
      <br />
      &ensp;&ensp;console.log(myFunc(myArr)) // {"{"}'face': 2, 'zalo': 3,
      'gmail':1
      {"}"}
    </>
  );

  const codes = `
  const myArr = ["face", "zalo", "face", "gmail", "zalo", "zalo"];

  const myFunc = (inputArr) => {
    let res = {};
    inputArr.forEach((i) => {
      res[i] = (res[i] || 0) + 1;
    });
    return res;
  };
  `;

  return (
    <AnswerSheet
      title={title}
      codes={<Code code={codes} language="javascript" />}
      result={JSON.stringify(myFunc(myArr))}
      logResult={myFunc(myArr)}
    />
  );
}

export default Question7;
