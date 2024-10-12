import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const text = "Apikritch.com";
const myArray = text.split("");

const loading = {
  loading: {
    opacity: [0.01, 1, 0.01],
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
};

const starting = {
  start: { opacity: 1 },
  end: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const loadingChildren = {
  start: {
    y: -20,
    opacity: 0,
    scale: 0,
  },
  end: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
  afterEnd: {
    y: 0,
    opacity: 0,
    scale: 1,
    transition: {
      duration: 0.75,
    },
  },
};

const dividing = {
  visible: {
    opacity: 1,
    scaleX: [0, 1],
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    scaleX: 1,
    transition: {
      duration: 0,
    },
  },
};

const variants = {
  closed: { scaleY: 1 },
  open: {
    scaleY: 0,
  },
};

const variants_2 = {
  closed: {
    scaleY: 1,
  },
  open: {
    scaleY: 0,
  },
};

const StartupAnimation = (props) => {
  const { showSectionOne, setShowSectionOne } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isDivide, setIsDivide] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const firstStart = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    firstStart();
  }, []);

  const handleStartup = (definition) => {
    if (definition === "end") {
      setTimeout(() => {
        setIsEnd(true);
      }, 750);
    }

    if (definition === "afterEnd") {
      setIsDivide(true);
    }
  };

  const openPage = () => {
    setIsOpen(true);
  };

  const endOpenPage = () => {
    setShowSectionOne(true);
  };

  return (
    <React.Fragment>
      {!isDivide && (
        <section className="bg-white animation-background">
          {isLoading ? (
            <motion.div
              variants={loading}
              animate={"loading"}
              className="font-bold text-4xl main-display-font">
              Loading
            </motion.div>
          ) : (
            <motion.div
              variants={starting}
              initial="start"
              animate={!isEnd ? "end" : "afterEnd"}
              onAnimationComplete={(definition) => {
                handleStartup(definition);
              }}
              className="font-bold text-3xl xs:text-4xl second-display-font">
              {myArray.map((word, index) => (
                <motion.span
                  key={index}
                  variants={loadingChildren}
                  className="inline-block">
                  {word}
                </motion.span>
              ))}
            </motion.div>
          )}
        </section>
      )}
      {isDivide && !isOpen && (
        <section className="bg-white animation-background">
          <motion.hr
            variants={dividing}
            animate={!isOpen ? "visible" : "hidden"}
            onAnimationComplete={() => {
              openPage();
            }}
            className="w-full border-black border-[1px]"
          />
        </section>
      )}

      {isOpen && !showSectionOne && (
        <React.Fragment>
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 1 }}
            onAnimationComplete={() => {
              endOpenPage();
            }}
            className="z-[900] origin-top bg-[#ffffff]">
            <div className="h-[50vh] w-[100vw]"></div>
          </motion.div>
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={variants_2}
            transition={{ duration: 1 }}
            className="z-[800] origin-bottom bg-[#ffffff]">
            <div className="h-[50vh] w-[100vw]"></div>
          </motion.div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default StartupAnimation;
