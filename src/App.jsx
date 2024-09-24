import React, {useEffect,useState,useRef} from "react";
function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(1);
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        ref={inputElement}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      
      <button onClick={focusInput}>Focus Input</button>
      <h2>name is {inputValue}</h2>
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

export default App
