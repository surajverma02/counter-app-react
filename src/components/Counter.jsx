import { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(1);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div className="h-screen w-full bg-slate-500 flex flex-col items-center justify-center gap-8 ">
        <h1 className="text-sky-950 font-extrabold text-4xl" >Counter App</h1>
        <div className="bg-sky-950 h-44 w-44 rounded-full flex items-center justify-center text-6xl shadow-2xl text-slate-200">{counter}</div>
        <button className="bg-slate-300 font-bold text-sky-950 px-10 py-3 rounded-3xl" onClick={addValue}>Add Value</button>
        <button className="bg-slate-300 font-bold text-sky-950 px-10 py-3 rounded-3xl" onClick={removeValue}>Remove Value</button>
      </div>
    </>
  );
}

export default Counter;
