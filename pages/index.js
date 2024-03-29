import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full border border-blue-500 bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="border border-red-500 flex flex-col justify-center text-center xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0, 2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Turning Ideas <br /> Into
            <span className="text-accent"> Digital Reality</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0, 3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0, 4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] border border-red-500 h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-right xl:bg-explosion xl:bg-cover xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* Particles */}
        <div>
          <ParticlesContainer />
        </div>
        {/* avatar img */}
        <motion.div
          variants={fadeIn("up", 0, 5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="max-w-[737px] max-h-[678px] absolute lg:bottom-0 lg:right-[8%]"
        >
          {/* <Avatar /> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
