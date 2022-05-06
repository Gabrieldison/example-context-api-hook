import React from "react";
import { CounterContext } from "../context/CounterContext";
import { useContext } from "react";

export default function HandleCounter() {
  const { counter, increaseCounter } = useContext(CounterContext);

  return (
    <div>
      <h1> Counter : {counter}</h1>
      <button onClick={increaseCounter}>aumentar counter</button>
    </div>
  );
}
