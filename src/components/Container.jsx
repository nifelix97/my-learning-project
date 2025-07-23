import React from "react";
import Button from "./Button";

const variantClasses = {
  primary: "text-primary-50 hover:bg-primary-300 bg-primary-200",
  secondary: "bg-gray-500 hover:bg-gray-600",
};

export default function () {
  return (
   <div>
     <div className="h-[350px] xs:h-[400px] sm:h-[450px] md:h-[400px] lg:h-[450px] xl:h-[500px] relative">
      <img
        src="https://i.pinimg.com/736x/23/0e/0f/230e0f342d9b4e8d31d8cae95e3e2288.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 xs:px-6 sm:px-8 max-w-7xl">
          <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-2 sm:mb-4 font-medium">The Best WorkSpace in Kigali</h1>
          <div className="flex flex-col xs:flex-row justify-center items-center gap-1 xs:gap-0 mb-1 xs:mb-2">
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-50">
              Professional
            </h1>
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-200">
              , Creative,
            </h1>
          </div>
          <div className="flex flex-col xs:flex-row justify-center items-center gap-1 xs:gap-0 mb-3 sm:mb-4 md:mb-6">
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-200">
              Flexible, Scalable
            </h1>
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-50">
              Workspace
            </h1>
          </div>
          <div className="max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl mx-auto mb-4 sm:mb-6">
            <p>
              <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-2 xs:px-0">
                Discover your ideal workspace with us. Work smart, not hard in
                our fully-equipped office spaces. Elevate your business with
                flexible solutions tailored to your needs. Find your perfect
                office today!
              </p>
            </p>
          </div>
               <div className="mt-4 sm:mt-6">
              <Button label="Explore" variant="primary" />
            </div>
        </div>
      </div>{" "}
    </div>
          <div className="flex flex-col justify-center items-center px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 mt-4 xs:mt-6 sm:mt-8 md:mt-10">
        <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-100 text-center mb-3 xs:mb-4 sm:mb-6 leading-tight max-w-6xl">
          We Offer creative working
          <br className="hidden xs:block" />
          <span className="xs:hidden"> </span>
          environments
        </h1>
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-primary-100 text-center mb-4 xs:mb-6 max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl leading-relaxed">
          Find your perfect workspace. Choose from versatile options
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          tailored to your needs.
        </p>
      </div>
   </div>
  );
}