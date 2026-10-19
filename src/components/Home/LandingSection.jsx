import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { div } from "framer-motion/client";

const slides = [
  {
    image: "./images/hero_slide01.jpg",
    title: "Premium Catering in Kalyan & Mumbai",
    subtitle: "Discover Exceptional Taste",
    description:
      "Looking for top-tier catering services in Kalyan and Mumbai? We specialize in authentic local and international cuisines, ensuring your event is a success with flawless presentation and taste.",
    theme: "dark",
  },
  {
    image: "./images/hero_slide02.png",
    title: "Wedding Catering in Mumbai & Kalyan",
    subtitle: "Celebrate Your Big Day",
    description:
      "Make your wedding unforgettable with our expert catering services in Kalyan and Mumbai. From elegant sit-down dinners to lavish buffets, we create a dining experience that reflects your style and tradition.",
    theme: "light",
  },
  {
    image: "./images/hero_slide03.jpg",
    title: "Birthday Catering in Kalyan & Mumbai",
    subtitle: "Celebrate in Style",
    description:
      "Planning a birthday party in Kalyan or Mumbai? Our creative menu and personalized service will make your celebration a hit, with delicious treats and a festive vibe.",
    theme: "light",
  },
];

function LandingSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <section className="w-full h-fit p-5">
      <div className="w-full h-[90vh] relative rounded-md overflow-hidden">
        <motion.div
          initial={{ height: "0px" }}
          animate={{ height: "90vh" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full h-full overflow-hidden absolute"
        >
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            effect="fade"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            onSlideChange={handleSlideChange}
            modules={[EffectFade, Autoplay]}
            className="w-full h-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="w-full h-[90vh] flex items-center justify-center relative"
              >
                <div className="absolute w-full h-full overflow-hidden">
                  <img
                    src={slide.image}
                    alt={`${slide.title} - ${slide.subtitle}`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute w-full h-full flex justify-center items-center">
                  <article className="max-w-[1200px] p-5 text-center">
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.3, ease: "easeIn" }}
                    >
                      <h2
                        className="text-[40px] md:text-[100px] font-bold leading-[42px] md:leading-[100px]"
                        style={{
                          color: slide.theme === "dark" ? "#242424" : "white",
                        }}
                      >
                        <span className="italic great-vibes-regular font-normal text-[20px] md:text-[50px] leading-0">
                          {slide.subtitle}
                        </span>
                        <br />
                        {slide.title}
                      </h2>

                      <motion.p
                        className="mt-5 text-[12px] md:text-[18px] max-w-[1000px] mx-auto"
                        style={{
                          color: slide.theme === "dark" ? "#242424" : "white",
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
                      >
                        {slide.description}
                      </motion.p>
                    </motion.div>
                  </article>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

export default LandingSection;
