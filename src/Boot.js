import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

// const App = (props) => {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     console.log("hello", counter);

//     setCounter(1);
//   }, [props.visible]);
//   return <div>{counter}</div>;
// };\
const fetchData = () =>
  new Promise((r) => setTimeout(() => r(Date.now(), 100)));
const App = (props) => {
  const [result, setResult] = useState();
  const data = fetchData().then((val) => {
    console.log(result);
    setResult(val);
  });
  return (
    <div>
      {result === data.toString() ? <div>Hello</div> : <div>goodbye</div>}
    </div>
  );
};
export default App;
