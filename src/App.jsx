import TotalDisplay from "./components/TotalDisplay.jsx";
import CalcButton from "./components/CalcButton.jsx";
import { useReducer } from "react";
import { reducer, initialState } from "./store/reducers.jsx";
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  result,
  memory_add,
  memory_recall,
  memory_clear,
} from "./store/actions.jsx";



function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleEvent = (number) => dispatch(applyNumber(number))
  const handleChange = (op) => dispatch(changeOperation(op))



  return (
    <div>
      <nav className="text-center py-6 px-4 bg-stone-800 text-white text-xl/none">
        Reducer Challenge
      </nav>

      <div className="mt-12 mx-auto w-75">
        <form name="Cal">
          <TotalDisplay value={state.total} />
          <div className="flex justify-between bg-black text-white text-sm px-3 py-2">
            <span id="operation">
              <b>Operation:</b> {state.operation}
            </span>
            <span id="memory">
              <b>Memory:</b> {state.memory}
            </span>
          </div>
          <div className="flex">
            <CalcButton value={"M+"} onClick={() => dispatch(memory_add())} />
            <CalcButton value={"MR"} onClick={() => dispatch(memory_recall())} />
            <CalcButton value={"MC"} onClick={() => dispatch(memory_clear())} />
          </div>
          <div className="flex">
            <CalcButton value={1} onClick={() => handleEvent(1)} />
            <CalcButton value={2} onClick={() => handleEvent(2)} />
            <CalcButton value={3} onClick={() => handleEvent(3)} />
          </div>

          <div className="flex">
            <CalcButton value={4} onClick={() => handleEvent(4)} />
            <CalcButton value={5} onClick={() => handleEvent(5)} />
            <CalcButton value={6} onClick={() => handleEvent(6)} />
          </div>

          <div className="flex">
            <CalcButton value={7} onClick={() => handleEvent(7)} />
            <CalcButton value={8} onClick={() => handleEvent(8)} />
            <CalcButton value={9} onClick={() => handleEvent(9)} />
          </div>
          <div className="flex">
            <CalcButton value={"+"} onClick={() => handleChange("+")} />
            <CalcButton value={0} onClick={() => handleEvent(0)} />
            <CalcButton value={"-"} onClick={() => handleChange("-")} />
          </div>
          <div className="flex">
            <CalcButton value={"*"} onClick={() => handleChange("*")} />
            <CalcButton value={"/"} onClick={() => handleChange("/")} />
            <CalcButton value={"CE"} onClick={() => dispatch(clearDisplay())} />
          </div>

          <div className="flex">
            <CalcButton value={"="} onClick={() => dispatch(result())} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
