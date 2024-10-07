// 64. Effect looping with useEffect
import * as React from "react";

export function MyComponent() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount((prevCount) => prevCount + 1);
  }, [count]);

  return <div>{count}</div>;
}
