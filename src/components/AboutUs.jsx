import React from "react";
import Button from "./Button";

export default function Aboutus() {
  return (
    <div className="py-6 xs:py-8 sm:py-10 md:py-12">
      <div className="flex justify-center items-center px-4 xs:px-6 sm:px-8 md:px-12 mb-4 xs:mb-6 gap-2 xs:gap-3">
        <div className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-primary-50 rounded-full border border-primary-50 flex items-center justify-center">
          <div className="h-2 w-2 xs:h-3 xs:w-3 sm:h-4 sm:w-4 bg-primary-50 rounded-full"></div>
        </div>
        <div className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 border border-primary-50 rounded-full"></div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start px-4 xs:px-6 sm:px-8 md:px-12 mb-6 gap-6 lg:gap-8">
        
        <div className="w-full lg:max-w-2xl text-center lg:text-left px-2 xs:px-4 sm:px-6 md:px-10">
          <h1 className="text-base xs:text-lg sm:text-xl font-bold mb-3 xs:mb-4 text-primary-50">
            About Us
          </h1>
          <p className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-primary-100 font-bold leading-tight">
            We offer creative working environments that suit your business
          </p>
        </div>

        <div className="hidden lg:block border-l-2 h-32 xs:h-36 sm:h-40 border-primary-100 mx-4"></div>
        <div className="lg:hidden border-t-2 w-20 xs:w-24 sm:w-32 border-primary-100 my-2"></div>

        <div className="w-full lg:max-w-2xl text-center lg:text-left px-2 xs:px-4 sm:px-6 md:px-10">
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-primary-100 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit torquent,
            conubia leo rutrum praesent dui turpis lobortis, vulputate
            pellentesque tristique primis cum tincidunt placerat maecenas, velit
            metus fermentum eget
          </p>
          
          <div className="mt-4 xs:mt-6 sm:mt-8">
            <Button label="More About Us" variant="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}