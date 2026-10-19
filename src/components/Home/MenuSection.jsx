import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import SectionHeading from "../ui/SectionHeading";
import { Link } from "react-router-dom";

function MenuSection() {
  return (
    <section className="min-h-[50vh] mt-10">
      <MenuHeaderContainer />
    </section>
  );
}

const MenuHeaderContainer = () => {
  const words = useMemo(() => ["Your menu", "Your event", "Your taste"], []);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedWord, setTypedWord] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (typedWord.length < words[currentWordIndex].length) {
        setTypedWord((prev) => prev + words[currentWordIndex][prev.length]);
      } else {
        setIsTyping(false); // Stop typing when word is complete
      }
    }, 100); // Adjust speed of typing

    return () => clearInterval(typingInterval);
  }, [typedWord, currentWordIndex, words]);

  useEffect(() => {
    const wordChangeInterval = setInterval(() => {
      if (!isTyping) {
        setIsTyping(true);
        setTypedWord(""); // Reset the word typing
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(wordChangeInterval);
  }, [isTyping, currentWordIndex, words]);

  return (
    <div className="relative h-fit">
      {/* Background Animation */}
      <motion.div
        initial={{ height: "0px" }}
        whileInView={{ height: "500px" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-full h-[500px] about-us_background"
      ></motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative w-full h-[350px] md:h-[270px] p-5 text-center"
      >
        <div className="div flex justify-center items-center gap-5">
          <SectionHeading title={"A World of Flavors"} />
        </div>
        <p className="text-[2.5rem] font-bold leading-[2.7rem] h-[180px] md:h-fit">
          Explore Our Signature Dishes or <br />
          Customize{" "}
          <span className="typing-effect text-[#d35400]">{typedWord}</span>
        </p>
        <div className="mt-10">
          <Link
            to={"/menu"}
            className="bg-black text-white px-10 py-3 mt-5 rounded-md hover:bg-[#d35400] transition duration-300 "
          >
            View Menu
          </Link>
        </div>
      </motion.div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative mt-20 md:mt-5"
      >
        <Marquee pauseOnHover={true} speed={80}>
          <AboutUsImageMarquee />
        </Marquee>
      </motion.div>
    </div>
  );
};

const AboutUsImageMarquee = () => {
  return (
    <div className="mr-5">
      <div className="flex justify-center items-center gap-5">
        <SmallImageContainer
          imgSrc={
            "https://goodfoodconcept.in/wp-content/uploads/2024/07/post-80-copyrighta.jpg"
          }
        />
        <LargeImageContainer
          imgSrc={
            "https://goodfoodconcept.in/wp-content/uploads/2024/07/post-45-copyrightb.jpg"
          }
        />
        <SmallImageContainer
          imgSrc={
            "https://goodfoodconcept.in/wp-content/uploads/2024/07/post-80-copyrightb.jpg"
          }
        />
        <LargeImageContainer
          imgSrc={
            "https://goodfoodconcept.in/wp-content/uploads/2024/07/post-45-copyrighta.jpg"
          }
        />
        <SmallImageContainer
          imgSrc={
            "https://goodfoodconcept.in/wp-content/uploads/2024/07/post-80-copyrightc.jpg"
          }
        />
        <LargeImageContainer
          imgSrc={
            "https://goodfoodconcept.in/wp-content/uploads/2024/07/post-45-copyrightc.jpg"
          }
        />
      </div>
    </div>
  );
};

const SmallImageContainer = ({ imgSrc }) => {
  return (
    <div>
      <img src={imgSrc} alt="" className="w-[343.333px]" />
    </div>
  );
};

const LargeImageContainer = ({ imgSrc }) => {
  return (
    <div>
      <img src={imgSrc} alt="" className="h-[400px] w-[343.333px]" />
    </div>
  );
};

export default MenuSection;
