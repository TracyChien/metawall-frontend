import bgSvg from "../assets/images/bg.svg";
const Home = () => {
  return (
    <div>
      <header className="border-b-2 border-solid border-black">
        <div className="container mx-auto  flex justify-between">
          <div className=" text-2xl font-bold py-3">MetaWall</div>
        </div>
      </header>
      <div
        style={{ backgroundImage: `url(${bgSvg})` }}
        className=" bg-repeat bg-contain h-screen"
      >
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold underline text-blue-500">
            Hello world!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
