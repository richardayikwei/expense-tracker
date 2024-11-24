import { useState } from "react";
import DisplayCard from "../components/DisplayCard";
import InputCard from "../components/InputCard";
import { useSelector } from "react-redux";
import { selectExpenditure } from "../features/expense/expenditureSlice";
import {
  deleteExpenditure,
  toggleHidden,
  toggleLike,
} from "../features/expense/expenditureSlice";

function App() {
  const [count, setCount] = useState(0);
  const expenditure = useSelector(selectExpenditure);

  return (
    <>
      <header className="flex justify-center bg-blue-500">
        <h1 className="text-3xl p-6">Expense Tracker</h1>
      </header>
      <main>
        <div className="flex max-w-[72rem] justify-between mx-auto">
          <DisplayCard
            tracked={expenditure}
            actions={deleteExpenditure}
            toggleLike={toggleLike}
            toggleHidden={toggleHidden}
          />
          <InputCard />
        </div>
      </main>
    </>
  );
}

export default App;
