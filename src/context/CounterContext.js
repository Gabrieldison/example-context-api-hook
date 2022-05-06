import { createContext, useCallback, useEffect, useState } from "react";

export const CounterContext = createContext();

export function CounterContextProvider({ children }) {
  const [counter, setCounter] = useState(0);
  const [doubleCounter, setDoubleCounter] = useState(0);

  useEffect(() => {
    setDoubleCounter(counter * 2);
  }, [counter]);

  const increaseCounter = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  return (
    <CounterContext.Provider
      value={{ counter, setCounter, doubleCounter, increaseCounter }}
    >
      {children}
    </CounterContext.Provider>
  );
}
