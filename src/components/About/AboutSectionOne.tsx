const AboutSectionOne = () => {
  return (
    <section id="about" className="pt-5">
      <div className="container">
        <div className="flex">
          <div className="px-4 w-full">
            <div className="mb-12 w-full lg:mb-0" data-wow-delay=".15s">
              
              <div className="border-b border-body-color/[.15] pb-4 dark:border-white/[.15] flex items-center justify-between">
                <p className="code text-black dark:text-white text-[40px] md:text-[80px] lg:text-[150px]">
                  When?
                </p>
                <p className="text-[#43C065] text-[25px] md:text-[50px] lg:text-[75px]">
                  9-10 January
                </p>
              </div>

              <div className="border-b border-body-color/[.15] pb-4 dark:border-white/[.15] flex items-center justify-between">
                <p className="code text-black dark:text-white text-[40px] md:text-[80px] lg:text-[150px]">
                  Where?
                </p>
                <p className="text-[#43C065] text-[25px] md:text-[50px] lg:text-[75px]">
                  NIS PhMD
                </p>
              </div>

              <div className="border-b border-body-color/[.15] pb-4 dark:border-white/[.15] flex items-center justify-between">
                <p className="code text-black dark:text-white text-[40px] md:text-[80px] lg:text-[150px]">
                  How?
                </p>
                <p className="text-[#43C065] text-[25px] md:text-[50px] lg:text-[75px]">
                  In teams of 2-4
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
