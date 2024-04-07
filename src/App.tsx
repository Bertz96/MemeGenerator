import "./App.css";
import Meme from "./components/Meme";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" w-[550px] border-2">
      <Navbar />
      <Meme />
    </div>
  );
}

export default App;
