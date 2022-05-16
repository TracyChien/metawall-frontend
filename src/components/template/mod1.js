import loginImg from "../../assets/images/loginImg.svg";
const Mod1 = ({ subTitle, children }) => {
  return (
    <div className=" h-screen flex justify-center items-center">
      <div className="flex justify-between gap-12 py-24 px-12 bg-light-brown border-2 border-solid border-black drop-shadow-left-o">
        <img alt="pic" src={loginImg} />
        <div className="flex flex-col items-center">
          <h1 className=" text-dark-blue text-6xl font-bold mb-2">MetaWall</h1>
          <h2 className=" text-2xl mb-9">{subTitle}</h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Mod1;
