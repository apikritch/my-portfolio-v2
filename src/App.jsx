import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import StartupAnimation from "./components/StartupAnimation";

import "./App.scss";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";

const App = () => {
  const [showSectionOne, setShowSectionOne] = useState(false);

  useEffect(() => {
    document.title = "Apikritch | Portfolio"; // Set your desired title here
  }, []);

  return (
    <React.Fragment>
      <StartupAnimation
        showSectionOne={showSectionOne}
        setShowSectionOne={setShowSectionOne}
      />
      {showSectionOne && (
        <motion.div>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
        </motion.div>
      )}
    </React.Fragment>
  );
};

export default App;
