import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Mod1 from "../components/template/mod1";
import validator from "validator";
import apiCaller from "../utils/apiCaller";
import config from "../utils/config";

const SignUp = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errInfo, setErrInfo] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleChange = (e) => {
    const { name: targetName, value: targetValue } = e.target;
    setUserInfo({ ...userInfo, [targetName]: targetValue });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = userInfo;
    if (
      validator.isEmpty(name) ||
      validator.isEmpty(email) ||
      validator.isEmpty(password) ||
      validator.isEmpty(confirmPassword)
    ) {
      return;
    }

    if (!validator.isLength(name, { min: 2 })) {
      setErrInfo((prevState) => ({ ...prevState, name: true }));
      return;
    } else {
      setErrInfo((prevState) => ({ ...prevState, name: false }));
    }
    if (!validator.isEmail(email)) {
      setErrInfo((prevState) => ({ ...prevState, email: true }));
      return;
    } else {
      setErrInfo((prevState) => ({ ...prevState, email: false }));
    }
    if (!validator.isAlphanumeric(password)) {
      setErrInfo((prevState) => ({ ...prevState, password: true }));
      return;
    } else {
      setErrInfo((prevState) => ({ ...prevState, password: false }));
    }
    if (!validator.isLength(password, { min: 8 })) {
      setErrInfo((prevState) => ({ ...prevState, password: true }));
      return;
    } else {
      setErrInfo((prevState) => ({ ...prevState, password: false }));
    }
    if (password !== confirmPassword) {
      setErrInfo((prevState) => ({ ...prevState, confirmPassword: true }));
      return;
    } else {
      setErrInfo((prevState) => ({ ...prevState, confirmPassword: false }));
    }
    // console.log(userInfo);
    apiCaller
      .post(false, config.sign_up_url, userInfo)
      .then((res) => {
        // localStorage.setItem("name", res.user.name);
        localStorage.setItem("token", res.user.token);
        navigate("/post");
      })
      .catch((err) => console.log(err));
  };
  return (
    <Mod1 subTitle="註冊">
      <form onSubmit={handleSubmit}>
        <div className=" mb-4">
          <input
            type="text"
            placeholder="暱稱"
            name="name"
            className="block w-full md:w-80 py-3 px-6 border-2 border-solid border-black"
            onChange={handleChange}
          />
          {errInfo.name && (
            <span className=" text-light-red ">暱稱至少 2 個字元以上</span>
          )}
        </div>
        <div className=" mb-4">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="block w-full md:w-80 py-3 px-6 border-2 border-solid border-black"
            onChange={handleChange}
          />
          {errInfo.email && (
            <span className=" text-light-red">
              帳號已被註冊，請替換新的 Email！
            </span>
          )}
        </div>
        <div className=" mb-4">
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="block w-full md:w-80 py-3 px-6 border-2 border-solid border-black"
            onChange={handleChange}
          />
          {errInfo.password && (
            <span className=" text-light-red">
              密碼需至少 8 碼以上，並英數混合
            </span>
          )}
        </div>
        <div className=" mb-4">
          <input
            type="password"
            placeholder="confirmPassword"
            name="confirmPassword"
            className="block w-full md:w-80 py-3 px-6 border-2 border-solid border-black"
            onChange={handleChange}
          />
          {errInfo.confirmPassword && (
            <span className=" text-light-red">密碼輸入不一致</span>
          )}
        </div>
        <button
          type="submit"
          disabled={
            userInfo.name === "" ||
            userInfo.email === "" ||
            userInfo.password === "" ||
            userInfo.confirmPassword === ""
          }
          className="block mb-4 text-center w-full bg-dark-blue text-white py-4 border-2 border-solid border-black rounded-lg drop-shadow-left 
              hover:bg-dark-yellow 
              disabled:border-gray-500 disabled:bg-gray-400  disabled:drop-shadow-none"
        >
          註冊
        </button>
      </form>
      <Link to="/">登入</Link>
    </Mod1>
  );
};

export default SignUp;
