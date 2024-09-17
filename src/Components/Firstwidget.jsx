import React from "react";
import { useState } from "react";
import QuestionMark from "../Images/QuestionMark.png";
function Firstwidget() {
  const [selectedTab, setSelectedTab] = useState(0);

  const moveHighlight = (index) => {
    setSelectedTab(index);
  };
  return (
    <div className=" w-full  h-[43%]  md:w-[48%] md:h-full xl:w-full  ">
      <div className="WidgetShadow  h-full xl:h-[93%]  rounded-[18.89px] bg-customFirstwidget">
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
              <div
                className="absolute Movable z-20 m-1 top-0 left-0 w-[32%] md:w-[31.2%] lg:w-[32%] h-[84%] bg-customButtonBackground rounded-2xl transition-all duration-500 ease-in-out"
                style={{ left: `${selectedTab * 33.2}%` }}
              ></div>

              <ul
                class="Tabs flex flex-wrap bg-customUlBackground rounded-2xl w-full h-12   text-sm font-medium text-center"
                id="default-tab"
                data-tabs-toggle="#default-tab-content"
                role="tablist"
              >
                <li class=" w-1/3 p-1 relative" role="presentation">
                  <button
                    class="btns inline-block text-center w-full h-full font-customFont2 font-normal sm:text-lg md:text-[0.6rem] lg:text-sm xl:text-base xl:font-medium xl:tracking-wider  rounded-2xl  text-customFontButtons aria-selected:text-white transition-colors duration-500"
                    id="profile-tab"
                    data-tabs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    onClick={() => moveHighlight(0)}
                  >
                    <p className="relative z-20">About Me</p>
                  </button>
                </li>
                <li class="w-1/3 p-1 relative" role="presentation">
                  <button
                    class="btns inline-block text-center w-full h-full font-customFont2 font-normal  md:text-[0.6rem] lg:text-sm xl:text-base xl:font-medium xl:tracking-wider  rounded-2xl  text-customFontButtons aria-selected:text-white transition-colors duration-500"
                    id="dashboard-tab"
                    data-tabs-target="#dashboard"
                    type="button"
                    role="tab"
                    aria-controls="dashboard"
                    aria-selected="false"
                    onClick={() => moveHighlight(1)}
                  >
                    <p className="relative z-20">Experiences</p>
                  </button>
                </li>
                <li class="w-1/3 p-1 relative" role="presentation">
                  <button
                    class="btns inline-block text-center w-full h-full font-customFont2 font-normal md:text-[0.6rem] lg:text-sm  xl:text-base xl:font-medium xl:tracking-wider  rounded-2xl  text-customFontButtons aria-selected:text-white transition-colors duration-500"
                    id="settings-tab"
                    data-tabs-target="#settings"
                    type="button"
                    role="tab"
                    aria-controls="settings"
                    aria-selected="false"
                    onClick={() => moveHighlight(2)}
                  >
                    <p className="relative z-20">Recommended</p>
                  </button>
                </li>
              </ul>
            </div>
            <div id="default-tab-content ">
              <div
                class="hidden rounded-lg  bg-transparent "
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <p class="font-customFont text-customFontContent overflow-y-auto h-[7.5rem] md:h-[13.4rem] xl:h-[9rem] pt-2 text-sm font-normal ">
                  Hello! I’m Dave, your sales rep here from Salesforce. I’ve
                  been working at this awesome company for 3 years now.
                  <br />
                  <br />I was born and raised in Albany, NY& have been living in
                  Santa Carla for the past 10 years my wife Tiffany and my 4
                  year old twin daughters- Emma and Ella. Both of them are just
                  starting school, so my calender is usually blocked between
                  9-10 AM. This is a...
                </p>
              </div>
              <div
                class="hidden rounded-lg bg-transparent "
                id="dashboard"
                role="tabpanel"
                aria-labelledby="dashboard-tab"
              >
                <p class="font-customFont  text-customFontContent overflow-y-auto h-[7.5rem] md:h-[13.4rem] xl:h-[9rem] pt-2 text-sm font-normal ">
                  Over the past 3 years at Salesforce, I've taken on various
                  roles that have allowed me to grow and thrive. My work has
                  ranged from developing innovative solutions to managing client
                  relationships, all of which have contributed to the company’s
                  success.
                  <br />
                  <br />
                  Before joining Salesforce, I honed my skills in software
                  development and project management. My career started with a
                  focus on creating robust systems and applications, and I’ve
                  since expanded into strategic roles that involve leading teams
                  and driving product innovations. When I’m not working, I enjoy
                  exploring new technologies and sharing knowledge with
                  colleagues. Each experience has shaped my professional path,
                  and I’m grateful for the opportunities I’ve had to learn and
                  contribute.
                </p>
              </div>
              <div
                class="hidden  rounded-lg bg-transparent "
                id="settings"
                role="tabpanel"
                aria-labelledby="settings-tab"
              >
                <p class="font-customFont text-customFontContent overflow-y-auto h-[7.5rem] md:h-[13.4rem] xl:h-[9rem] pt-2 text-sm font-normal ">
                  Given my years at Salesforce and my extensive experience in
                  the tech industry, I’ve encountered a wide range of tools and
                  resources that can enhance your work and productivity.
                  <br />
                  <br />
                  For anyone interested in tech, I highly recommend staying
                  up-to-date with industry trends and tools. Platforms like
                  Stack Overflow and GitHub are fantastic for problem-solving
                  and collaboration. Additionally, exploring online courses on
                  Coursera or Udemy can be incredibly beneficial for expanding
                  your skill set. For project management, tools like Jira and
                  Trello have been invaluable in keeping projects organized and
                  on track. These resources have played a significant role in my
                  professional development, and I believe they will be equally
                  useful to you.
                </p>
              </div>
            </div>
          </div>
          <div className="sideFeature2 inline-flex justify-between flex-col w-6 h-full ">
            <div className="sideRectangle w-2 h-16 rounded-[8px] bg-custom-gradientRectangle m-auto"></div>
          </div>
        </div>
      </div>
      <div className="line  w-9/12 h-1 my-3  mx-auto rounded-[2.46px] bg-orange-600 " />
    </div>
  );
}

export default Firstwidget;
