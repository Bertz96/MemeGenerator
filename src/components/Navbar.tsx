import trollFaceImg from "../assets/images/troll-face.png";

export default function Navbar() {
  return (
    <div className=" flex justify-between items-center text-white px-7 h-[65px] bg-gradient-to-r from-[#672280] to-[#A626D3] ">
      <div className="flex">
        <img
          src={trollFaceImg}
          alt="carita de trollFace"
          className=" h-[26.22px] mr-2 "
        />
        <h2 className=" text-xl font-semibold">Meme Generator</h2>
      </div>
      <div>
        <h4 className=" text-sm  font-medium">React Course - Project 3</h4>
      </div>
    </div>
  );
}
