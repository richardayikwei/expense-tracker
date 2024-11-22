import { useState } from "react";
import DisplayCard from "./components/DisplayCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="flex justify-center bg-blue-500">
        <h1 className="text-3xl p-6">Expense Tracker</h1>
      </header>
      <main>
        <div>
          <DisplayCard />
        </div>
      </main>
    </>
  );
}

export default App;
