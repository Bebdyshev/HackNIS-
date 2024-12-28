const AboutSectionOne = () => {
  return (
    <section id="about" className="pt-5">
      <div className="container">
        <div className="flex">
          <div className="px-4 w-full">
            <div className="mb-12 w-full lg:mb-0" data-wow-delay=".15s">
              
              <div className="border-b border-body-color/[.15] py-2 dark:border-white/[.15] flex items-center justify-between">
                <p className="code text-black dark:text-white text-[40px] md:text-[80px] lg:text-[150px]">
                  Kогда?
                </p>
                <p className="text-[#2ed55a] text-[25px] md:text-[50px] lg:text-[75px]">
                  6-8 Января
                </p>
              </div>

              <div className="border-b border-body-color/[.15] py-2 dark:border-white/[.15] flex items-center justify-between">
                <p className="code text-black dark:text-white text-[40px] md:text-[80px] lg:text-[150px]">
                  Где?
                </p>
                <p className="text-[#2ed55a] text-[25px] md:text-[50px] lg:text-[75px]">
                  НИШ ФМН Актобе
                </p>
              </div>

              <div className="border-b border-body-color/[.15] py-2 dark:border-white/[.15] flex items-center justify-between">
                <p className="code text-black dark:text-white text-[40px] md:text-[80px] lg:text-[150px]">
                  Kак?
                </p>
                <p className="text-[#2ed55a] text-[22px] md:text-[50px] lg:text-[75px]">
                  В командах из 1-4
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
