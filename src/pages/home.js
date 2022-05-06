import React, { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// components
import Header from "../components/header";
import Nodata from "../components/noData";
// api
import apiCaller from "../utils/apiCaller";

import bgSvg from "../assets/images/bg.svg";
import ArrowDownSvg from "../assets/images/arrow-down.svg";
import userBigImg from "../assets/images/user@2x.png";
import BellIcon from "../assets/icon/BellIcon";
import ThumbIcon from "../assets/icon/ThumbIcon";

const Home = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [postList, setPostList] = useState([]);
  // let query = searchParams.get("q");

  const DropDown = () => {
    const [dropdownShow, setDropdownShow] = useState(false);
    return (
      <div className="basis-1/4 relative">
        <button
          id="dropdownDefault"
          className="w-full text-black bg-white font-medium px-4 py-2 text-center inline-flex justify-between items-center border-2 border-solid border-black"
          type="button"
          onClick={() => setDropdownShow(!dropdownShow)}
        >
          最新貼文{" "}
          <img alt="arrow_down" src={ArrowDownSvg} className="w-4 h-4 ml-2" />
        </button>
        <div
          id="dropdown"
          className={`z-10 absolute mt-1 border-2 border-solid border-black bg-white w-44 ${
            dropdownShow ? "block" : "hidden"
          }`}
        >
          <ul className="text-sm text-gray-700 divide-y-2 divide-solid  divide-black">
            <li>
              <a
                href="/#"
                className="block px-4 py-2 hover:bg-light-brown "
                onClick={() => setDropdownShow(!dropdownShow)}
              >
                最新貼文
              </a>
            </li>
            <li>
              <a
                href="/#"
                className="block px-4 py-2 hover:bg-light-brown"
                onClick={() => setDropdownShow(!dropdownShow)}
              >
                最新留言
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const PostItem = ({ post }) => {
    return (
      <div className="mt-4 bg-white border-2 border-solid border-black rounded-lg p-6 drop-shadow-bottom">
        <div className="flex items-center">
          <img
            alt="user"
            src={post?.user?.photo}
            className="border-2 border-solid border-black rounded-full w-[45px] h-[45px] object-cover object-center"
          />
          <div className="flex flex-col ml-4">
            <a
              href="/#"
              className=" block font-bold hover:text-dark-blue bottom-0 hover:border-b-2 border-dark-blue border-solid"
            >
              {post?.user?.name}
            </a>
            <span className=" text-gray-500 text-xs">{post?.createdAt}</span>
          </div>
        </div>
        <p className="mt-4 ">{post?.content}</p>
        <div className="mt-4 border-2 border-solid border-black rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1235&q=80"
            alt=""
            className=" object-cover w-full h-40 object-center"
          />
        </div>
      </div>
    );
  };

  useEffect(() => {
    apiCaller
      .get("http://localhost:3000/posts")
      .then((res) => setPostList(res.data));
  }, []);

  return (
    <div>
      <Header />
      <div
        style={{ backgroundImage: `url(${bgSvg})` }}
        className=" bg-repeat bg-contain h-screen"
      >
        <div className="container mx-auto py-12">
          <div className="flex justify-between items-start gap-7">
            {/* left side */}
            <div className="basis-4/6 ">
              <div className="flex justify-between gap-3">
                <DropDown />
                <div className="basis-3/4 flex w-full">
                  <input
                    type="text"
                    placeholder="搜尋貼文"
                    className="w-full pl-2 py-2 border-y-2 border-l-2 border-solid border-black"
                  />
                  <button type="button">
                    <svg
                      className="h-full w-full p-1  text-white bg-dark-blue border-2 border-black border-solid hover:bg-dark-yellow"
                      width="24"
                      height="24"
                      viewBox="-2 -2 30 30"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <circle cx="11" cy="11" r="8" />{" "}
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                {postList.length === 0 && <Nodata />}

                {postList.length > 0 &&
                  postList.map((v, i) => <PostItem key={i} post={v} />)}
              </div>
            </div>
            {/* right side */}
            <div className="basis-2/6">
              <div className="bg-white border-2 border-solid border-black px-6 py-8">
                <button className="w-full bg-dark-blue text-white py-4 border-2 border-solid border-black rounded-lg drop-shadow-left hover:bg-dark-yellow">
                  張貼動態
                </button>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
