import React from "react";
import { RxLayers } from "react-icons/rx";

export default function Benefits() {
  return (
    <div className="py-4 xs:py-6 sm:py-8 md:py-10">
      <div className="flex flex-col justify-center items-center px-4 xs:px-6 sm:px-8 md:px-10 mb-6 xs:mb-8">
        <h1 className="text-lg xs:text-xl sm:text-2xl mb-2 xs:mb-3 text-primary-50">Your Benefits</h1>
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 xs:mb-5 sm:mb-6 text-primary-100 text-center">
          Why Choose Us
        </h1>
        <p className="text-sm xs:text-base sm:text-lg md:text-xl text-primary-100 text-center mb-6 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-4xl leading-relaxed">
          Unleash your productivity with our premium workspace solutions. Elevate your work game and join the winning team today.
        </p>
      </div>

      <div className="px-4 xs:px-6 sm:px-8 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
          
          <div className="flex flex-col gap-4 xs:gap-6">
            <div className="flex flex-col justify-center items-center bg-secondary-50 h-48 xs:h-52 sm:h-60 md:h-64 p-4 xs:p-5 sm:p-6 rounded-lg">
              <div className="mx-auto text-center rounded-full bg-primary-50 p-4 xs:p-6 sm:p-8 mb-2 xs:mb-3">
                <RxLayers className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl" />
              </div>
              <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-100 font-bold mb-1 xs:mb-2 text-center">
                Creative Space
              </h1>
              <p className="text-xs xs:text-sm sm:text-base text-primary-100 text-center px-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>

            <div className="flex flex-col justify-center items-center bg-secondary-50 h-48 xs:h-52 sm:h-60 md:h-64 p-4 xs:p-5 sm:p-6 rounded-lg">
              <div className="mx-auto text-center rounded-full bg-primary-50 p-4 xs:p-6 sm:p-8 mb-2 xs:mb-3">
                <RxLayers className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl" />
              </div>
              <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-100 font-bold mb-1 xs:mb-2 text-center">
                Professional Space
              </h1>
              <p className="text-xs xs:text-sm sm:text-base text-primary-100 text-center px-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>

            <div className="flex flex-col justify-center items-center bg-secondary-50 h-48 xs:h-52 sm:h-60 md:h-64 p-4 xs:p-5 sm:p-6 rounded-lg">
              <div className="mx-auto text-center rounded-full bg-primary-50 p-4 xs:p-6 sm:p-8 mb-2 xs:mb-3">
                <RxLayers className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl" />
              </div>
              <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-100 font-bold mb-1 xs:mb-2 text-center">
                Flexible Space
              </h1>
              <p className="text-xs xs:text-sm sm:text-base text-primary-100 text-center px-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center order-fourth lg:order-none mb-6 lg:mb-0">
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-secondary-50 rounded-lg overflow-hidden h-200">
              <img 
                src="https://i.pinimg.com/736x/23/0e/0f/230e0f342d9b4e8d31d8cae95e3e2288.jpg" 
                alt="Workspace environment" 
                className="w-full h-full xs:h-full sm:h-full md:h-full lg:h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 xs:gap-6">
            <div className="flex flex-col justify-center items-center bg-secondary-50 h-48 xs:h-52 sm:h-60 md:h-64 p-4 xs:p-5 sm:p-6 rounded-lg">
              <div className="mx-auto text-center rounded-full bg-primary-50 p-4 xs:p-6 sm:p-8 mb-2 xs:mb-3">
                <RxLayers className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl" />
              </div>
              <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-100 font-bold mb-1 xs:mb-2 text-center">
                Scalable Space
              </h1>
              <p className="text-xs xs:text-sm sm:text-base text-primary-100 text-center px-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>

            <div className="flex flex-col justify-center items-center bg-secondary-50 h-48 xs:h-52 sm:h-60 md:h-64 p-4 xs:p-5 sm:p-6 rounded-lg">
              <div className="mx-auto text-center rounded-full bg-primary-50 p-4 xs:p-6 sm:p-8 mb-2 xs:mb-3">
                <RxLayers className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl" />
              </div>
              <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-100 font-bold mb-1 xs:mb-2 text-center">
                Modern Space
              </h1>
              <p className="text-xs xs:text-sm sm:text-base text-primary-100 text-center px-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>

            <div className="flex flex-col justify-center items-center bg-secondary-50 h-48 xs:h-52 sm:h-60 md:h-64 p-4 xs:p-5 sm:p-6 rounded-lg">
              <div className="mx-auto text-center rounded-full bg-primary-50 p-4 xs:p-6 sm:p-8 mb-2 xs:mb-3">
                <RxLayers className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl" />
              </div>
              <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-100 font-bold mb-1 xs:mb-2 text-center">
                Comfortable Space
              </h1>
              <p className="text-xs xs:text-sm sm:text-base text-primary-100 text-center px-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}