import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projects } from "../services/Data";

import "./SectionThree.scss";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const textVariants = {
  start: { opacity: 0 },
  hidden: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const SectionThree = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const projectIndex = wrap(0, projects.length, page);

  const [currentProject, setCurrentProject] = useState(projects[projectIndex]);
  const [isShow, setIsShow] = useState(true);

  const paginate = (newDirection) => {
    if (isShow) {
      setIsShow(false);
      setPage([page + newDirection, newDirection]);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setCurrentProject(projects[projectIndex]);
      setIsShow(true);
    }, 500);
  }, [projectIndex]);

  return (
    <div className="content-background py-[1.75rem] xs:py-[2rem] md:py-[6.25rem] xl:py-[8rem] bg-white main-display-font">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-end">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.1, duration: 0.25 },
            }}
            viewport={{ once: true }}
            className="text-[3rem]">
            Projects
          </motion.p>
        </div>
        <div className="flex flex-col md:flex-row mt-6 gap-3 md:gap-4 lg:gap-8">
          <div className="w-full md:w-7/12 flex justify-center items-center order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: isShow ? 1 : 0,
                y: 0,
                transition: { delay: 0.1, duration: 0.25 },
              }}
              viewport={{ once: true }}
              className="mt-2 md:mt-0 md:w-3/4 lg:w-4/5 xl:w-4/5 2xl:w-3/5">
              <motion.div
                variants={textVariants}
                initial="start"
                animate={isShow ? "visible" : "hidden"}
                className="inline">
                <p className="text-justify hyphens-auto text-[0.9rem] md:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.25rem]">
                  <FontAwesomeIcon
                    icon="fa-solid fa-quote-left"
                    className="text-[0.55rem] md:text-[0.6rem] xl:text-[0.65rem] 2xl:text-[0.70rem] 3xl:text-[0.75rem] relative top-[-5px] md:top-[-6.5px] xl:top-[-7px] 2xl:top-[-7.5px] mr-2"
                  />
                  {currentProject.description}
                  <FontAwesomeIcon
                    icon="fa-solid fa-quote-right"
                    className="text-[0.55rem] md:text-[0.6rem] xl:text-[0.65rem] 2xl:text-[0.70rem] 3xl:text-[0.75rem] relative top-[-5px] md:top-[-6.5px] xl:top-[-7px] 2xl:top-[-7.5px] ml-2"
                  />
                </p>
              </motion.div>
            </motion.div>
          </div>
          <div className="w-full md:w-5/12 order-1 md:order-2">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1, duration: 0.25 },
                }}
                viewport={{ once: true }}
                className="flex justify-center items-center overflow-hidden relative h-[500px]">
                <AnimatePresence
                  initial={false}
                  custom={direction}>
                  <motion.div
                    className="absolute w-full h-full"
                    key={page}
                    variants={variants}
                    custom={direction}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);
                      if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                      }
                    }}>
                    <div className="flex justify-center items-center">
                      <div className="w-[300px] main-display-font">
                        <img
                          className="relative pointer-events-none rounded-xl shadow-lg h-[155px] object-cover "
                          src={projects[projectIndex].image}
                          width="100%"
                        />
                        <div className="flex gap-5 mt-5">
                          {projects[projectIndex].ext_link.map(
                            (item, index) => (
                              <motion.a
                                key={index}
                                href={item.url}
                                target="_blank"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                className="cursor-pointer bg-black w-10 h-10 rounded-lg flex justify-center items-center">
                                <FontAwesomeIcon
                                  icon={item.icon}
                                  size={item.size && item.size}
                                  style={{ color: "#ffffff" }}
                                />
                              </motion.a>
                            )
                          )}
                        </div>
                        <hr className="border-black mt-5 mb-8" />
                        <p className="text-[1.5rem] mb-2">Frameworks</p>
                        {projects[projectIndex].frameworks.map(
                          (item, index) => (
                            <div
                              key={index}
                              className="flex items-center mb-2">
                              <FontAwesomeIcon
                                icon="fa-solid fa-circle"
                                className="text-[0.4rem] mr-2"
                              />
                              <p className="text-[1.05rem]">{item}</p>
                            </div>
                          )
                        )}
                        <div className="absolute bottom-0 left-0 text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] flex">
                          <p className="mr-4">
                            0{projects[projectIndex].id + 1}.
                          </p>
                          <p>{projects[projectIndex].name}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="next top-[calc(50%+20px)] sm:top-1/2 md:top-[calc(50%+20px)] xl:top-1/2 right-0 xs:right-[20px] sm:right-[20px] md:right-0 lg:right-[42.5px] xl:right-0 2xl:right-[10px]"
                  onClick={() => paginate(1)}>
                  <FontAwesomeIcon
                    icon="fa-solid fa-angle-right"
                    style={{ color: "#ffffff" }}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="prev top-[calc(50%+20px)] sm:top-1/2 md:top-[calc(50%+20px)] xl:top-1/2 right-[40px] xs:right-[65px] sm:left-[20px] 
                  md:left-[unset]
                  md:right-[45px] lg:right-[87.5px] xl:left-0 2xl:left-[10px]"
                  onClick={() => paginate(-1)}>
                  <FontAwesomeIcon
                    icon="fa-solid fa-angle-left"
                    style={{ color: "#ffffff" }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
