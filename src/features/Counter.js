import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

function Counter() {
  const num = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1>Counter Redux App</h1>
      </div>
      <div>{num}</div>
      <br />
      <div>
        <button className="btn" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className="btn" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button className="btn" onClick={() => dispatch(incrementByAmount(10))}>
          Increment by 10
        </button>
      </div>
    </>
  );
}

export default Counter;
