import AnswerSheet from "../components/AnswerSheet";
import Code from "../components/Code";
import { parseObjectJsx } from "../helper/function";

function Question8() {
  const arr1 = [
    { make: "audi", model: "r8", year: "2012" },
    { make: "audi", model: "rs5", year: "2013" },
    { make: "ford", model: "mustang", year: "2012" },
    { make: "ford", model: "fusion", year: "2015" },
    { make: "kia", model: "optima", year: "2012" },
  ];

  const result = (keyProp, inputArr) => {
    let res = {};
    inputArr.forEach((item) => {
      if (!res.hasOwnProperty(item[keyProp])) {
        res[item[keyProp]] = [item];
      } else {
        res[item[keyProp]].push(item);
      }
    });
    return res;
  };

  const title = (
    <>
      8. I have an array like this: const arr1 = [{"{"} make: 'audi', model:
      'r8', year: '2012' {"}"}, {"{"} make: 'audi', model: 'rs5', year: '2013'{" "}
      {"}"}, {"{"} make: 'ford', model: 'mustang', year: '2012' {"}"}, {"{"}{" "}
      make: 'ford', model: 'fusion', year: '2015' {"}"}, {"{"} make: 'kia',
      model: 'optima', year: '2012' {"}"}]
      <br />
      &ensp;&ensp;Please write a function has 2 input parameters, 1st param is
      an array like above array, 2nd param is the name of any property in each
      object of the array.
      <br />
      &ensp;&ensp;Use example: myFunc('make', arr1);
      <br />
      &ensp;&ensp;That will return a new object like this (each property is an
      array, this array includes objects correspond of that property):
      <br />
      &ensp;&ensp;{"{"}
      <br />
      &ensp;&ensp;&ensp;&ensp;"audi": [
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{"{"}
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"make": "audi",
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"model": "r8",
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"year": "2012"
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{"}"},
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{"{"}
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"make": "audi",
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"model": "rs5",
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"year": "2013"
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{"}"}
      <br />
      &ensp;&ensp;&ensp;&ensp;],
      <br />
      &ensp;&ensp;&ensp;&ensp;"ford": [
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{"{"}
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"make": "ford",
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"model": "mustang",
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"year": "2012"
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{"}"},
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{"{"}
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"make": "ford",
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"model": "fusion",
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"year": "2015"
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{"}"}
      <br />
      &ensp;&ensp;&ensp;&ensp;],
      <br />
      &ensp;&ensp;&ensp;&ensp;"kia": [
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{"{"}
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"make": "kia",
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"model": "optima",
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"year": "2012"
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{"}"}
      <br />
      &ensp;&ensp;&ensp;&ensp;]
      <br />
      &ensp;&ensp;{"}"}
    </>
  );

  const codes = `
  const arr1 = [
    { make: "audi", model: "r8", year: "2012" },
    { make: "audi", model: "rs5", year: "2013" },
    { make: "ford", model: "mustang", year: "2012" },
    { make: "ford", model: "fusion", year: "2015" },
    { make: "kia", model: "optima", year: "2012" },
  ];

  const result = (keyProp, inputArr) => {
    let res = {};
    inputArr.forEach((item) => {
      if (!res.hasOwnProperty(item[keyProp])) {
        res[item[keyProp]] = [item];
      } else {
        res[item[keyProp]].push(item);
      }
    });
    return res;
  };
  `;

  return (
    <AnswerSheet
      title={title}
      codes={<Code code={codes} language="javascript" />}
      result={parseObjectJsx(result("make", arr1))}
      logResult={result("make", arr1)}
    />
  );
}

export default Question8;
