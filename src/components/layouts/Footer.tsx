"use client";

import React from "react";
// import { Facebook, Youtube, Twitter, Instagram } from "lucide-react";

const FOOTER_LINKS = {
  Services: [
    "Our Services",
    "Price Trends",
    "Post your Property",
    "Real Estate Investments",
    "Rent Receipt",
    "Customer Service",
    "Sitemap",
  ],
  Company: [
    "About us",
    "Contact us",
    "Terms & Conditions",
    "Feedback",
    "Testimonials",
    "Privacy Policy",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#192025] text-[#97a1a9] text-xs pt-12 pb-8 px-6 md:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Dynamic Multi-column Links */}
        {Object.entries(FOOTER_LINKS).map(([category, links]) => (
          <div key={category} className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">
              {category}
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition-colors block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact and Branding Channel */}
        <div className="space-y-6">
          {/* Contact details */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-sm tracking-wide">
              Contact Us
            </h4>
            <p className="text-white font-semibold">
              Toll Free - xxxx xx xxxx
            </p>
            <p className="text-[11px] text-gray-400">
              9:30 AM to 6:30 PM (Mon-Sun)
            </p>
            <p className="pt-1">
              Email -{" "}
              <a
                href="mailto:feedback@property.com"
                className="text-blue-400 hover:underline"
              >
                feedback@property.com
              </a>
            </p>
          </div>

          {/* Social Profiles Grid */}
          <div className="space-y-2">
            <h4 className="text-white font-semibold">Connect with us</h4>
            <div className="flex items-center space-x-4 text-white">
              <a href="#" className="hover:text-blue-500 transition-colors">
                F
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                Y
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                T
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors">
                I
              </a>
            </div>
          </div>

          {/* Native Stores Badges */}
          {/* <div className="space-y-2">
            <h4 className="text-white font-semibold">Download the App</h4>
            <div className="flex flex-wrap gap-2">
            //   {/* Play Store 
              <a href="#" className="flex items-center bg-black border border-gray-700 rounded px-2.5 py-1 text-white hover:border-gray-500 transition-all w-32">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-full h-auto" />
              </a>
             // {/* App Store 
              <a href="#" className="flex items-center bg-black border border-gray-700 rounded px-2.5 py-1 text-white hover:border-gray-500 transition-all w-32">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="w-full h-auto" />
              </a>
            </div>
          </div> */}
        </div>
      </div>

      {/* Legal & Meta attribution layout segment */}
      <div className="max-w-7xl mx-auto border-t border-gray-800/60 mt-12 pt-6 flex flex-col md:flex-row justify-between items-start gap-4 text-[11px] text-gray-500 leading-relaxed">
        <div className="max-w-2xl space-y-2">
          {/* <p>
            Usage of property.com to upload content showing area in non standard
            units or which enables targeting by religion/community/caste/race is
            prohibited. Please report inappropriate content by writing to us at{" "}
            <a href="#" className="text-blue-400 hover:underline font-medium">
              report abuse
            </a>
            .
          </p> */}
          <p className="text-gray-400">
            All trademarks are the property of their respective owners. <br />
            {/* All rights reserved - Info Edge (India) Ltd. <br />A{" "} */}
            {/* <span className="font-semibold text-white">naukri.com</span> group
            venture */}
          </p>
        </div>
      </div>
    </footer>
  );
}
