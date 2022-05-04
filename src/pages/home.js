import bgSvg from "../assets/images/bg.svg";
const Home = () => {
  return (
    <div>
      <header className="px-60 flex justify-between border-b-2 border-solid border-black">
        <div className=" text-2xl font-bold py-3">MetaWall</div>
      </header>
      <div
        style={{ backgroundImage: `url(${bgSvg})` }}
        className="container mx-auto h-screen"
      >
        <h1 className="text-3xl font-bold underline text-blue-500">
          Hello world!
        </h1>
      </div>
    </div>
  );
};

export default Home;
