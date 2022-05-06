import DoubleCounter from "./components/DoubleCounter";
import HandleCounter from "./components/HandleCounter";
import { CounterContextProvider } from "./context/CounterContext";

function App() {
  return (
    <CounterContextProvider>
      <div className="App">
        <HandleCounter />
        <DoubleCounter />
      </div>
    </CounterContextProvider>
  );
}

export default App;
