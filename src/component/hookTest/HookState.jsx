import { useEffect, useState } from "react";

const HookTest = () => {
  const [counter, setCounter] = useState({ num: 0 });
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => {
        const v = prev.num + 1;
        return { num: v };
      });
    }, 1000);
    return () => {
      clearInterval(timer);
      alert(counter.num);
    };
  }, []);
  return (
    <div>
      <p>{counter.num}</p>
    </div>
  );
};

export default HookTest;
