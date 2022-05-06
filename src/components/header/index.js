import userImg from "../../assets/images/user.png";
const Header = () => {
  return (
    <header className="border-b-2 border-solid border-black">
      <div className="container mx-auto  flex justify-between items-center">
        <h1 className=" text-2xl font-bold py-3">MetaWall</h1>
        <div className="flex items-center">
          <img alt="user" src={userImg} className="w-8 mr-2" />
          <p className="font-bold border-b-2 border-solid border-black px-1">
            Member
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
