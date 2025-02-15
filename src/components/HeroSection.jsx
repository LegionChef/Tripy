import React from "react";
import Navbar from "./Navbar";
import bgHeroImg from "../assets/images/tripyAi_bg_hero.svg";
import heroSuitCase from "../assets/images/tripyAi_suitcase.svg";
import baseIcon from "../assets/images/tripyAi_base_icon.svg";
import solanaIcon from "../assets/images/tripyAi_solana_icon.svg";
import berachainIcon from "../assets/images/tripyAi_berachain_icon.svg";
import abstractIcon from "../assets/images/tripyAi_abstract_icon.svg";
import suitcaseRotation from "../assets/videos/rotatingBriefcase.webm";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(circle farthest-side at 30% -1000%, #fff, #fff 0%, #fff 0%, #fff0)",
      }}
      className=" relative"
    >
      <Navbar />
      <div className="h-[calc(100vh-5rem)] pt-[5rem]">
        <div className="w-full mt-5 flex flex-col items-center">
          <div className="flex flex-col w-fit px-5 xl:px-0 gap-5 xl:gap-0">
            <span className="text-6xl lg:text-8xl xl:text-9xl mt-10 xl:mt-0 text-center bg-gradient-to-tr from-[#505050] via-[#b0b0b0] to-[#fff] bg-clip-text text-transparent">
              Create your own
              <br /> AI Travel Agent.
            </span>

            <span className=" mt-3 text-center xl:text-right xl:mr-0 mr-2 ">
              Tripy Ai perfectly aligns with the growing demand for
              <br /> personalized, crypto-integrated, and automated services.
            </span>
          </div>
        </div>
        <div className="overflow-hidden relative w-full pt-32">
          <div className="whitespace-nowrap animate-marquee text-2xl text-[#525252]">
            <span className="inline-block px-4 py-2  font-semibold  mx-1">
              Personalized Ai Travel Agent
            </span>
            <span className="inline-block px-4 py-2  font-semibold  mx-1">
              Personalized Ai Travel Agent
            </span>
            <span className="inline-block px-4 py-2  font-semibold  mx-1">
              Personalized Ai Travel Agent
            </span>
            <span className="inline-block px-4 py-2  font-semibold  mx-1">
              Personalized Ai Travel Agent
            </span>
            <span className="inline-block px-4 py-2  font-semibold  mx-1">
              Personalized Ai Travel Agent
            </span>
            <span className="inline-block px-4 py-2  font-semibold  mx-1">
              Personalized Ai Travel Agent
            </span>
            <span className="inline-block px-4 py-2  font-semibold  mx-1">
              Personalized Ai Travel Agent
            </span>
            <span className="inline-block px-4 py-2  font-semibold  mx-1">
              Personalized Ai Travel Agent
            </span>
            <span className="inline-block px-4 py-2  font-semibold  mx-1">
              Personalized Ai Travel Agent
            </span>
            <span className="inline-block px-4 py-2  font-semibold  mx-1">
              Personalized Ai Travel Agent
            </span>
            <span className="inline-block px-4 py-2  font-semibold  mx-1">
              Personalized Ai Travel Agent
            </span>
            <span className="inline-block px-4 py-2  font-semibold  mx-1">
              Personalized Ai Travel Agent
            </span>
          </div>
          {/* <div className="absolute top-0 flex items-center justify-center pt-28 left-0 w-full z-20 text-xl bg-transparent ">
                <span className="bg-white py-4 px-8 rounded-full text-black hover:cursor-pointer">FOLLOW ON X.COM</span>
            </div> */}
        </div>
        <div className="absolute bottom-[35rem] lg:bottom-[22rem] xl:bottom-[16rem] flex justify-center items-center z-10 w-full">
            <video
                className="inset-0 w-[100%] lg:w-[42%] object-cover pointer-events-none z-20"
                src={suitcaseRotation}
                autoPlay
                loop
                muted
                playsInline
                type="video/webm"
                controls={false}
            />
            {/* Fallback for unsupported devices */}
            {/* <img
                className="w-[40%] "
                src={suitcaseRotation}
                alt="Fallback Animation"
            /> */}
        </div>
        {/* <motion.div
                className="absolute bottom-[18rem] flex justify-center items-center z-10 w-full"
                animate={{ y: [0, 50, 0] }} // Up and down motion
                transition={{
                    duration: 5, // Duration of one cycle
                    repeat: Infinity, // Repeats indefinitely
                    repeatType: "loop", // Continuous loop
                    ease: "easeInOut", // Easing function
                }}
                >
                <motion.img 
                    src={heroSuitCase} 
                    alt="main_img" 
                    className="w-[32%]" 
                />
            </motion.div> */}
      </div>

      <div className="flex flex-col justify-center items-center z-10 text-white w-full ">
        <div
          className="absolute w-full h-full -bottom-[10rem] bg-cover bg-repeat-x overflow-hidden"
          style={{ backgroundImage: `url(${bgHeroImg})` }}
        ></div>

        <span id="multichain-support" className="mt-44 z-20 text-4xl underline">
          Multichain Support
        </span>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:grid-cols-4 xl:gap-24 mt-20 justify-items-center">
          <img src={baseIcon} alt="baseIcon" />
          <img src={solanaIcon} alt="solanaIcon" />
          <img src={berachainIcon} alt="berachainIcon" />
          <img src={abstractIcon} alt="abstractIcon" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
