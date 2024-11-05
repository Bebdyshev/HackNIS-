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
        className="relative z-10 overflow-hidden pt-[120px] pb-[130px] md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px] md:h-screen"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="text-[50px] font-bold leading-tight text-black dark:text-white sm:text-[70px] sm:leading-tight md:text-[150px] md:leading-tight">
                  Hack
                  <span className="text-[#43C065]">NIS?</span>
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl text-black dark:text-white">
                  In hackathon{' '}
                  <span className="bg-[#30a851] text-white px-[3px] py-[2px] rounded-[5px] inline-block transform rotate-[-2deg]">
                    we trust
                  </span>
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="rounded-sm text-green-500 code text-[40px] pointer flex"
                  >
                    {'>'}SIGN UP<span className={color}>{dots}</span>
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
