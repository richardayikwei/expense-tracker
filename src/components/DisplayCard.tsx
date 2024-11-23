import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCediSign } from "@fortawesome/free-solid-svg-icons";

const DisplayCard = () => {
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
            placeholder="search expense"
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
          <div className="md:grid md:grid-cols-9 mx-6">
            <div>
              <FontAwesomeIcon icon={faEye} />
            </div>
            <div className="col-span-2">
              curiiiii sfsdsfsd fsdfsdfs dfiiiiiii iiiiiiii iiiiiiiiiry
            </div>
            <div className="">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="col-span-2">curjjjjjjjj jjjjjjjjkkkkk jjjjr</div>
            <div className="col-span-2">12/12/2022</div>
            <div>
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
          <div className="md:grid md:grid-cols-9 mx-6">
            <div>
              <FontAwesomeIcon icon={faEye} />
            </div>
            <div className="col-span-2">
              curiiiii sfsdsfsd fsdfsdfs dfiiiiiii iiiiiiii iiiiiiiiiry
            </div>
            <div className="">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="col-span-2">curjjjjjjjj jjjjjjjjkkkkk jjjjr</div>
            <div className="col-span-2">12/12/2022</div>
            <div>
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
          <div className="md:grid md:grid-cols-9 mx-6">
            <div>
              <FontAwesomeIcon icon={faEye} />
            </div>
            <div className="col-span-2">
              curiiiii sfsdsfsd fsdfsdfs dfiiiiiii iiiiiiii iiiiiiiiiry
            </div>
            <div className="">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="col-span-2">curjjjjjjjj jjjjjjjjkkkkk jjjjr</div>
            <div className="col-span-2">12/12/2022</div>
            <div>
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
          <div className="md:grid md:grid-cols-9 mx-6">
            <div>
              <FontAwesomeIcon icon={faEye} />
            </div>
            <div className="col-span-2">
              curiiiii sfsdsfsd fsdfsdfs dfiiiiiii iiiiiiii iiiiiiiiiry
            </div>
            <div className="">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="col-span-2">curjjjjjjjj jjjjjjjjkkkkk jjjjr</div>
            <div className="col-span-2">12/12/2022</div>
            <div>
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
          <div className="md:grid md:grid-cols-9 mx-6">
            <div>
              <FontAwesomeIcon icon={faEye} />
            </div>
            <div className="col-span-2">
              curiiiii sfsdsfsd fsdfsdfs dfiiiiiii iiiiiiii iiiiiiiiiry
            </div>
            <div className="">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="col-span-2">curjjjjjjjj jjjjjjjjkkkkk jjjjr</div>
            <div className="col-span-2">12/12/2022</div>
            <div>
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
          <div className="md:grid md:grid-cols-9 mx-6">
            <div>
              <FontAwesomeIcon icon={faEye} />
            </div>
            <div className="col-span-2">
              curiiiii sfsdsfsd fsdfsdfs dfiiiiiii iiiiiiii iiiiiiiiiry
            </div>
            <div className="">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="col-span-2">curjjjjjjjj jjjjjjjjkkkkk jjjjr</div>
            <div className="col-span-2">12/12/2022</div>
            <div>
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
          <div className="md:grid md:grid-cols-9 mx-6">
            <div>
              <FontAwesomeIcon icon={faEye} />
            </div>
            <div className="col-span-2">
              curiiiii sfsdsfsd fsdfsdfs dfiiiiiii iiiiiiii iiiiiiiiiry
            </div>
            <div className="">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="col-span-2">curjjjjjjjj jjjjjjjjkkkkk jjjjr</div>
            <div className="col-span-2">12/12/2022</div>
            <div>
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
        </div>

        <div className="md:grid md:grid-cols-9 mx-6 bottom-20 left-32">
          <div></div>
          <div>Total</div>
          <div></div>
          <div></div>
          <div>80</div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
