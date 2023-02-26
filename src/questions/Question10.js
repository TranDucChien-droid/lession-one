import AnswerSheet from "../components/AnswerSheet";
import Code from "../components/Code";

function Question10() {
  const title = (
    <>
      10. Write 3 methods myMap, myFilter, myReduce (suggestion: use
      Array.prototype, "this" keyword, and for loop).
      <br />3 these methods have similar in use and usage as map, filter, reduce
      of array in JS
    </>
  );

  const myMap = `
  Array.prototype.mymap = function(callback) {
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this));
    }
    return resultArray;
  }
  `;

  const myFilter = `
  Array.prototype.myFilter = function(callback) {
    const filterArr = [];
    for(let index = 0; index<this.length; index++) {
        if(!!callback(this[index], index, this)) {
            filterArr.push(this[index]);
        }
    }
    return filterArr;
  }
  `;

  const myReduce = `
  Array.prototype.myReduce = function(callback, accumulator) {
    if(this.length < 1) {
        return;
    }

    if(!accumulator) {
        if(typeof this[0] === "string") {
            accumulator = '';
        } else if(typeof this[0] === "number") {
            accumulator = 0;
        }
    }

    for(let index = 0; index < this.length; index++) {
        accumulator = callback(accumulator, this[index]);
    }
    return accumulator;
  }
  `;

  return (
    <AnswerSheet
      title={title}
      codes={
        <>
          <p>
            MyMap:
            <Code code={myMap} language="javascript" />
          </p>
          <p>
            MyFilter:
            <Code code={myFilter} language="javascript" />
          </p>
          <p>
            MyReduce:
            <Code code={myReduce} language="javascript" />
          </p>
        </>
      }
      // result={JSON.stringify(result(array, sum))}
      // logResult={result(array, sum)}
    />
  );
}

export default Question10;
