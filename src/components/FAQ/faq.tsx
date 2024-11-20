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
      question: "Я ничего не умею и не знаю, зачем мне это?",
      answer:
        "(!) Не проблема! Мы объясним, зачем участвовать в хакатонах. Приходи на 10 мастер-классов, и мы тебя научим основам, с которыми ты сможешь создать настоящий проект.",
      highlightedWords: ["10 мастер-классов", "настоящий проект"],
    },
    {
      question: "Чему я научусь?",
      answer:
        "(!) Ты узнаешь, как создавать приложения и игры, сайты, какие технологии существуют для разработки продуктов, и как их применять на реальных примерах от 10 наших экспертов.",
      highlightedWords: ["приложения", "игры", "технологии", "эксперты"],
    },
    {
      question: "Зачем мне участвовать в хакатоне и на мастер-классах?",
      answer:
        "(!) В первую очередь для саморазвития. Ты приобретёшь необходимые навыки на интенсиве, а на хакатоне будут ценные призы и мерч.",
      highlightedWords: ["саморазвития", "интенсиве", "призы"],
    },
    {
      question: "И сколько это стоит?",
      answer:
        "(!) При регистрации до 16 декабря: 350 тенге за участника. Это позволит нам обеспечить вас кофе-брейками с печеньками и мерчем. А средства спонсоров пойдут на призы!",
      highlightedWords: ["350 тенге", "кофе-брейками", "мерчем"],
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
    <section id="faq" className="pt-5">
      <div className="container">
        <div className="code px-4">
          <h2 className="text-[40px] md:text-[50px] font-bold">FAQ</h2>
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
