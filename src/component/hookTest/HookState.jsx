import { useEffect, useState } from "react";

const HookTest = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
      alert(counter);
    };
  }, [counter]);
  return (
    <div>
      <p>{counter}</p>
    </div>
  );
};

export default HookTest;
