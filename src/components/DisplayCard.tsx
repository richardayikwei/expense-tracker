import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const DisplayCard = () => {
  return (
    <div>
      <div className="border h-[40rem] border-black w-1/2 mt-40">
        <div className="justify-end">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="relative left-8"
          />
          <input
            type="text"
            placeholder="search expense"
            className="border border-black mt-6 rounded-xl h-10 placeholder:text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
