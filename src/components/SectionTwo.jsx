import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "@mdi/react";
import { skills } from "../services/Data";
import { shuffleArray } from "../utils/globalFunctions";
import ParallaxText from "./ParallaxText";

const headerPushher = {
  start: { y: 140 },
  center: {
    y: 140,
    transition: { delay: 0.3 },
  },
  top: {
    y: 0,
    transition: { duration: 0.5 },
  },
};

const skillsParent = {
  start: { opacity: 1 },
  end: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillsChildren = {
  start: {
    y: 20,
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75 },
  },
};

const SectionTwo = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const [selectedId, setSelectedId] = useState(null);
  const [isPushed, setIsPushed] = useState(false);
  const [isSkillsShown, setIsSkillsShown] = useState(false);
  const [allSkills, setAllSkills] = useState([]);

  const endPusher = (definition) => {
    if (definition === "center") {
      setIsPushed(true);
    }

    if (definition === "top") {
      setIsSkillsShown(true);
    }
  };

  const getSkill = () => {
    return skills.find((item) => item.id === selectedId);
  };

  const getAllSkills = () => {
    let allData = [];
    for (const item of skills) {
      for (const i of item.items) {
        allData.push(i.name);
      }
    }
    allData = shuffleArray(allData);

    setAllSkills(allData);
  };

  useEffect(() => {
    getAllSkills();
  }, []);

  return (
    <motion.section className="relative content-background pb-[20rem] pb-[14rem] xs:pb-[15.25rem] sm:pb-[15.5rem] md:pb-[18.75rem] pt-[2.5rem] xs:pt-[3.5rem] sm:pt-[3rem] md:pt-[7rem] lg:py-[8rem] bg-[#141212] px-3 sm:px-0">
      <div className="container mx-auto flex flex-col justify-center items-center relative z-[1050]">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.1, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="w-2/5 main-display-font text-[3rem] text-[#ffffff]">
          Skills
        </motion.p>
        <div className="relative w-full sm:w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-2/5 grid grid-cols-4 gap-3 md:gap-4 lg:gap-6 bg-[#141212] outline outline-offset-0 outline-[0.75rem] sm:outline-[0.75rem] lg:outline-[1.5rem] outline-[#141212] mt-6">
          {skills.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: selectedId && selectedId === index + 1 ? 0 : 1,
                y: 0,
                transition: { delay: 0.1, duration: 0.5 },
              }}
              viewport={{ once: true }}
              whileHover={
                item.id === 1
                  ? { scale: 1.045 }
                  : [4, 5, 7, 8].includes(item.id)
                  ? { scale: 1.05 }
                  : { scale: 1.1 }
              }
              layoutId={item.id}
              onTapStart={() => {
                setSelectedId(item.id);
              }}
              className={`bg-black rounded-lg p-[6px] sm:p-3 md:p-4 flex items-center justify-center cursor-pointer ${
                item.style
                  ? item.style
                  : "h-[4.1rem] xs:h-[5rem] sm:h-[7.5rem] md:h-[8.5rem] lg:h-[8.5rem] xl:h-[8.5rem] 3xl:h-[11rem]"
              }`}>
              <p className="fourth-display-font text-[0.7rem] xs:text-[0.88rem] sm:text-[1.25rem] md:text-[1.37rem] text-transparent bg-clip-text bg-gradient-to-t from-[#FF646F] to-[#FFB973] break-words text-center">
                {item.type}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="absolute lg:top-[calc(50%-1.1rem)] overflow-hidden pr-6 mt-11 xs:mt-14 sm:mt-[3.5rem] md:mt-[3rem] lg:mt-0">
          {allSkills.length > 0 && (
            <React.Fragment>
              <ParallaxText
                baseVelocity={windowSize.current[0] >= 1024 ? -1 : -0.5}
                dataArray={allSkills}
              />
              <ParallaxText
                baseVelocity={windowSize.current[0] >= 1024 ? 1 : 0.5}
                dataArray={allSkills}
              />
            </React.Fragment>
          )}
        </div>
      </div>
      {selectedId && (
        <AnimatePresence>
          <div className="absolute top-0 left-0 h-full w-full z-[1100] sm:px-3 px-3 md:px-4 lg:px-0">
            <div
              className="h-full flex justify-center items-center close-modal"
              onClick={(e) => {
                if (e.target.className.includes("close-modal")) {
                  setSelectedId(null);
                  setIsPushed(false);
                  setIsSkillsShown(false);
                }
              }}>
              <motion.div
                layoutId={selectedId}
                className="relative bg-black p-2 xs:p-4 sm:p-8 rounded-lg h-[14.5rem] xs:h-[17rem] sm:h-[19rem] md:h-[21rem] lg:h-[23.5rem] w-full lg:w-[53rem]">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="close-modal absolute right-2 top-2 xs:right-4 xs:top-4 bg-[#ffffff] rounded-full w-6 h-6 flex justify-center items-center cursor-pointer">
                  <FontAwesomeIcon
                    icon="fa-solid fa-xmark"
                    className="pointer-events-none"
                  />
                </motion.div>

                <motion.p
                  variants={headerPushher}
                  initial="start"
                  animate={!isPushed ? "center" : "top"}
                  onAnimationComplete={(definition) => {
                    endPusher(definition);
                  }}
                  className="fourth-display-font text-[1.4rem] text-transparent bg-clip-text bg-gradient-to-t from-[#FF646F] to-[#FFB973] break-words text-center">
                  {getSkill().type}
                </motion.p>

                {isSkillsShown && (
                  <motion.div
                    variants={skillsParent}
                    initial="start"
                    animate="end"
                    className="h-[calc(100%-2rem)] flex flex-wrap justify-center items-center content-evenly mx-auto w-[17.5rem] xs:w-[19.9rem] sm:w-[34.5rem] md:w-[41rem] lg:w-[43rem]">
                    {getSkill().items.map((item, index) => (
                      <motion.div
                        key={index}
                        variants={skillsChildren}
                        className="basis-1/3 text-white flex justify-center items-center">
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-[4px] xs:p-[6px] sm:p-2 bg-[#4b4b4b] flex flex-col sm:flex-row justify-around sm:justify-center items-center rounded-lg h-[4.5rem] xs:h-[4.9rem] sm:h-16 md:h-20 w-[5rem] xs:w-[5.5rem] sm:w-[10rem] md:w-[12rem]">
                          {item.type.includes("fa") ? (
                            <FontAwesomeIcon
                              icon={item.icon}
                              className={`pointer-events-none text-[#ffffff] ${
                                item.name.includes("GitLab")
                                  ? "text-[1.75rem]"
                                  : "text-[2rem]"
                              }`}
                            />
                          ) : item.type.includes("lni") ? (
                            <i
                              className={`pointer-events-none text-[2rem] text-[#ffffff] ${item.icon}`}></i>
                          ) : (
                            item.type.includes("mdi") && (
                              <div
                                className={`pointer-events-none ${
                                  item.name.includes("Firebase")
                                    ? "w-[2rem] h-[2rem] "
                                    : "w-[2.45rem] h-[2.45rem] "
                                }`}>
                                <Icon
                                  path={item.icon}
                                  color="#ffffff"
                                  size={
                                    item.name.includes("Firebase")
                                      ? "2rem"
                                      : "2.45rem"
                                  }
                                  className={
                                    item.name === "Tailwind CSS" &&
                                    "relative top-[-1px] sm:top-auto"
                                  }
                                />
                              </div>
                            )
                          )}
                          <p className="main-display-font sm:border-l sm:ml-2 sm:pl-2 text-[0.65rem] xs:text-[0.7rem] sm:text-[0.84rem] md:text-[1rem]">
                            {item.name}
                          </p>
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </AnimatePresence>
      )}
    </motion.section>
  );
};

export default SectionTwo;
