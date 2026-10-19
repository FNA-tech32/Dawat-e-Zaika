import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <section className="w-full min-h-[50vh] mt-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="w-[400px] h-[400px] absolute top-[13%] md:top-[15%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1] opacity-20"
      >
        <img src="/images/logo.png" alt="" />
      </motion.div>
      <div className="max-w-[1000px] mx-auto text-center  p-5">
        {/* Section Title */}
        <div className="flex justify-center items-center gap-5">
          <SectionHeading title={"About us"} />
        </div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-[2rem] leading-[2rem] font-semibold"
        >
          Welcome to Dawat-e-Zaika – The Best Catering Service in
          Mumbai & Kalyan
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="mt-5 text-[14px] md:text-[16px] text-[#666]"
        >
          At <strong>Dawat-e-Zaika</strong>, we are passionate about
          creating unforgettable culinary experiences in <strong>Mumbai</strong>{" "}
          and <strong>Kalyan</strong>. Whether you're hosting a grand wedding, a
          corporate event, or a private party, our expert chefs and professional
          team will ensure that your event is a resounding success.
          <br />
          <br />
          Our catering services offer a diverse menu that includes traditional
          Indian delicacies and global cuisines, prepared using the freshest
          ingredients. With years of experience and a commitment to excellence,
          we tailor our services to meet your unique needs and preferences.
          Discover why Dawat-e-Zaika is the go-to choice for premium
          catering in Kalyan and Mumbai. Let us bring taste and elegance to your
          next event!
        </motion.p>
      </div>
      <AboutUsImageContainer />
    </section>
  );
}

const AboutUsImageContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20 p-5">
      <Link to={"/menu"}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full h-[600px] md:h-full rounded-md overflow-hidden relative group cursor-pointer"
        >
          <img
            src="https://img.freepik.com/free-photo/side-view-people-celebrating-tamil-new-year_23-2151210764.jpg"
            alt=""
            className="h-full w-full object-center object-cover absolute top-0 left-0"
          />
          <div className="relative z-1 w-full h-full bg-red-400/70 p-10 flex opacity-0 hover:opacity-100 transition-all duration-400">
            <p className="text-[1.4rem] font-semibold absolute top-0 opacity-0 text-white group-hover:opacity-100 group-hover:top-10  transition-all duration-400">
              01.
            </p>
          </div>
          <p className="text-[1.4rem] font-semibold absolute bottom-10 text-[#181818] group-hover:bottom-20 group-hover:text-white left-10 transition-all duration-400 z-10">
            Wedding
          </p>
          <span className="text-[1.5rem] font-semibold absolute bottom-0 left-10 opacity-0 text-white group-hover:opacity-100 group-hover:bottom-10 transition-all duration-400 z-10 great-vibes-regular">
            Catering
          </span>
        </motion.div>
      </Link>

      <div className="w-full h-full grid grid-rows-2 gap-5 rounded-md overflow-hidden">
        {/* card 2 */}
        <Link to={"/menu"}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full h-[300px] rounded-md overflow-hidden relative group cursor-pointer"
          >
            <img
              src="./images/aboutUs/corporate-parties.jpg"
              alt=""
              className="h-full w-full object-center object-cover absolute top-0 left-0"
            />
            <div className="relative z-1 w-full h-full bg-red-400/70 p-10 flex opacity-0 hover:opacity-100 transition-all duration-400">
              <p className="text-[1.4rem] font-semibold absolute top-0 opacity-0 text-white group-hover:opacity-100 group-hover:top-10  transition-all duration-400">
                02.
              </p>
            </div>
            <p className="text-[1.4rem] font-semibold absolute bottom-10 text-white group-hover:bottom-20 group-hover:text-white left-10 transition-all duration-400 z-10">
              Corporate
            </p>
            <span className="text-[1.5rem] font-semibold absolute bottom-0 left-10 opacity-0 text-white group-hover:opacity-100 group-hover:bottom-10 transition-all duration-400 z-10 great-vibes-regular">
              Catering
            </span>
          </motion.div>
        </Link>

        {/* card 3*/}
        <Link to={"/menu"}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full h-[300px] rounded-md overflow-hidden relative group cursor-pointer"
          >
            <img
              src="./images/aboutUs/birthdayParty.jpg"
              alt=""
              className="h-full w-full object-center object-cover absolute top-0 left-0"
            />
            <div className="relative z-1 w-full h-full bg-red-400/70 p-10 flex opacity-0 hover:opacity-100 transition-all duration-400">
              <p className="text-[1.4rem] font-semibold absolute top-0 opacity-0 text-white group-hover:opacity-100 group-hover:top-10  transition-all duration-400">
                03.
              </p>
            </div>
            <p className="text-[1.4rem] font-semibold absolute bottom-10 text-white group-hover:bottom-20 group-hover:text-white left-10 transition-all duration-400 z-10">
              Birthday Party
            </p>
            <span className="text-[1.5rem] font-semibold absolute bottom-0 left-10 opacity-0 text-white group-hover:opacity-100 group-hover:bottom-10 transition-all duration-400 z-10 great-vibes-regular">
              Catering
            </span>
          </motion.div>
        </Link>
      </div>

      {/* col 3 */}
      <Link to={"/menu"}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full h-[600px] md:h-full rounded-md overflow-hidden relative group cursor-pointer"
        >
          <img
            src="https://img.freepik.com/free-photo/side-view-people-celebrating-tamil-new-year_23-2151210764.jpg"
            alt=""
            className="h-full w-full object-center object-cover absolute top-0 left-0"
          />
          <div className="relative z-1 w-full h-full bg-red-400/70 p-10 flex opacity-0 hover:opacity-100 transition-all duration-400">
            <p className="text-[1.4rem] font-semibold absolute top-0 opacity-0 text-white group-hover:opacity-100 group-hover:top-10  transition-all duration-400">
              04.
            </p>
          </div>
          <p className="text-[1.4rem] font-semibold absolute bottom-10 text-[#181818] group-hover:bottom-20 group-hover:text-white left-10 transition-all duration-400 z-10">
            Wedding
          </p>
          <span className="text-[1.5rem] font-semibold absolute bottom-0 left-10 opacity-0 text-white group-hover:opacity-100 group-hover:bottom-10 transition-all duration-400 z-10 great-vibes-regular">
            Catering
          </span>
        </motion.div>
      </Link>

      {/* col 4 */}
      <div className="w-full h-full grid grid-rows-2 gap-5 rounded-md overflow-hidden">
        {/* card 5 */}
        <Link to={"/menu"}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full h-[300px] rounded-md overflow-hidden relative group cursor-pointer"
          >
            <img
              src="./images/aboutUs/outdoorEvents.jpg"
              alt=""
              className="h-full w-full object-center object-cover absolute top-0 left-0"
            />
            <div className="relative z-1 w-full h-full bg-red-400/70 p-10 flex opacity-0 hover:opacity-100 transition-all duration-400">
              <p className="text-[1.4rem] font-semibold absolute top-0 opacity-0 text-white group-hover:opacity-100 group-hover:top-10  transition-all duration-400">
                05.
              </p>
            </div>
            <p className="text-[1.4rem] font-semibold absolute bottom-10 text-[#181818] group-hover:bottom-20 group-hover:text-white left-10 transition-all duration-400 z-10">
              Outdoor events
            </p>
            <span className="text-[1.5rem] font-semibold absolute bottom-0 left-10 opacity-0 text-white group-hover:opacity-100 group-hover:bottom-10 transition-all duration-400 z-10 great-vibes-regular">
              Catering
            </span>
          </motion.div>
        </Link>

        {/* card 6 */}
        <Link to={"/menu"}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full h-[300px] rounded-md overflow-hidden relative group cursor-pointer"
          >
            <img
              src="https://img.freepik.com/free-photo/side-view-people-celebrating-tamil-new-year_23-2151210764.jpg"
              alt=""
              className="h-full w-full object-center object-cover absolute top-0 left-0"
            />
            <div className="relative z-1 w-full h-full bg-red-400/70 p-10 flex opacity-0 hover:opacity-100 transition-all duration-400">
              <p className="text-[1.4rem] font-semibold absolute top-0 opacity-0 text-white group-hover:opacity-100 group-hover:top-10  transition-all duration-400">
                06.
              </p>
            </div>
            <p className="text-[1.4rem] font-semibold absolute bottom-10 text-[#181818] group-hover:bottom-20 group-hover:text-white left-10 transition-all duration-400 z-10">
              Wedding
            </p>
            <span className="text-[1.5rem] font-semibold absolute bottom-0 left-10 opacity-0 text-white group-hover:opacity-100 group-hover:bottom-10 transition-all duration-400 z-10 great-vibes-regular">
              Catering
            </span>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
