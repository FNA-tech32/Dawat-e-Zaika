import React from "react";

function ContactHeader() {
  return (
    <section className="w-full relative min-h-[300px] flex justify-center items-center">
      {" "}
      {/* Added min-height */} {/* Dynamically adjust the height */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src="https://www.elior.in/sites/www.elior.in/files/styles/hero_large/public/2024-02/contact-us.jpg.webp?itok=UVzyRTEq"
          alt=""
          className="w-full object-center object-cover h-full"
        />
      </div>
      {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <div className="relative max-w-[1200px] w-full mx-auto h-full px-5 py-10 md:p-5">
        <div className="w-full h-full flex flex-col justify-center items-start">
          <h3 className="text-[3.5rem] leading-[3.6rem] font-bold text-white">
            Get In Touch With Us
          </h3>
          <div className="w-[100px] h-[1px] bg-white my-5 rounded-full"></div>
          <p className="text-[1rem] text-white">
            Dawat-e-Zaika <br />
            <a
              href="mailto:hello@dawatezaika.com"
              className="transition-all duration-300 hover:underline"
            >
              hello@dawatezaika.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactHeader;
