import React, { useState } from 'react';

import * as Styled from './styled';

import AccordionItem from './components/AccordionCasesItem';

const AccordionCases = ({ faqList }) => {
  const [openId, setId] = useState(null);
  const [isExpanded, setExpanded] = useState(false);

  const clickHandler = (id) => {
    if (id === openId) {
      setId(null);
      setExpanded(false);
    } else {
      setId(id);
      setExpanded(true);
    }
  };

  return (
    <Styled.AccordionCases>
      {faqList.map((item, id) => (
        <AccordionItem
          key={id}
          item={item}
          id={id}
          isExpanded={isExpanded}
          clickHandler={clickHandler}
          isOpen={id === openId}
        />
      ))}
    </Styled.AccordionCases>
  );
};

export default AccordionCases;
