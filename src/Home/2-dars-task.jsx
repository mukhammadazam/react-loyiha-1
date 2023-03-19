import { useState } from "react";
const MyFun = () => {
  const [number, setNumber] = useState(0);
  const hund = () => {
    return setNumber(number + 1);
  };
  const hund1 = () => {
    return setNumber(number - 1);
  };
  return (
    <div>
      <h1>son{number}</h1>
      <button onClick={hund}>plus</button>
      <button onClick={hund1}>minus</button>
    </div>
  );
};

export default MyFun;



