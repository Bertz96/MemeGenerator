import { useState, useEffect } from "react";

export default function Meme() {
  const [allMemes, setAllMemes] = useState([]);
  const [meme, setMeme] = useState({
    id: "181913649",
    name: "Drake Hotline Bling",
    url: "https://i.imgflip.com/30b1gx.jpg",
    width: 1200,
    height: 1200,
    box_count: 2,
    captions: 1182000,
  });
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [random, setRandom] = useState(0);

  function handleMeme() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    setRandom(randomNumber);
    setMeme(allMemes[randomNumber]);
    console.log(random);
  }

  useEffect(() => {
    async function getMemes() {
      const data = await fetch("https://api.imgflip.com/get_memes");
      const result = await data.json();
      await setAllMemes(result.data.memes);
    }
    getMemes();
  }, []);

  return (
    <main className="p-9">
      <div className=" grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="Top Text">Top Text</label>
          <input
            type="text"
            placeholder="Shut up"
            id="Top Text"
            className=" h-10  w-full rounded-md border border-gray-300 indent-2 "
            onChange={(e) => setTopText(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="Bottom Text">Bottom Text</label>
          <input
            type="text"
            placeholder="And take my money"
            id="Bottom Text"
            className="h-10  w-full rounded-md border  border-gray-300 indent-2"
            onChange={(e) => setBottomText(e.target.value)}
          />
        </div>

        <div className=" relative col-span-full shrink  flex flex-col text-6xl font-semibold text-white">
          <h2 className=" absolute top-0 max-h-28  text-pretty self-center px-3 py-2 text-center">
            {topText}
          </h2>
          <img
            src={meme.url}
            alt="foto meme"
            className=" size-fit rounded-md  object-scale-down"
          />
          <h2 className=" absolute bottom-0 max-h-36 text-pretty self-center px-4 py-2 text-center">
            {bottomText}
          </h2>
        </div>

        <button
          className=" col-span-full bg-gradient-to-r from-[#672280] to-[#A626D3] text-white "
          onClick={handleMeme}
        >
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  );
}