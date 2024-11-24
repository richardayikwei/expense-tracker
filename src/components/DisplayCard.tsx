import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCediSign } from "@fortawesome/free-solid-svg-icons";
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { State } from "../type/typeInterface";

type TrackedProps = {
  tracked: State[];
  actions: ActionCreatorWithPayload<number, "expenditure/deleteExpenditure">;
  toggleLike: ActionCreatorWithPayload<number, "expenditure/toggleLike">;
  toggleHidden: ActionCreatorWithPayload<number, "expenditure/toggleHidden">;
};

const DisplayCard = ({
  tracked,
  actions,
  toggleLike,
  toggleHidden,
}: TrackedProps) => {
  const dispatch = useDispatch();
  const total = tracked.map((item) => item.amount).reduce((a, b) => a + b, 0);
  return (
    <div>
      <div className="border h-[40rem] w-[40rem] border-black mt-40 rounded-2xl bg-slate-300">
        <div className="justify-end flex mr-10">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="relative left-8 top-10 text-slate-300"
          />
          <input
            type="text"
            placeholder="search item"
            className="border border-black mt-6 rounded-2xl h-10 placeholder:text-center"
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
          {tracked.map((item, idx) => {
            let opacity, hideTitle, hideEyed, title;
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
                  type="button"
                  title={hideTitle}
                  onClick={() => dispatch(toggleHidden(idx))}
                >
                  <FontAwesomeIcon icon={hideEyed} />
                </button>
                <div className="col-span-2">{title}</div>

                <button
                  type="button"
                  title={likeTitle}
                  onClick={() => dispatch(toggleLike(idx))}
                >
                  <FontAwesomeIcon icon={likeHeart} />
                </button>

                <div className="col-span-2">{item.amount}</div>
                <div className="col-span-2">{item.date}</div>

                <button
                  className="w-5 h-5"
                  title="delete"
                  type="button"
                  onClick={() => dispatch(actions(idx))}
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
