import { Routes, Route } from "react-router-dom";
import bgSvg from "./assets/images/bg.svg";

import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import PostWall from "./pages/postWall";
import NewPost from "./pages/newPost";

function App() {
  return (
    <div
      style={{ backgroundImage: `url(${bgSvg})` }}
      className=" bg-repeat bg-contain h-full min-h-screen"
    >
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/sign_up" element={<SignUp />} />
        <Route exact path="/post" element={<PostWall />} />
        <Route exact path="/new_post" element={<NewPost />} />
      </Routes>
    </div>
  );
}

export default App;
