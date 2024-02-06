import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import "./Counter.css";
import {
  decrement,
  increment,
  reset,
  //   incrementByAmount,
  incrementByAsync,
} from "../../app/counter/counterSlice";

const Counter = () => {
  // Get the count
  const count = useSelector((state: RootState) => state.counter.value);
  // AppDispatch is needed if you are working with asynchronous actions
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="container">
      <h2>My Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment </button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      {/* <button onClick={() => dispatch(incrementByAmount(10))}>By Amount</button> */}
      <button onClick={() => dispatch(incrementByAsync(10))}>
        Async Amount
      </button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
