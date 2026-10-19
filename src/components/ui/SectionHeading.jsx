import React from "react";
import { motion } from "framer-motion";

function SectionHeading({ title }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="w-[50px]"
      >
        <img src="./images/line-divider-left.png" alt="Line Divider" />
      </motion.div>
      <h4 className="great-vibes-regular text-[2rem] text-[#444]">{title}</h4>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="w-[50px]"
      >
        <img src="./images/line-divider-right.png" alt="Line Divider" />
      </motion.div>
    </>
  );
}

export default SectionHeading;
