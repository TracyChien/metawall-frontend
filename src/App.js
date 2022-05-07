import { Routes, Route } from "react-router-dom";
import bgSvg from "./assets/images/bg.svg";

import Home from "./pages/home";
import NewPost from "./pages/newPost";

function App() {
  return (
    <div
      style={{ backgroundImage: `url(${bgSvg})` }}
      className=" bg-repeat bg-contain h-full min-h-screen"
    >
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/new_post" element={<NewPost />} />
      </Routes>
    </div>
  );
}

export default App;
