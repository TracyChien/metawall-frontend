import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// components
import Header from "../components/header";
import Nav from "../components/nav";
import Nodata from "../components/noData";
// api
import apiCaller from "../utils/apiCaller";

import ArrowDownSvg from "../assets/images/arrow-down.svg";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    timeSort: "desc",
    q: "",
  });
  const [postList, setPostList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  let timeSort = searchParams.get("timeSort");

  const DropDown = () => {
    const [dropdownShow, setDropdownShow] = useState(false);

    const handleClick = (e) => {
      const sort = e.target.value;
      searchParams.set("timeSort", sort);
      setSearchParams(searchParams);
      // setSearchParams({ timeSort: sort });
      setDropdownShow(!dropdownShow);
    };
    return (
      <div className=" basis-2/6 relative">
        <button
          id="dropdownDefault"
          className="w-full text-black bg-white font-medium px-5 py-2 text-center inline-flex justify-between items-center border-2 border-solid border-black"
          type="button"
          onClick={() => setDropdownShow(!dropdownShow)}
        >
          {timeSort === "desc" ? "最新留言" : "從舊到新貼文"}
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
              <button
                type="button"
                className="px-4 py-2 w-full hover:bg-light-brown"
                value="desc"
                onClick={handleClick}
              >
                最新留言
              </button>
            </li>
            <li>
              <button
                type="button"
                className="w-full px-4 py-2 hover:bg-light-brown "
                value="asc"
                onClick={handleClick}
              >
                從舊到新貼文
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const PostItem = ({ post }) => {
    return (
      <div className="mt-4 bg-white border-2 border-solid border-black rounded-lg p-6 drop-shadow-bottom">
        <div className="flex items-center ">
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
        {post?.image !== "" && (
          <div className="mt-4 border-2 border-solid border-black rounded-lg">
            <img
              src={post?.image}
              alt=""
              className=" object-cover w-full h-40 object-center"
            />
          </div>
        )}
      </div>
    );
  };

  useEffect(() => {
    const timeSort =
      searchParams.get("timeSort") === null
        ? "desc"
        : searchParams.get("timeSort");
    const query = searchParams.get("q") === null ? "" : searchParams.get("q");
    apiCaller
      .get(`http://localhost:3000/posts?timeSort=${timeSort}&q=${query}`)
      .then((res) => setPostList(res.data))
      .catch((err) => console.log(err));
  }, [searchParams]);

  const handleSearch = () => {
    searchParams.set("q", searchKeyword);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto py-4 md:py-12">
        <div className="flex justify-between items-center gap-0 flex-col md:flex-row md:gap-7 md:items-start">
          {/* left side */}
          <div className="basis-4/6 ">
            <div className="flex justify-between flex-col md:flex-row md:gap-3">
              <DropDown />
              <div className=" mt-[6px] md:mt-0 basis-4/6 flex w-full">
                <input
                  type="text"
                  placeholder="搜尋貼文"
                  className="w-full pl-2 py-2 border-y-2 border-l-2 border-solid border-black"
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
                <button type="button" onClick={handleSearch}>
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
            <Nav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
