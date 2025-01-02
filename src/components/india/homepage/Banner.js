'use client';
import { useRef } from 'react';

const Banner = () => {
  const ref = useRef(null);

  return (
    <div className="relative">
      <div
        className="relative mt-20 bg-no-repeat bg-cover transition-all duration-500 ease-in-out overflow-hidden
          min-h-[600px] md:min-h-[calc(100vh-5rem)] flex items-center justify-center"
        style={{
          backgroundImage: 'url("/assets/images/india/home/banner.png")',
          backgroundPosition: 'center',
        }}
      >
        {/* Unique Hexagonal Pattern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-opacity='0.05' fill='%23ffffff'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        ></div>

        {/* Unique Animated Accent Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-orange/40 to-transparent animate-slide-right"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-primary/40 to-transparent animate-slide-left"></div>
          <div className="absolute top-0 right-0 h-1/3 w-px bg-gradient-to-b from-transparent via-orange/40 to-transparent animate-slide-down"></div>
          <div className="absolute bottom-0 left-0 h-1/3 w-px bg-gradient-to-t from-transparent via-primary/40 to-transparent animate-slide-up"></div>
        </div>

        {/* Content with Unique Layout */}
        <div className="relative w-full text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center mx-auto max-w-4xl text-center">
              <div className="relative mb-6 md:mb-8 p-1">
                <div className="absolute inset-0 bg-gradient-to-r from-orange/20 via-primary/20 to-orange/20 blur-xl"></div>
                <span className="relative block text-sm md:text-base font-medium text-orange/90 mb-3">
                  Official Portal
                </span>
                <h1 className="relative text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                  Secure Your{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-orange via-white to-primary bg-clip-text text-transparent">
                      Indian Visa
                    </span>
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange via-primary to-orange opacity-50 blur-sm"></span>
                  </span>
                </h1>

                {/* Unique Hexagonal Frame */}
                <div className="absolute -inset-4 md:-inset-6 border border-white/10 transform rotate-45 -z-10"></div>
                <div className="absolute -inset-4 md:-inset-6 border border-white/10 transform -rotate-45 -z-10"></div>
              </div>

              <p className="text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-200 max-w-3xl backdrop-blur-sm bg-black/5 p-4 rounded-lg">
                Experience a seamless and secure visa application process
                through our official portal. We ensure swift processing and
                reliable service for your journey to India.
              </p>

              {/* Unique Floating Elements */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-orange/20 to-transparent rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Announcement Bar */}
      <div className="absolute bottom-0 w-full bg-gradient-to-r from-primary/95 via-primary/90 to-primary/95 backdrop-blur-lg border-t border-white/10">
        <div className="container mx-auto py-3 md:py-4">
          <div className="flex items-center justify-between text-white">
            <div className="w-full overflow-hidden">
              <marquee
                className="text-xs sm:text-sm md:text-base font-medium tracking-wide"
                behavior="scroll"
                direction="left"
                scrollamount="5"
              >
                <span className="inline-flex items-center">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 mr-2 md:mr-4 bg-gradient-to-r from-orange to-primary rounded-full animate-pulse"></span>
                  Avail Indian Visa plus services through &quot;Official app
                  Indian Visa Su-Swagatam&quot; mobile App for 60 countries
                  <span className="mx-4 md:mx-8 text-orange">•</span>
                  One stop solution for all Visa related services
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 ml-2 md:ml-4 bg-gradient-to-r from-primary to-orange rounded-full animate-pulse"></span>
                </span>
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
