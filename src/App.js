import Lefthalf from "./Components/Lefthalf";
import Firstwidget from "./Components/Firstwidget";
import Gallerywidget from "./Components/Gallerywidget";
import "./App.css";

function App() {
  return (
    <div className="  min-h-screen h-fit  w-full px-6 py-24 md:py-16 xl:pl-6  xl:pr-16 rounded-[27px] bg-customBackground  ">
      <div className=" flex flex-col w-full h-full xl:flex-row  xl:justify-between xl:h-[29.5rem]  ">
        <Lefthalf />
        <div className="flex flex-col justify-between w-full h-[28rem]  md:flex-row  md:h-[18rem]   xl:w-[37rem] xl:h-[31rem] xl:flex-col  xl:mx-auto ">
          <Firstwidget />

          <Gallerywidget />
        </div>
      </div>
    </div>
  );
}

export default App;
