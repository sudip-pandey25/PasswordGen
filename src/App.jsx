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
      <div className="mx-auto text-3xl text-center my-[20%] ">
        <h1>Password Generator</h1>
      </div>
    </>
  );
}

export default App;
