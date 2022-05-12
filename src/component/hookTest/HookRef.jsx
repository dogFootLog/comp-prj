import { useState, useEffect, useRef, useLayoutEffect } from "react";

const HookTest = () => {
  const [counter, setCounter] = useState(0);
  const value = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => prev + 1);
      value.current += 1;
    }, 1000);
    return () => {
      clearInterval(timer);
      alert(value.current);
    };
  }, []);
  return (
    <div>
      <p>{counter}</p>
    </div>
  );
};

const Score = () => {
  const [score, setScore] = useState(40);
  const prevScore = useRef(40);

  const comment = prevScore.current === score ? "그대로네요" : "바뀌었네요";

  useEffect(() => {
    console.log(
      "scoreEffect --- prevScore:",
      prevScore.current,
      " & score:",
      score,
      comment
    );
    prevScore.current = score;
    console.log(
      "scoreEffect2 --- prevScore:",
      prevScore.current,
      " & score:",
      score,
      comment
    );
  }, [score]);

  useLayoutEffect(() => {
    console.log(
      "commentLayoutEffect --- prevScore:",
      prevScore.current,
      " & score:",
      score,
      comment
    );
  }, [comment]);

  useEffect(() => {
    console.log(
      "commentEffect --- prevScore:",
      prevScore.current,
      " & score:",
      score,
      comment
    );
  }, [comment]);

  return (
    <>
      <button type="button" onClick={() => setScore((prev) => prev + 20)}>
        시험보기
      </button>
      <span>{`성적이 ${comment}!`}</span>
      <br />
      <button
        type="button"
        onClick={() => console.log(prevScore.current === score)}
      >
        console
      </button>
    </>
  );
};

export default Score;
