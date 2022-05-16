import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useSearchParams } from "react-router-dom";
// components
import Header from "../components/header";
import Nav from "../components/nav";
// import Nodata from "../components/noData";
// api
import apiCaller from "../utils/apiCaller";
import config from "../utils/config";

// import ArrowDownSvg from "../assets/images/arrow-down.svg";
const initContent = {
  user: "6270a5ff4de271a2efed3645",
  content: "",
  image: "",
  inputImg: "",
};

const NewPost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState(initContent);
  const [errMsg, setErrMsg] = useState(false);

  const handleImgUpload = () => {
    const updateImg = post?.inputImg || "";
    if (updateImg !== "" && updateImg.startsWith("https://")) {
      setPost({ ...post, image: updateImg });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post?.content === "") {
      setErrMsg(true);
      return;
    }

    const apiBody = {
      user: post.user,
      content: post.content,
      image: post.image,
    };
    apiCaller
      .post(true, config.post_url, apiBody)
      .then((res) => navigate("/post"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto  py-4 md:py-12">
        <div className="relative flex justify-between gap-0 flex-col md:flex-row md:gap-7 md:items-start">
          {/* left side */}
          <div className="basis-4/6 ">
            {/* title */}
            <div className="relative mb-4 isolate after:absolute after:right-1 after:top-1 after:h-full after:w-full after:border-2 after:border-black after:bg-white after:-z-10 after:content-['']">
              <h2 className=" text-xl font-bold text-center bg-white border-2 border-solid border-black py-4">
                張貼動態
              </h2>
            </div>
            {/* content */}
            <div className="bg-white border-2 border-solid border-black rounded-lg p-8">
              <form onSubmit={handleSubmit}>
                <p className=" font-semibold pb-1">貼文內容</p>
                <textarea
                  placeholder="輸入您的貼文內容"
                  className="w-full border-2 border-solid border-black py-3 px-4 resize-none mb-4 font-medium"
                  rows="5"
                  value={post.content}
                  onChange={(e) =>
                    setPost({ ...post, content: e.target.value })
                  }
                ></textarea>
                <div className="flex justify-between mb-2">
                  <input
                    type="text"
                    name="image_url"
                    id=""
                    className="w-full border-2 border-solid border-black py-1 px-2 "
                    placeholder="請貼連結"
                    value={post.inputImg}
                    onChange={(e) =>
                      setPost({ ...post, inputImg: e.target.value })
                    }
                  />
                </div>
                <button
                  type="button"
                  className=" mb-4 block bg-black text-white py-1 px-8 rounded"
                  onClick={handleImgUpload}
                >
                  上傳圖片
                </button>

                {post?.image !== "" && (
                  <div className=" mb-8 border-2 border-solid border-black rounded-lg">
                    <img
                      src={post?.image}
                      alt=""
                      className=" object-cover w-full h-40 object-center"
                    />
                  </div>
                )}
                {errMsg && (
                  <div className=" mb-4 text-center text-light-red font-bold">
                    請填寫貼文內容
                  </div>
                )}
                <div className="w-full">
                  <button
                    type="submit"
                    className=" w-full block border-2 border-solid border-black bg-[#A8B0B9] text-center text-black py-4 rounded mx-auto font-semibold hover:bg-dark-yellow hover:drop-shadow-left"
                  >
                    送出貼文
                  </button>
                </div>
              </form>
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

export default NewPost;
