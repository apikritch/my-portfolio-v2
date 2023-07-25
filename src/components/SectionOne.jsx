import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { devTypes, contact } from "../services/Data";

const devTypesParent = {
  start: { opacity: 1 },
  end: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.25,
    },
  },
};

const devTypesChildren = {
  start: {
    y: 20,
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const handleClickContact = (name, link) => {
  switch (name) {
    case "GitHub":
      window.open(link, "_blank");
      break;
    case "Linkedin":
      window.open(link, "_blank");
      break;
    case "Email":
      window.open(`mailto:${link}?subject=Inquiry`, "_blank");
      break;
    case "Phone":
      window.location.href = `tel:${link}`;
      break;
  }
};

const SectionOne = () => {
  const [hovered, setHovered] = useState();
  const [dividerShow, setDividerShow] = useState(false);
  const [devTypesShow, setDevTypesShow] = useState(false);
  // const [devTypesChildrenShow, setDevTypesChildrenShow] = useState(false);

  const onHeaderComplete = () => {
    setDividerShow(true);
  };

  const onDividerComplete = () => {
    setDevTypesShow(true);
  };

  // const onDevTypesComplete = () => {
  //   setDevTypesChildrenShow(true);
  // };

  return (
    <motion.section className="container mx-auto content-background pt-4 sm:pt-6 pb-[3.5rem] xs:pb-[4.25rem] sm:pb-[3.75rem] md:pb-[5rem] lg:pb-[7.5rem] px-4 sm:px-6 md:px-8 min-h-screen xs:min-h-[85.4vh] sm:min-h-screen">
      <div className="flex flex-col items-end main-display-font text-[#ffffff] text-[1.8rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem]">
        <div className="overflow-hidden">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ rotate: [-45, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className=" origin-bottom-right">
            HELLO,
          </motion.p>
        </div>
        <div className="overflow-hidden text-end">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ rotate: [-45, 0], opacity: [0, 1] }}
            transition={{ duration: 0.6 }}
            onAnimationComplete={() => {
              onHeaderComplete();
            }}
            className=" origin-bottom-right">
            I'M JAKE APIKRITCH
          </motion.p>
        </div>
      </div>
      <div className="relative mt-[5.67rem] xs:mt-[6.6rem] mb-[5rem] xs:mb-[5.55rem] sm:mb-[5.4rem] md:my-[8.65rem] lg:my-[9.75rem]">
        {devTypesShow && (
          <motion.div
            variants={devTypesParent}
            initial="start"
            animate="end"
            className="absolute -top-11 sm:-top-12 md:-top-14 right-0 flex gap-3 md:gap-4">
            {contact.map((item, index) => (
              <motion.button
                key={index}
                variants={devTypesChildren}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white rounded-lg flex justify-center items-center"
                onClick={() => handleClickContact(item.name, item.url)}>
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`${
                    item.name === "Phone"
                      ? "text-[1rem] md:text-[1.25em]"
                      : "text-[1.25rem] md:text-[1.5em]"
                  }`}
                />
              </motion.button>
            ))}
          </motion.div>
        )}
        {devTypesShow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 0.1, duration: 3 }}
            className="absolute top-2 right-0 flex gap-4">
            <p className="text-white text-[0.8rem] xs:text-[0.875rem] sm:text-[0.9rem] md:text-[1rem]">
              apikritch.r@gmail.com | +61 423 243 070
            </p>
          </motion.div>
        )}
        {dividerShow ? (
          <motion.hr
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.25 }}
            onAnimationComplete={() => {
              onDividerComplete();
            }}
            className="border-[#86868b]"
          />
        ) : (
          <hr className="border-black" />
        )}
      </div>
      <div className="flex justify-start overflow-hidden main-display-font text-[#ffffff] h-[3rem] xs:h-[3.25rem] sm:h-[4rem]">
        {devTypesShow && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 0.1, duration: 3 }}
            // onAnimationComplete={() => {
            //   onDevTypesComplete();
            // }}
            className="origin-bottom-right text-[1.6rem] xs:text-[1.75rem] sm:text-[2.5rem] md:text-[3rem]">
            Web Developer
          </motion.p>
        )}
      </div>
      <div className="flex flex-wrap items-center">
        <div className="lg:w-1/2 3xl:w-[39.5%] flex justify-start items-center sm:my-3 md:my-6">
          {devTypesShow && (
            <motion.div
              variants={devTypesParent}
              initial="start"
              animate="end"
              className="w-full grid grid-cols-3 gap-4 sm:gap-5 md:gap-6 xl:gap-8 items-center">
              {devTypes.map((item, index) => (
                <motion.div
                  key={index}
                  variants={devTypesChildren}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.85 }}
                  onMouseEnter={() => setHovered(item.text)}
                  onMouseLeave={() => setHovered(null)}
                  className={`inline-block text-[#000000] h-[5.3rem] w-[5.3rem] xs:h-[6.45rem] xs:w-[6.45rem] sm:h-[8rem] sm:w-[8rem] md:h-[8.9rem] md:w-[8.9rem] xl:h-[11.4rem] xl:w-[11.4rem] 2xl:h-[14rem] 2xl:w-[14rem] rounded-lg text-end px-2 xs:px-3 sm:px-3 md:px-4 xl:px-6 2xl:px-8 pb-[0.2rem] sm:pb-[0.3rem] md:pb-[0.4rem] xl:pb-3 ${item.color}`}>
                  <div className="h-full flex flex-col justify-center">
                    <p
                      className={`text-[1.4rem] xs:text-[1.75rem] sm:text-[2.25rem] md:text-[2.5rem] xl:text-[3rem] 2xl:text-[3.75rem]`}>
                      {item.id}
                    </p>
                    <hr className="border-zinc-300 mt-0 mb-2" />
                    <p className="text-[0.7rem] xs:text-[0.82rem] sm:text-[1.12rem] md:text-[1.19rem] xl:text-[1.46rem] 2xl:text-[1.73rem]">
                      {item.type}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
        <div
          className={`lg:w-1/2 3xl:w-[60.5%] flex justify-end lg:justify-center text-[1rem] main-display-font mt-[3.5rem] xs:mt-[4rem] sm:mt-[3rem] md:mt-[4rem] lg:mt-0 ${
            hovered ? hovered : "text-white"
          }`}>
          <div className="w-11/12 lg:w-4/5 lg:pl-[2rem]">
            <div className="inline">
              {devTypesShow && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1] }}
                  transition={{ delay: 0.1, duration: 3 }}
                  className="text-justify text-[0.74rem] xs:text-[0.75rem] sm:text-[0.85rem] md:text-[1rem] hyphens-auto">
                  <FontAwesomeIcon
                    icon="fa-solid fa-quote-left"
                    className="text-[0.5rem] sm:text-[0.55rem] md:text-[0.75rem] relative top-[-4.5px] sm:top-[-6px] md:top-[-6.5px] mr-2"
                  />
                  I'm a web developer skilled in both front-end and back-end
                  development, with hands-on experience working for a startup
                  company in Australia. As a team player, I'm attentive to
                  details and maintain a positive attitude. I enjoy
                  collaborating with others in team environments.
                  <FontAwesomeIcon
                    icon="fa-solid fa-quote-right"
                    className="text-[0.5rem] sm:text-[0.55rem] md:text-[0.75rem] relative top-[-4.5px] sm:top-[-6px] md:top-[-6.5px] ml-2"
                  />
                </motion.p>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SectionOne;
