import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Mod1 from "../components/template/mod1";

// api
import apiCaller from "../utils/apiCaller";
import config from "../utils/config";

const SignIn = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [errMsg, setErrMsg] = useState({
    text: "",
    status: false,
  });

  const handleChange = (e) => {
    const ele = e.target.name;
    const value = e.target.value;
    if (value !== "") {
      setErrMsg(false);
    }
    setUserInfo({ ...userInfo, [ele]: value });
  };
  const handleError = (str, status) => {
    setErrMsg({ text: str, status: status });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userInfo;
    if (email === "" || password === "") {
      handleError("請輸入帳號和密碼", true);
      return;
    }
    //API
    apiCaller
      .post(false, config.sign_in_url, userInfo)
      .then((res) => {
        // localStorage.setItem("name", res.user.name);
        localStorage.setItem("token", res.user.token);
        navigate("/post");
      })
      .catch(() => {
        handleError("帳號或密碼錯誤，請重新輸入！", true);
      });
  };
  return (
    <Mod1 subTitle="到元宇宙展開全新社交圈">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="block mb-4 w-full md:w-80 py-4 px-6 border-2 border-solid border-black"
          value={userInfo.email}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="block mb-8 w-full md:w-80 py-4 px-6 border-2 border-solid border-black"
          value={userInfo.password}
          onChange={(e) => handleChange(e)}
        />
        {errMsg.status && (
          <div className=" mb-4 text-center text-light-red font-bold">
            {errMsg.text}
          </div>
        )}
        <button
          type="submit"
          disabled={userInfo.email === "" || userInfo.password === ""}
          className="block mb-4 text-center w-full bg-dark-blue text-white py-4 border-2 border-solid border-black rounded-lg drop-shadow-left 
              hover:bg-dark-yellow 
              disabled:border-gray-500 disabled:bg-gray-400  disabled:drop-shadow-none"
        >
          登入
        </button>
      </form>
      <Link to="/sign_up">註冊帳號</Link>
    </Mod1>
  );
};

export default SignIn;
