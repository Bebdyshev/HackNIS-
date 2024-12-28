import React from 'react';

const scheduleData = [
  {
    day: '6 января',
    location: 'НИШ Актобе, кабинеты информатики',
    events: [
      { time: '10:00-11:00', name: 'Регистрация участников' },
      { time: '11:00', name: 'Открытие и оглашение кейсов' },
      { time: '13:30', name: 'Кофе-брейк' },
      { time: '14:00', name: 'Первый поток менторских встреч' },
      { time: '17:00', name: 'Завершение работы в НИШ Актобе' },
    ],
  },
  {
    day: '7 января',
    location: 'Aqtobe IT Hub',
    events: [
      { time: '9:00', name: 'Открытие Aqtobe IT Hub' },
      { time: '10:00', name: 'Второй поток менторских встреч' },
      { time: '12:30', name: 'Кофе-брейк' },
      { time: '16:00', name: 'Кофе-брейк' },
      { time: '16:30', name: 'Третий поток менторских встреч' },
      { time: '19:00', name: 'Завершение работы Aqtobe IT Hub' },
    ],
  },
  {
    day: '8 января',
    location: 'НИШ Актобе, кабинеты информатики',
    events: [
      { 
        time: '9:00', 
        name: 'Открытие НИШ Актобе',
      },
      { 
        time: '9:30', 
        name: 'Четвертый поток менторских встреч (НИШ Актобе)',
      },
      { 
        time: '10:50', 
        name: 'Начало приема презентаций и работ (НИШ Актобе)',
      },
      { 
        time: '11:10', 
        name: 'Конец приема презентаций и работ (НИШ Актобе)',
      },
      { 
        time: '11:20', 
        name: 'Оглашение порядка защиты (НИШ Актобе)',
      },
      { 
        time: '11:30', 
        name: 'Начало защиты (НИШ Актобе) (до 30 команд не более 3+2=5 минут на защиту с вопросами)',
      },
      { 
        time: '13:00', 
        name: 'Окончание защиты и Чай-брейк (НИШ Актобе)',
      },
      { 
        time: '14:00', 
        name: 'Награждение (НИШ Актобе)',
      },
    ],
  },
];

const AboutSectionTwo = () => {
  return (
    <section id="roadmap" className="pt-8">
      <div className="container">
        <div className="text-[40px] md:text-[50px] font-bold mb-8">Расписание</div>
        {scheduleData.map((day, index) => (
          <div key={index} className="mb-10">
            <div className="text-2xl font-bold mb-4">{day.day} </div>
            <div className="text-lg italic mb-4">{day.location}</div>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100 dark:bg-[#43C065]">
                  <th className="border border-[#43C065] px-4 py-2 text-left">Время</th>
                  <th className="border border-[#43C065]  px-4 py-2 text-left">Мероприятие</th>
                </tr>
              </thead>
              <tbody>
                {day.events.map((event, idx) => (
                  <tr key={idx}>
                    <td className="border border-[#43C065] px-4 py-2">{event.time}</td>
                    <td className="border border-[#43C065] px-4 py-2">{event.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSectionTwo;
