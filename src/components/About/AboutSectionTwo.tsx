import React from 'react';

const scheduleData = [
  {
    id: 1,
    name: 'Предрегистрация',
    time: '20 Нояб - 16 Дек',
    isColored: false,
    day: 1,
  },
  {
    id: 2,
    name: 'Мастер-классы',
    time: '25 Нояб - 22 Дек',
    isColored: false,
    day: 1,
  },
  {
    id: 3,
    name: 'Анонс кейсов',
    time: '23 Дек',
    isColored: false,
    day: 2,
  },
  {
    id: 4,
    name: 'Розыгрыш мерча',
    time: '23-28 Дек',
    isColored: false,
    day: 2,
  },
  {
    id: 5,
    name: 'Хакатон',
    time: '7-8 Янв',
    isColored: false,
    day: 3,
  },
];

const AboutSectionTwo = () => {
  const dayOneEvents = scheduleData.filter(event => event.day === 1);
  const dayTwoEvents = scheduleData.filter(event => event.day === 2);
  const dayThreeEvents = scheduleData.filter(event => event.day === 3);

  const renderEvents = (events) => (
    <ul className="space-y-4 list-none">
      {events.map((event) => (
        <li
          key={event.id}
          className="flex justify-between items-center pl-4 relative"
        >
          <span
            className={`text-lg ${
              event.isColored ? 'text-[#43C065]' : 'text-black dark:text-white'
            } text-[20px]`}
          >
            {'> '}{event.name}
          </span>
          <span className="text-[#2ed55a] text-[20px]">{event.time}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section id="roadmap" className="pt-5 pb-5">
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          <div className="px-4 w-full lg:w-1/2">
            <div className="pb-6 w-full lg:mb-0" data-wow-delay=".15s">
              <div className="pb-4">
                <p className="code text-black dark:text-white text-[40px] md:text-[70px] lg:text-[120px]">
                  Roadmap
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="px-2 w-full lg:w-1/2 lg:pl-10 space-y-8">
            {/* Day 1 */}
            <div>
              <p className="text-2xl font-bold mb-2">20 ноября - 22 декабря</p>
              {renderEvents(dayOneEvents)}
            </div>

            {/* Day 2 */}
            <div>
              <p className="text-2xl font-bold mb-2">23 - 28 декабря</p>
              {renderEvents(dayTwoEvents)}
            </div>

            {/* Day 3 */}
            <div>
              <p className="text-2xl font-bold mb-2 ">7-8 января</p>
              {renderEvents(dayThreeEvents)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
