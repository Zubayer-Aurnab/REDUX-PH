import { useDispatch, useSelector } from "react-redux";
import { decrement, increment,incrementByValue } from "../redux/features/counter/counterSlice";


const Counter = () => {
    const { count } = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    return (
        <div>
            <button className="p-4 bg-black text-white rounded-full" onClick={() => dispatch(increment())}>increment</button>
            <button className="p-4 bg-black text-white rounded-full" onClick={() => dispatch(incrementByValue(5))}>increment By 5</button>
            <div>
                <h1 className="text-3xl py-4">{count}</h1>
            </div>
            <button className="p-4 bg-black text-white rounded-full" onClick={() => dispatch(decrement())}>decrement</button>
        </div>
    );
};

export default Counter;