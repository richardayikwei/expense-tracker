import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCediSign } from "@fortawesome/free-solid-svg-icons";
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  deleteRevenue,
  toggleHiddenRevenue,
  toggleLikeRevenue,
} from "../features/revenue/revenueSlice";
import {
  deleteExpenditure,
  toggleHiddenExpenditure,
  toggleLikeExpenditure,
} from "../features/expense/expenditureSlice";
import { useSelector } from "react-redux";
import { selectExpenditure } from "../features/expense/expenditureSlice";
import { selectRevenue } from "../features/revenue/revenueSlice";

const DisplayCard = () => {
  const dispatch = useDispatch();
  const expenditureState = useSelector(selectExpenditure);
  const revenueState = useSelector(selectRevenue);
  const [display, setDisplay] = useState("expense");
  const [search, setSearch] = useState("");

  let selected;

  display === "expense"
    ? (selected = expenditureState.filter((item) => {
        if (search.trim() !== "") {
          return item.item.includes(search);
        } else {
          return item;
        }
      }))
    : (selected = revenueState.filter((item) => {
        if (search.trim() !== "") {
          return item.item.includes(search);
        } else {
          return item;
        }
      }));

  const total = selected.map((item) => item.amount).reduce((a, b) => a + b, 0);

  function handleChange(view: string) {
    view === "expense" ? setDisplay("expense") : setDisplay("revenue");
    setSearch('')
  }

  return (
    <div>
      <div className="mt-32 min-w-[30rem] flex justify-end">
        <button
          onClick={() => handleChange("expense")}
          type="button"
          className="border active:opacity-0 w-28 border-black p-1 rounded-l-2xl"
        >
          Expense
        </button>
        <button
          onClick={() => handleChange("revenue")}
          type="button"
          className="border mr-10 w-28 active:opacity-0 border-black p-1 rounded-r-2xl"
        >
          Revenue
        </button>
      </div>
      <div className="border h-[40rem] min-w-[30rem] border-black mt-5 rounded-2xl bg-slate-300">
        <div className="justify-end flex mr-10">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="🔍search item"
            className="border border-black mt-6 rounded-2xl h-10 placeholder:text-center text-center"
          />
        </div>
        <div className="md:grid md:grid-cols-9 mx-6 p-6">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <FontAwesomeIcon icon={faCediSign} />
        </div>
        <div className="overflow-y-auto h-[28rem]">
          {selected.map((item, idx) => {
            let hideTitle, hideEyed, title;
            item.hidden === true
              ? ((hideTitle = "show"),
                (hideEyed = faEyeSlash),
                (title = "************"))
              : ((hideTitle = "hide"), (hideEyed = faEye), (title = item.item));

            let likeTitle, likeHeart;
            item.liked === true
              ? ((likeHeart = faHeart), (likeTitle = "Liked"))
              : ((likeHeart = faHeartCrack), (likeTitle = "UnLiked"));

            return (
              <div
                className="md:grid md:grid-cols-9 mx-6"
                key={item.item + idx}
              >
                <button
                  className="active:opacity-0"
                  type="button"
                  title={hideTitle}
                  onClick={() =>
                    dispatch(
                      display === "expense"
                        ? toggleHiddenExpenditure(idx)
                        : toggleHiddenRevenue(idx)
                    )
                  }
                >
                  <FontAwesomeIcon icon={hideEyed} />
                </button>
                <div className="col-span-2 text-wrap">{title}</div>
                <button
                  className="active:opacity-0"
                  type="button"
                  title={likeTitle}
                  onClick={() =>
                    dispatch(
                      display === "expense"
                        ? toggleLikeExpenditure(idx)
                        : toggleLikeRevenue(idx)
                    )
                  }
                >
                  <FontAwesomeIcon icon={likeHeart} />
                </button>

                <div className="col-span-2">{item.amount}</div>
                <div className="col-span-2">{item.date}</div>

                <button
                  className="w-6 h-6"
                  title="delete"
                  type="button"
                  onClick={() =>
                    dispatch(
                      display === "expense"
                        ? deleteExpenditure(idx)
                        : deleteRevenue(idx)
                    )
                  }
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
            );
          })}
        </div>

        <div className="md:grid md:grid-cols-9 mx-6 bottom-20 left-32">
          <div></div>
          <div>Total</div>
          <div></div>
          <div></div>
          <div>{total}</div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
