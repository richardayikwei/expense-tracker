import { useState } from "react";
import DisplayCard from "../components/DisplayCard";
import InputCard from "../components/InputCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="flex justify-center bg-blue-500">
        <h1 className="text-3xl p-6">Expense Tracker</h1>
      </header>
      <main>
        <div className="flex max-w-[72rem] justify-between mx-auto">
          <DisplayCard />
          <InputCard />
        </div>
      </main>
    </>
  );
}

export default App;