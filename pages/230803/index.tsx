// localhost:3000/230803
import { useState } from "react";

import Btn from "@/components/btn";

export default function Test1() {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
    console.log(count);
  };
  const countDown = () => {
    setCount(count - 1);
    console.log(count);
  };
  return (
    <div className="p-24">
      <h1 className="text-7xl">useState 예제</h1>
      <span>카운터</span>
      <div>
        <span>숫자{count}</span>
        <div className="flex justify-between">
          <Btn color="blue" text="+" handleClick={countUp}></Btn>
          <Btn color="red" text="-" handleClick={countDown}></Btn>
          {/* <button
            onClick={countDown}
            className="py-2 px-4 bg-red-500 text-white rounded-lg">
            -
          </button> */}
        </div>
      </div>
    </div>
  );
}
