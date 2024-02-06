import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import "./Counter.css";
import {
  decrement,
  increment,
  reset,
  incrementByAmount,
} from "../../app/counter/counterSlice";

const Counter = () => {
  // Get the count
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h2>My Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment </button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>By Amount</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
