"use client";

import React, { useState, useEffect } from "react";

const FAQSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set the isClient state to true once the component is mounted on the client
    setIsClient(true);
  }, []);

  const faqs = [
    {
      question: "Я не очень хорошо могу делать сайты и что-то разрабатывать",
      answer:
        "(!) Выбирай вторую категорию, которая не требует специальных технических навыков. Нужна только презентация и документация. Получи полный опыт участия в хакатоне без специальных навыков",
      highlightedWords: ["не требует", "презентация", "документация", "полный опыт"],
    },
    {
      question: "Что я получу?",
      answer:
        "(!) Призовой фонд- 1 000 000 тенге.  Мы разыгрываем курсы для обучения в IT, мерч HackNIS? (футболки, стикеры), мерч Aqtobe hub, ну и конечно же наличные деньги",
      highlightedWords: ["1 000 000 тенге", "курсы", "мерч", "наличные деньги"],
    },
    {
      question: "Зачем мне участвовать в хакатоне?",
      answer:
        "(!) Получить новый опыт и познакомиться с новыми людьми. Сделать хороший продукт и внедрить его в реальный бизнес, улучшив жизнь работников и клиентов.",
      highlightedWords: ["новый опыт", "новыми людьми", "реальный бизнес"],
    },
    {
      question: "И сколько это стоит?",
      answer:
        "(!) 750 тенге за участника. Это позволит нам обеспечить вас кофе-брейками с печеньками и мерчем. А средства спонсоров пойдут на призы! Не переживайте, вы обязательно получите опыт и курсы, которые стоят куда больше 750 тенге!",
      highlightedWords: ["750 тенге", "кофе-брейками", "призы"],
    },
  ];

  const highlightText = (text: string, words: string[]) => {
    let highlightedText = text;
    words.forEach((word) => {
      const regExp = new RegExp(`(${word})`, "gi"); // регулярное выражение для поиска слова
      highlightedText = highlightedText.replace(
        regExp,
        `<span class="text-white font-bold dark:text-white highlight">$1</span>`
      );
    });
    return highlightedText;
  };

  if (!isClient) {
    return null; 
  }

  return (
    <section id="questions" className="pt-5">
      <div className="container">
        <div className="px-4 text-center py-5">
          <h2 className="text-[40px] md:text-[60px] font-bold">FAQ - Ответы на вопросы</h2>
        </div>
        <div className="space-y-2">
        <div className="p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-2 text-[#2ed55a] pb-2">(?) Кто участвует?</h3>
          <p className="text-[20px]">
            (!) Две категории: <br />
            <p className="text-[20px] ml-4">
              {"> "} 
              <span className="highlight w-fit h-fit">Младшая</span> — ученики 7-9 классов <br />
              {"> "} 
              <span className="highlight w-fit h-fit">Старшая</span> — 10-12 классов и студенты.
            </p>
          </p>
        </div>
          {faqs.map((faq, index) => (
            <div key={index} className="p-4 rounded-lg shadow-sm ">
              <h3 className="text-xl font-bold mb-2 text-[#2ed55a] pb-2">{"(?) "}{faq.question}</h3>
              <p
                className="text-xl leading-[1.5]"
                dangerouslySetInnerHTML={{
                  __html: highlightText(faq.answer, faq.highlightedWords),
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
