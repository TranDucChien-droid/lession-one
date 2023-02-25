import { Collapse } from "antd";
import Code from "../Code";
import "./style.css";

function AnswerSheet({ title, codes, result, logResult }) {
  const onChange = (e) => {
    if (e.length <= 0) return;
    console.log(logResult);
  };

  return (
    <div className={"wrapper"}>
      <p>{title}</p>
      <Collapse onChange={(e) => onChange(e)}>
        <Collapse.Panel header="Answer:" key="1">
          <p>{codes}</p>
          {result ? <p>Result: {result}</p> : null}
        </Collapse.Panel>
      </Collapse>
    </div>
  );
}

export default AnswerSheet;
