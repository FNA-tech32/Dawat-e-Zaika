import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-[#E8E8E8] py-10 px-5 text-[#333] mt-10">
      <section className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {/* Logo and description */}
        <div className="col-span-1 lg:col-span-2">
          <div className="w-[180px]">
            <img
              src="./images/logo.png"
              alt="Dawat-e-Zaika"
              className="w-full h-auto"
            />
          </div>
          <p className="mt-5 text-sm leading-relaxed">
            Dawat-e-Zaika serves weddings, parties, and events in Kalyan and
            Mumbai.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Say Hello!</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a
                href="mailto:hello@dawatezaika.com"
                className="hover:underline"
              >
                hello@dawatezaika.com
              </a>
            </li>
            <li>
              <a href="tel:+919820145678" className="hover:underline">
                +91 98201 45678
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:text-[#751416]">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#751416]">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#751416]">
                Twitter
              </a>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <p className="text-sm">
            214, Station Road, Kalyan West, Thane, Maharashtra 421301
          </p>
        </div>
      </section>

      <div className="text-center text-xs mt-10 text-gray-500">
        © {new Date().getFullYear()} Dawat-e-Zaika. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
