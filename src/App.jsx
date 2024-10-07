import "./App.css";
import { forwardRef, useRef } from "react";

function App() {
  return (
      <Form />
    <>
    </>
  );
}

function Form() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.focus();
  };

  return (
    <form>
      <Input ref={ref} />
      <button onClick={handleClick}>
        Focus
      </button>
    </form>
  );
}

const Input = function _Input(props, ref) {
  return <input {...props} ref={ref} />;
};

export default App;
