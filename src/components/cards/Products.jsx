import React from 'react'

export default function Products({
    name,
    image,
    description,
    className,
    children
}) {
  return (
    <div className="bg-slate-100/80 flex flex-col border border-neutral-400 shadow-md rounded-md w-full max-w-sm mx-auto h-auto min-h-[400px] xs:min-h-[420px] sm:min-h-[440px] md:min-h-[460px] items-center transition-transform hover:scale-105">
      <div className="w-full h-48 xs:h-52 sm:h-56 md:h-60 overflow-hidden rounded-t-md">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform hover:scale-110" 
        />
      </div>

      <div className="flex flex-col gap-3 px-4 xs:px-5 sm:px-6 md:px-7 py-3 xs:py-4 flex-grow">
        <div className="text-center">
          <h1 className="text-primary-50 font-bold text-sm xs:text-base sm:text-lg md:text-xl text-center">
            {name}
          </h1>
          <hr className='border-t-2 xs:border-t-3 border-primary-50 mx-auto w-12 xs:w-16 sm:w-20 rounded-md mt-2'/>
        </div>
        
        <div className="flex-grow">
          <p className="text-xs xs:text-sm sm:text-base text-center text-slate-500 leading-relaxed line-clamp-4">
            {description}
          </p>
        </div>
        
        <div className="mt-auto pt-2">
          <h2 className='text-primary-50 font-bold text-sm xs:text-base sm:text-lg text-center cursor-pointer hover:text-primary-100 transition-colors'>
            Learn More
          </h2>
        </div>
      </div>
      
      {children && (
        <div className={`px-4 xs:px-5 sm:px-6 md:px-7 pb-3 xs:pb-4 ${className}`}>
          {children}
        </div>
      )}
    </div>
  );
}