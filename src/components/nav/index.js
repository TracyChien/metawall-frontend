import { Link } from "react-router-dom";
import userBigImg from "../../assets/images/user@2x.png";
import HomeIcon from "../../assets/icon/HomeIcon";
import BellIcon from "../../assets/icon/BellIcon";
import ThumbIcon from "../../assets/icon/ThumbIcon";
import PlusIcon from "../../assets/icon/PlusIcon";

const Nav = () => {
  return (
    <div className=" fixed inset-x-0 bottom-4 md:relative bg-light-brown md:bg-white border-2 border-solid border-black px-11 py-[6px] md:px-6 md:py-8 rounded-full md:rounded-none">
      <Link
        className=" hidden md:block text-center w-full bg-dark-blue text-white py-4 border-2 border-solid border-black rounded-lg drop-shadow-left hover:bg-dark-yellow"
        to="/new_post"
      >
        張貼動態
      </Link>
      <ul className="flex flex-row md:flex-col justify-between md:mt-6 md:px-2">
        <li className=" hidden md:block">
          <a href="/#" className="flex items-center group">
            <img alt="user" src={userBigImg} className="w-[50px]" />
            <p className="ml-4 font-bold group-hover:text-dark-blue">
              邊緣小杰
            </p>
          </a>
        </li>
        <li className="block md:hidden">
          <Link to="/" className="flex items-center group">
            <span className="w-[50px] h-[50px] bg-white md:bg-light-blue md:group-hover:bg-dark-blue border-2 border-solid border-black rounded-full flex justify-center items-center">
              <HomeIcon customClass="h-6 w-6 text-black md:group-hover:text-white" />
            </span>
          </Link>
        </li>
        <li className=" md:mt-[22px]">
          <a href="/#" className="flex items-center group">
            <span className="w-[50px] h-[50px] bg-white md:bg-light-blue md:group-hover:bg-dark-blue border-2 border-solid border-black rounded-full flex justify-center items-center">
              <BellIcon customClass="h-7 w-7 text-black md:group-hover:text-white" />
            </span>
            <p className="hidden md:block ml-4 font-bold group-hover:text-dark-blue">
              追蹤名單
            </p>
          </a>
        </li>
        <li className=" md:mt-[22px]">
          <a href="/#" className="flex items-center group">
            <span className="w-[50px] h-[50px] bg-white md:bg-light-blue md:group-hover:bg-dark-blue border-2 border-solid border-black rounded-full flex justify-center items-center">
              <ThumbIcon customClass="h-6 w-6 text-black md:group-hover:text-white" />
            </span>
            <p className="hidden md:block ml-4 font-bold group-hover:text-dark-blue">
              我按讚的文章
            </p>
          </a>
        </li>
        <li className="block md:hidden">
          <Link to="/new_post" className="flex items-center group">
            <span className="w-[50px] h-[50px] bg-dark-blue border-2 border-solid border-black rounded-full flex justify-center items-center">
              <PlusIcon customClass="h-7 w-7 text-white" />
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
