import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function QuickLinks() {
  return (
    <div className="py-6 xs:py-8 sm:py-10 md:py-12">
      <div className="flex justify-center items-center px-4 xs:px-6 sm:px-8 md:px-10 mb-6 xs:mb-8">
        <hr className="border-t-2 border-primary-50 w-full max-w-sm xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-6xl rounded-md" />
      </div>

      <div className="px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 sm:gap-10">
          
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 xs:gap-3 sm:gap-4 mb-4 xs:mb-6">
              <LuLayoutDashboard className="text-2xl xs:text-3xl sm:text-4xl text-primary-50" />
              <h1 className="font-bold text-2xl xs:text-3xl sm:text-4xl text-primary-100">Business</h1>
              <h1 className="font-bold text-2xl xs:text-3xl sm:text-4xl text-primary-50">Cafe</h1>
            </div>
            
            <div className="mb-4 xs:mb-6">
              <p className="text-sm xs:text-base sm:text-lg text-primary-100 leading-relaxed max-w-md mx-auto md:mx-0">
                Discover your ideal workspace with us. Work smart, not hard in our fully-equipped office spaces.
              </p>
            </div>
            
            <div className="flex gap-3 xs:gap-4 justify-center md:justify-start">
              <a 
                href="#" 
                className="w-10 h-10 xs:w-12 xs:h-12 rounded-full border-2 border-primary-50 flex items-center justify-center hover:bg-primary-50 hover:text-white transition-colors group"
              >
                <FaFacebookF className="text-primary-50 group-hover:text-white text-sm xs:text-base" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 xs:w-12 xs:h-12 rounded-full border-2 border-primary-50 flex items-center justify-center hover:bg-primary-50 hover:text-white transition-colors group"
              >
                <FaTwitter className="text-primary-50 group-hover:text-white text-sm xs:text-base" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 xs:w-12 xs:h-12 rounded-full border-2 border-primary-50 flex items-center justify-center hover:bg-primary-50 hover:text-white transition-colors group"
              >
                <FaLinkedinIn className="text-primary-50 group-hover:text-white text-sm xs:text-base" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 xs:w-12 xs:h-12 rounded-full border-2 border-primary-50 flex items-center justify-center hover:bg-primary-50 hover:text-white transition-colors group"
              >
                <FaInstagram className="text-primary-50 group-hover:text-white text-sm xs:text-base" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <div className="mb-4 xs:mb-6">
              <h1 className="font-bold text-xl xs:text-2xl sm:text-3xl text-primary-100 mb-2 xs:mb-3">Quick Links</h1>
              <hr className="border-t-2 border-primary-50 w-24 xs:w-32 sm:w-40 rounded-md mx-auto md:mx-0" />
            </div>
            
            <div className="flex flex-col gap-2 xs:gap-3 sm:gap-4">
              <a href="#" className="text-sm xs:text-base sm:text-lg text-primary-100 hover:text-primary-50 hover:underline transition-colors">
                Home
              </a>
              <a href="#" className="text-sm xs:text-base sm:text-lg text-primary-100 hover:text-primary-50 hover:underline transition-colors">
                Space
              </a>
              <a href="#" className="text-sm xs:text-base sm:text-lg text-primary-100 hover:text-primary-50 hover:underline transition-colors">
                About
              </a>
              <a href="#" className="text-sm xs:text-base sm:text-lg text-primary-100 hover:text-primary-50 hover:underline transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="text-center md:text-left lg:col-span-1 md:col-span-2 lg:col-span-1">
            <div className="mb-4 xs:mb-6">
              <h1 className="font-bold text-xl xs:text-2xl sm:text-3xl text-primary-100 mb-2 xs:mb-3">Contact Us</h1>
              <hr className="border-t-2 border-primary-50 w-24 xs:w-32 sm:w-40 rounded-md mx-auto md:mx-0" />
            </div>
            
            <div className="flex flex-col gap-2 xs:gap-3 sm:gap-4 text-sm xs:text-base sm:text-lg text-primary-100">
              <p>
                <span className="font-medium">Location:</span> Kigali, Rwanda
              </p>
              <p>
                <span className="font-medium">Email:</span> businesscafe@info.com
              </p>
              <p>
                <span className="font-medium">Phone:</span> +250783787817
              </p>
              <p>
                <span className="font-medium">Address:</span> 
                <a 
                  href="https://www.google.com/maps?q=123+Business+St,+Kigali,+Rwanda" 
                  className="text-primary-50 hover:underline ml-1 transition-colors"
                >
                  View Location on Google Maps
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}