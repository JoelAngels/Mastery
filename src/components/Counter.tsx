import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import "./Counter.css";
import { decrement, increment } from "../../app/counter/counterSlice";

const Counter = () => {
  // Get the count
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h2>My Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment </button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
