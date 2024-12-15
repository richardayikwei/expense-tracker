import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { addRevenue } from "../features/revenue/revenueSlice";
import { addExpenditure } from "../features/expense/expenditureSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const InputCard = () => {
  const [exp, setExp] = useState("");
  const [expAmount, setExpAmount] = useState(0);
  const [expDate, setExpdate] = useState("");
  const [rev, setRev] = useState("");
  const [revAmount, setRevAmount] = useState(0);
  const [revDate, setRevdate] = useState("");

  const dispatch = useDispatch();

  function handleAddExp() {
    dispatch(
      addExpenditure({
        item: exp,
        amount: expAmount,
        date: expDate,
        liked: true,
        hidden: false,
      })
    );
    setExp("");
    setExpAmount(0);
    setExpdate("");
  }

  function handleAddRev() {
    dispatch(
      addRevenue({
        item: rev,
        amount: revAmount,
        date: revDate,
        liked: true,
        hidden: false,
      })
    );
    setRev("");
    setRevAmount(0);
    setRevdate("");
  }
  return (
    <div className="min-w-[30rem] mt-36">
      <div className="text-xl flex justify-center">
        <h2>Add Expense</h2>
      </div>
      <div className="flex justify-between mt-9">
        <input
          placeholder="expense"
          type="text"
          value={exp}
          className="border border-black rounded-2xl h-10 placeholder:text-center text-center"
          onChange={(e) => setExp(e.target.value)}
        />
        <input
          placeholder="amount"
          type="number"
          value={expAmount}
          className="border border-black rounded-2xl h-10 w-24 placeholder:text-center text-center"
          onChange={(e) => setExpAmount(Number(e.target.value))}
        />
        <input
          title="date"
          type="date"
          value={expDate}
          className="border border-black rounded-2xl h-10 w-32 text-center"
          onChange={(e) => setExpdate(e.target.value)}
        />
        <button
          type="button"
          title="add"
          className=" bg-white h-10 w-10 rounded-xl border-2 border-black"
          onClick={() => handleAddExp()}
        >
          <FontAwesomeIcon icon={faPlus} className=" text-2xl" />
        </button>
      </div>
      <div className="text-xl flex justify-center mt-12">
        <h2>Add Revenue</h2>
      </div>
      <div className="flex justify-between mt-9">
        <input
          placeholder="revenue"
          type="text"
          value={rev}
          className="border border-black rounded-2xl h-10 placeholder:text-center text-center"
          onChange={(e) => setRev(e.target.value)}
        />
        <input
          placeholder="amount"
          type="number"
          value={revAmount}
          className="border border-black rounded-2xl h-10 w-24 placeholder:text-center text-center"
          onChange={(e) => setRevAmount(Number(e.target.value))}
        />
        <input
          title="date"
          type="date"
          value={revDate}
          className="border border-black rounded-2xl h-10 w-32 text-center"
          onChange={(e) => setRevdate(e.target.value)}
        />
        <button
          type="button"
          title="add"
          className=" bg-white h-10 w-10 rounded-xl border-2 border-black"
          onClick={() => handleAddRev()}
        >
          <FontAwesomeIcon icon={faPlus} className=" text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default InputCard;
