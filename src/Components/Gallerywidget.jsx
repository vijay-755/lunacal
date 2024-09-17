import React from "react";
import QuestionMark from "../Images/QuestionMark.png";
import { useState, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import image1 from "../Images/image1.jpg";
function Gallerywidget() {
  const [Images, setImages] = useState([image1, image1, image1, image1]);
  const fileInputRef = useRef(null);
  const slider = useRef(null);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImage = e.target.result;

        setImages([newImage, ...Images]);
      };
      reader.readAsDataURL(file);
    }
  };
  const slideLeft = () => {
    slider.current.scrollLeft -= 170;
  };
  const slideRight = () => {
    slider.current.scrollLeft += 170;
  };
  return (
    <div className=" w-full  h-[50%]  md:w-[48%] md:h-full xl:w-full xl:mt-3  ">
      <div className="WidgetShadow h-full xl:h-[91%]  rounded-[18.89px] bg-customFirstwidget">
        <div className="container flex w-full h-full p-3">
          <div className="sideFeature1 inline-flex justify-between flex-col w-6 h-full   ">
            <img
              src={QuestionMark}
              alt=""
              className="w-6 h-[1.35rem]  rounded-2xl"
            />
            <p className="boxes flex flex-row flex-wrap   w-full h-7 mb-[4rem] md:mb-[6.7rem] xl:mb-[5rem] ">
              <p className="w-2 h-2 mx-[1px]  bg-customBoxes"></p>
              <p className="w-2 h-2 mx-[1px] bg-customBoxes"></p>
              <p className="w-2 h-2 mx-[1px] bg-customBoxes"></p>
              <p className="w-2 h-2 mx-[1px] bg-customBoxes"></p>
              <p className="w-2 h-2 mx-[1px] bg-customBoxes"></p>
              <p className="w-2 h-2 mx-[1px] bg-customBoxes"></p>
            </p>
          </div>
          <div className="container2 flex flex-col justify-between w-full h-full px-2 ">
            <div className="relative ">
              <ul class=" flex  bg-transparent rounded-2xl w-full h-12 lg:h-14   text-sm font-medium text-center">
                <li class=" w-32 md:w-[34%] lg:w-32  relative justify-start">
                  <button
                    class="cursor-default inline-block bg-customUlBackground w-full h-full font-customFont2 font-normal xl:font-medium md:text-[0.6rem] lg:text-sm xl:text-base xl:tracking-wider text-center rounded-2xl  text-white "
                    type="button"
                  >
                    <p className="relative z-20">Gallery</p>
                  </button>
                </li>
                <li class="w-32 md:w-[40%] lg:w-32 h-5/6 my-auto  relative ml-auto">
                  <button
                    class="Addimg inline-block bg-customAddImage w-5/6 lg:w-full h-full font-customFont2 font-normal xl:font-medium md:text-[0.6rem] lg:text-xs xl:text-sm xl:tracking-wider text-center rounded-[6rem] text-white"
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                  >
                    <p className="relative z-20">+ Add Image</p>
                  </button>
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleImageUpload}
                    
                  />
                </li>
                <li class="w-20 md:w-16 lg:w-32 h-5/6 my-auto  relative ">
                  <div className="flex justify-end w-full h-full  ">
                    <button
                      class="Imgbtn flex justify-center items-center my-auto bg-customBackground w-8 h-8 md:w-7 md:h-7 lg:w-10 lg:h-10 rounded-full "
                      type="button"
                      onClick={slideLeft}
                    >
                      <FaArrowLeft size={22} />
                    </button>
                    <button
                      class="Imgbtn flex justify-center items-center my-auto bg-customBackground w-8 h-8 md:w-7 md:h-7 lg:w-10 lg:h-10 rounded-full ml-2 lg:ml-4"
                      type="button"
                      onClick={slideRight}
                    >
                      <FaArrowRight size={22} />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
            <div
              ref={slider}
              className="cardContainer flex items-end scroll-smooth w-fit mt-2 md:h-[15rem] lg:h-[12.3rem] xl:h-[9rem]   overflow-x-auto "
            >
              {Images.map((item, id) => {
                return (
                  <img
                    className="cards h-[90%] md:w-[45%] lg:w-[30.5%] mx-[0.45rem]  object-cover grayscale origin-bottom-left hover:shadow-black hover:shadow-lg hover:-rotate-3 hover:scale-105 hover:grayscale-0 transition-all duration-500  rounded-2xl"
                    key={id}
                    src={item}
                    alt=""
                  />
                );
              })}
            </div>
          </div>
          <div className="sideFeature2 inline-flex justify-between flex-col w-6 h-full  "></div>
        </div>
      </div>
      <div className="line  w-9/12 h-1 my-3   mx-auto rounded-[2.46px] " />
    </div>
  );
}

export default Gallerywidget;
