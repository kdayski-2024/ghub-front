import React, { useRef } from 'react';

import AccordionIcon from '../../Icons/AccordionIcon/AccordionIcon';
import * as UI from '../../index';
import * as Styled from '../styled';
import { useStep } from '../../../hooks';

const AccordionItem = ({ isExpanded, isOpen, id, item, clickHandler }) => {
  const itemRef = useRef(null);
  const step = useStep();

  return (
    <UI.Animation>
      <Styled.AccordionItem key={id}>
        <UI.Animation delay={step} distance={'50px'}>
          <Styled.Title>
            <UI.Badge>{id + 1}</UI.Badge>
            <UI.H2 style={{ lineHeight: '80%' }}>{item.title}</UI.H2>
          </Styled.Title>
        </UI.Animation>
        <Styled.Content>
          <Styled.Description>
            <UI.Animation delay={step} distance={'50px'}>
              <UI.Paragraph
                size={'large'}
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </UI.Animation>
          </Styled.Description>
          <UI.Animation delay={step} distance={'50px'}>
            <Styled.Quation
              onClick={() => clickHandler(id)}
              expanded={isOpen ? isExpanded : null}
            >
              <Styled.Question>{item.question}</Styled.Question>
              <AccordionIcon expanded={isOpen ? isExpanded : null} />
            </Styled.Quation>
          </UI.Animation>
          <Styled.Collapse isOpen={isOpen} itemRef={itemRef}>
            <Styled.Body ref={itemRef}>
              <UI.Paragraph>{item.answer}</UI.Paragraph>
            </Styled.Body>
          </Styled.Collapse>
        </Styled.Content>
      </Styled.AccordionItem>
    </UI.Animation>
  );
};

export default AccordionItem;
