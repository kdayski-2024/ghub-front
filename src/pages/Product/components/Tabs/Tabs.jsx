import React, { useState } from 'react';
import * as Styled from './styled';
import * as UI from '../../../../components/index';
import { COLORS } from '../../../../models/colors';

const Tabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState(0);
  console.log(product.properties);
  const tabContents = [
    <Styled.TabItem>
      <Styled.Title>
        <UI.Paragraph color={COLORS.BLACK} size={'large'}>
          Описание
        </UI.Paragraph>
      </Styled.Title>
      <UI.Paragraph color={COLORS.BLACK} size={'medium'}>
        {product.desc}
      </UI.Paragraph>
    </Styled.TabItem>,
    <Styled.TabItem>
      <Styled.Title>
        <UI.Paragraph color={COLORS.BLACK} size={'large'}>
          Характеристики
        </UI.Paragraph>
      </Styled.Title>
      <Styled.CharacteristicContent>
        {product.properties &&
          product.properties.map((i, index) => (
            <Styled.CharacteristicItem key={index}>
              <Styled.CharacteristicName>
                <UI.Paragraph color={COLORS.BLACK} size={'medium'}>
                  {i.title} ({i.um})
                </UI.Paragraph>
              </Styled.CharacteristicName>
              <Styled.Characteristic>
                <UI.Paragraph color={COLORS.BLACK} size={'medium'}>
                  {i.value}
                </UI.Paragraph>
              </Styled.Characteristic>
            </Styled.CharacteristicItem>
          ))}
      </Styled.CharacteristicContent>
    </Styled.TabItem>,
    <Styled.TabItem>
      <Styled.Title>
        <UI.Paragraph color={COLORS.BLACK} size={'large'}>
          С этим товаром покупают
        </UI.Paragraph>
      </Styled.Title>
    </Styled.TabItem>,
    <Styled.TabItem>
      <Styled.Title>
        <UI.Paragraph color={COLORS.BLACK} size={'large'}>
          Похожие товары
        </UI.Paragraph>
      </Styled.Title>
    </Styled.TabItem>,
    <Styled.TabItem>
      <Styled.Title>
        <UI.Paragraph color={COLORS.BLACK} size={'large'}>
          Отзывы
        </UI.Paragraph>
      </Styled.Title>
    </Styled.TabItem>,
  ];
  const tabHeaders = [
    'Описание',
    'Характеристики',
    'С этим товаром покупают',
    'Похожие товары',
    'Отзывы',
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <Styled.Tabs>
      <Styled.TabHeaders>
        {tabHeaders.map((tab, index) => (
          <Styled.TabHeader
            key={index}
            isActive={activeTab === index}
            onClick={() => handleTabClick(index)}
          >
            <UI.Paragraph size={'small'} color={COLORS.GRAY}>
              {tab}
            </UI.Paragraph>
          </Styled.TabHeader>
        ))}
      </Styled.TabHeaders>
      <Styled.TabContent>{tabContents[activeTab]}</Styled.TabContent>
    </Styled.Tabs>
  );
};

export default Tabs;
