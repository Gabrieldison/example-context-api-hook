import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import React from "react";

export default function DoubleCounter() {
  const { doubleCounter } = useContext(CounterContext);

  return (
    <div>
      <h1>dobro do counter {doubleCounter}</h1>
    </div>
  );
}
