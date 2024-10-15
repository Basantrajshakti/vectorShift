import { useState, useEffect } from "react";
import { BaseNode } from "./BaseNode";

// MathNode.js
export const MathNode = ({ id, data }) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleAddition = () => {
    setResult(num1 + num2);
  };

  const content = (
    <div>
      <label>
        Num 1:
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(+e.target.value)}
        />
      </label>
      <label>
        Num 2:
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(+e.target.value)}
        />
      </label>
      <button onClick={handleAddition}>Add</button>
      <div>Result: {result}</div>
    </div>
  );

  return (
    <BaseNode
      id={id}
      label="Math (Add 2 nums)"
      data={data}
      inputs={[]}
      outputs={[{ id: "result" }]}
      content={content}
    />
  );
};

// ConditionalNode.js
export const ConditionalNode = ({ id, data }) => {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [result, setResult] = useState("");

  const handleCondition = () => {
    setResult(input1 === input2 ? "True" : "False");
  };

  const content = (
    <div>
      <label>
        Input 1:
        <input
          type="number"
          value={input1}
          onChange={(e) => setInput1(+e.target.value)}
        />
      </label>
      <label>
        Input 2:
        <input
          type="number"
          value={input2}
          onChange={(e) => setInput2(+e.target.value)}
        />
      </label>
      <button onClick={handleCondition}>Check Condition</button>
      <div>Result: {result}</div>
    </div>
  );

  return (
    <BaseNode
      id={id}
      label="Conditional (Equality check)"
      data={data}
      inputs={[{ id: "input1" }, { id: "input2" }]}
      outputs={[{ id: "result" }]}
      content={content}
    />
  );
};

// TimerNode.js
export const TimerNode = ({ id, data }) => {
  const [time, setTime] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setTimeout(() => setTime(time - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [isRunning, time]);

  const handleStart = () => setIsRunning(true);
  const handleReset = () => {
    setTime(10);
    setIsRunning(false);
  };

  const content = (
    <div>
      <div>Time: {time}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );

  return (
    <BaseNode
      id={id}
      label="Timer"
      data={data}
      inputs={[]}
      outputs={[{ id: "time" }]}
      content={content}
    />
  );
};

// LoggerNode.js
export const LoggerNode = ({ id, data }) => {
  const [input, setInput] = useState(0);

  const submitHandler = () => {
    alert(input);
  };

  const content = (
    <div>
      <form action="#" onSubmit={submitHandler}>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(+e.target.value)}
        />
        <button type="submit" >Alert Data</button>
      </form>
    </div>
  );

  return (
    <BaseNode
      id={id}
      label="Logger"
      data={data}
      inputs={[{ id: "input" }]}
      outputs={[]}
      content={content}
    />
  );
};

// ImageDisplayNode.js
export const ImageDisplayNode = ({ id, data }) => {
  const [imageUrl, setImageUrl] = useState(data?.imageUrl || "");

  const handleImageChange = (e) => {
    setImageUrl(e.target.value);
  };

  const content = (
    <div>
      <label>
        Image URL:
        <input type="text" value={imageUrl} onChange={handleImageChange} />
      </label>
      {imageUrl && (
        <img src={imageUrl} alt="Node Image" style={{ width: "100%" }} />
      )}
    </div>
  );

  return (
    <BaseNode
      id={id}
      label="Image Display"
      data={data}
      inputs={[]}
      outputs={[{ id: "image" }]}
      content={content}
    />
  );
};
