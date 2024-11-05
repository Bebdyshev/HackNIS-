import scheduleData from './scheduleData';

const AboutSectionTwo = () => {
  const dayOneEvents = scheduleData.filter(event => event.day === 1);
  const dayTwoEvents = scheduleData.filter(event => event.day === 2);

  const renderEvents = (events) => (
    <ul className="space-y-4 list-none ">
      {events.map((event) => (
        <li
          key={event.id}
          className="flex justify-between items-center pl-4 relative"
        >
          
          <span className={`text-lg ${event.isColored ? 'text-[#43C065]' : 'text-black dark:text-white'} text-[20px]`}>
            {'> '}{event.name}
          </span>
          
          <span className="text-[#43C065] text-[20px]">{event.time}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section id="agenda" className="pt-5">
      <div className="container">
        <div className="flex">
          <div className="px-4 w-full">
            <div className="mb-12 w-full lg:mb-0 flex" data-wow-delay=".15s">
              <div className="pb-4 w-1/2 ">
                <p className="code text-black dark:text-white text-[40px] md:text-[70px] lg:text-[120px]">
                  Agenda
                </p>
                <p className="text-[#43C065] text-[20px] md:text-[25px] lg:text-[30px]">
                  9-10 January
                </p>
              </div>
              
              {/* Schedule Content */}
              <div className="pb-4 w-1/2 p-10 space-y-8">
                {/* Day 1 */}
                <div>
                  <p className="text-2xl font-bold mb-2">Thursday, 9 January</p>
                  {renderEvents(dayOneEvents)}
                </div>

                {/* Day 2 */}
                <div>
                  <p className="text-2xl font-bold mb-2">Friday, 10 January</p>
                  {renderEvents(dayTwoEvents)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
