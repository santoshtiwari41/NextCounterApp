'use client'
import { decrement, increment, incrementByAmount,reset } from '@/redux/counterSlice';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store'
const Counter = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch<AppDispatch>();
  const counter = useSelector((state: RootState) => state.counter);
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Counter App</h1>
        <p className="text-4xl mb-4">{counter.value}</p>
        <div className="space-x-4">
          <button
            onClick={() => dispatch(increment())}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(incrementByAmount(5))}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            increment by 5
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
