import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const InputCard = () => {
  return (
    <div className="w-[30rem] bg-orage-400 mt-32">
      <div className="text-xl flex justify-center">
        <h2>Add Expense</h2>
      </div>
      <div className="flex justify-between mt-7">
        <input
          placeholder="expense"
          type="text"
          className="border border-black rounded-2xl h-10 placeholder:text-center"
        />
        <input
          placeholder="amount"
          type="text"
          className="border border-black rounded-2xl h-10 w-24 placeholder:text-center"
        />
        <input
          title="date"
          type="date"
          className="border border-black rounded-2xl h-10 w-32"
        />
        <button
          type="button"
          title="add"
          className=" bg-white h-10 w-10 rounded-xl border-2 border-black"
        >
          <FontAwesomeIcon icon={faPlus} className=" text-2xl" />
        </button>
      </div>
      <div className="text-xl flex justify-center mt-12">
        <h2>Add Revenue</h2>
      </div>
      <div className="flex justify-between mt-7">
        <input
          placeholder="revenue"
          type="text"
          className="border border-black rounded-2xl h-10 placeholder:text-center"
        />
        <input
          placeholder="amount"
          type="text"
          className="border border-black rounded-2xl h-10 w-24 placeholder:text-center"
        />
        <input
          title="date"
          type="date"
          className="border border-black rounded-2xl h-10 w-32"
        />
        <button
          type="button"
          title="add"
          className=" bg-white h-10 w-10 rounded-xl border-2 border-black"
        >
          <FontAwesomeIcon icon={faPlus} className=" text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default InputCard;
