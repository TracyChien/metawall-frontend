import { Link } from "react-router-dom";
import userBigImg from "../../assets/images/user@2x.png";
import BellIcon from "../../assets/icon/BellIcon";
import ThumbIcon from "../../assets/icon/ThumbIcon";

const Nav = () => {
  return (
    <div className="bg-white border-2 border-solid border-black px-6 py-8">
      <Link
        className=" block text-center w-full bg-dark-blue text-white py-4 border-2 border-solid border-black rounded-lg drop-shadow-left hover:bg-dark-yellow"
        to="/new_post"
      >
        張貼動態
      </Link>
      <ul className="mt-6 px-2">
        <li>
          <a href="/#" className="flex items-center group">
            <img alt="user" src={userBigImg} className="w-[50px]" />
            <p className="ml-4 font-bold group-hover:text-dark-blue">
              邊緣小杰
            </p>
          </a>
        </li>
        <li className=" mt-[22px]">
          <a href="/#" className="flex items-center group">
            <span className="w-[50px] h-[50px] bg-light-blue group-hover:bg-dark-blue border-2 border-solid border-black rounded-full flex justify-center items-center">
              <BellIcon customClass="h-7 w-7 text-black group-hover:text-white" />
            </span>
            <p className="ml-4 font-bold group-hover:text-dark-blue">
              追蹤名單
            </p>
          </a>
        </li>
        <li className=" mt-[22px]">
          <a href="/#" className="flex items-center group">
            <span className="w-[50px] h-[50px] bg-light-blue group-hover:bg-dark-blue border-2 border-solid border-black rounded-full flex justify-center items-center">
              <ThumbIcon customClass="h-6 w-6 text-black group-hover:text-white" />
            </span>
            <p className="ml-4 font-bold group-hover:text-dark-blue">
              我按讚的文章
            </p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
