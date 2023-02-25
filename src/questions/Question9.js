import AnswerSheet from "../components/AnswerSheet";
import Code from "../components/Code";
import { parseObjectJsx } from "../helper/function";

function Question9() {
  const order = {
    cart: [
      { id: 1, name: "ao dai", amount: 5, price: 100000 },
      { id: 2, name: "ao coc", amount: 2, price: 200000 },
      { id: 3, name: "quan dai", amount: 3, price: 150000 },
      { id: 4, name: "quan coc", amount: 4, price: 130000 },
    ],
    customer: "Name",
    address: "12 Giai Phong Street",
  };

  const result = (array) => {
    const initial = {
      totalOfMoney: 0,
      totalOfAmount: 0,
    };
    const res = array?.reduce((accumulator, current) => {
      return {
        totalOfMoney: accumulator.totalOfMoney + current.price * current.amount,
        totalOfAmount: accumulator.totalOfAmount + current.amount,
      };
    }, initial);
    return (
      "totalOfMoney: " +
      res.totalOfMoney +
      " ,totalOfAmount: " +
      res.totalOfAmount
    );
  };

  const title = (
    <>
      9. I have 1 object like this:
      <br />
      &ensp;&ensp;const order = {"{"}
      <br />
      &ensp;&ensp;&ensp;&ensp;'cart': [
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{"{"} id: 1, name: "ao dai", amount:
      5, price: 100000 {"}"},
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{"{"} id: 2, name: "ao coc", amount:
      2, price: 200000 {"}"},
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{"{"} id: 3, name: "quan dai", amount:
      3, price: 150000 {"}"},
      <br />
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{"{"} id: 4, name: "quan coc", amount:
      4, price: 130000 {"}"},
      <br />
      &ensp;&ensp;&ensp;&ensp;],
      <br />
      &ensp;&ensp;&ensp;&ensp;'customer': 'Name',
      <br />
      &ensp;&ensp;&ensp;&ensp;'address': '12 Giai Phong Street'
      <br />
      &ensp;&ensp;{"}"};
      <br />
      Please use only reduce method, and only one time, and return 2 variables:
      totalOfMoney = 1870000, totalOfAmount = 14;
    </>
  );

  const codes = `
  const result = (array) => {
    const initial = {
      totalOfMoney: 0,
      totalOfAmount: 0,
    };
    const res = array?.reduce((accumulator, current) => {
      return {
        totalOfMoney: accumulator.totalOfMoney + current.price * current.amount,
        totalOfAmount: accumulator.totalOfAmount + current.amount,
      };
    }, initial);
    return (
      "totalOfMoney: " +
      res.totalOfMoney +
      " ,totalOfAmount: " +
      res.totalOfAmount
    );
  };
  `;

  return (
    <AnswerSheet
      title={title}
      codes={<Code code={codes} language="javascript" />}
      // result={parseObjectJsx(order["cart"])}
      result={result(order.cart)}
      logResult={result(order.cart)}
    />
  );
}

export default Question9;
