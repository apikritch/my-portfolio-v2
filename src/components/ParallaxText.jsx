import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import "./ParallaxText.scss";

const ParallaxText = (props) => {
  const { baseVelocity, dataArray } = props;
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${wrap(42.6, -7.41, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });
  return (
    <div className="parallax">
      <motion.div
        className="scroller"
        style={{ x }}>
        {dataArray.map((item, index) => (
          <span
            key={index}
            className="text-[#cecece] text-[5rem] font-light">
            {item}
          </span>
        ))}
        {dataArray.map((item, index) => (
          <span
            key={index}
            className="text-[#cecece] text-[5rem] font-light">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ParallaxText;
