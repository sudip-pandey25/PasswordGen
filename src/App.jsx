import { useCallback, useState } from "react";
import "./index.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGeneration = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= Array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass = str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      <div className="w-full max-w-md shadow-md rounded-lg mx-auto text-center my-[20%] px-4  bg-gray-700 py-4 ">
        <h1 className="text-green-400">Password Generator</h1>
        <div className="flex shadow-sm rounded-lg overflow-hidden mb-4 mt-2">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            onChange={(e) => setPassword(e.target.value)}
            readOnly
          />
          <button className="outline-none bg-green-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="text-white">Length:{length}</label>
          </div>
          <div className="flex text-sm gap-x-0.5">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label className="text-white">Numbers</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
