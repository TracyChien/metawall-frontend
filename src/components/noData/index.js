const Nodata = () => {
  return (
    <div className="mt-4 bg-white border-2 border-solid border-black rounded-lg drop-shadow-bottom">
      <div className="flex py-5 px-4 border-b-2 border-black border-solid">
        <div className=" bg-danger-red rounded-full border-[1px] border-gray-700 w-[9px] h-[9px]"></div>
        <div className=" bg-light-yellow rounded-full border-[1px] border-gray-700 w-[9px] h-[9px] ml-[6px]"></div>
        <div className=" bg-light-green rounded-full border-[1px] border-gray-700 w-[9px] h-[9px] ml-[6px]"></div>
      </div>
      <div className="flex justify-center py-8">
        <p className="text-gray-500">目前尚無動態，新增一則貼文吧！</p>
      </div>
    </div>
  );
};

export default Nodata;
