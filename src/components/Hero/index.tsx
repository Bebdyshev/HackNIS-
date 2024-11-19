"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Hero = () => {
  const [dots, setDots] = useState("_");
  const [color, setColor] = useState("text-green-500");

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prevColor) => (prevColor === "text-green-500" ? "text-transparent" : "text-green-500"));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px] md:h-screen"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center sm:mt-[150px] md:mt-[80px]">
                <h1 className="text-[80px] mt-[150px] font-bold leading-tight text-black dark:text-white sm:text-[100px] sm:leading-tight md:text-[150px] md:leading-tight md:mt-[10px]">
                  Hack
                  <span className="text-[#43C065]">NIS?</span>
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl text-black dark:text-white">
                  In hackathon{' '}
                  <span className="bg-[#30a851] text-white px-[3px] py-[2px] rounded-[5px] inline-block transform rotate-[-2deg]">
                    we trust
                  </span>
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-[200px] pb-[150px] sm:pb-[180px] md:mt-[50px]">
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfQM3VXCw3EO5DLD1vhL5q5VgBscEJzcnumoLXQHQw7HoKprw/viewform?usp=sf_link"
                    className="rounded-sm text-green-500 code text-[40px] pointer flex"
                  >
                    {'>'}ЗАРЕГАЙСЯ<span className={color}>{dots}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
