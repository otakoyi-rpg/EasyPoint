import React, { useState } from 'react';
import './Accordion.scss';
import AccordionItem from './AccordionItem';

const Accordion = ({data}) => {
  const [currentItem, setCurrentItem] = useState();

  const handleOpen = (title, close) => {
    if (close) {
      setCurrentItem(null);
    } else {
      setCurrentItem(title);
    }
  };

  const arr = [
    {
      title: 'What is a mockup?',
      content:
        'Please contact us at team@lunaris.jp to request a cancellation for your account. ',
    },
    {
      title: 'Can I cancel EasyPoints after the mockup or integration?',
      content:
        'Please contact us at team@lunaris.jp to request a cancellation for your account. ',
    },
    {
      title: 'Is there anything I should not touch after integration?',
      content:
        'Please contact us at team@lunaris.jp to request a cancellation for your account.  team@lunaris.jp to request a cancellation for your account. ',
    },
    {
      title: 'What should I not touch during integration?',
      content: 'Please contact us at team@lunaris.jp to request a cancellation for your account. ',
    },
    {
      title: 'How long does a custom integration take?',
      content: 'Please contact us at team@lunaris.jp to request a cancellation for your account. ',
    },
    {
      title: 'How long does a custom integration take it?',
      content: 'Please contact us at team@lunaris.jp to request a cancellation for your accountw. ',
    },
  ];

  return (
    <div className="accordion" data-aos="fade-up" data-aos-delay="600">
      {data.map((el) => (
        <AccordionItem
          key={Math.random()}
          el={el}
          currentItem={currentItem}
          handleOpen={handleOpen}
        />
      ))}
    </div>
  );
};

export default Accordion;
