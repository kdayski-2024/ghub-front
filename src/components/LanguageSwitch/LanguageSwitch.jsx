import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import * as TymioUI from '../index';
import * as Styled from './styled';
import { COLORS } from '../../models/colors';
import Selector from './components/Selector';

const languages = {
  en: { nativeName: 'ENGLISH' },
  ru: { nativeName: 'RUSSIAN' },
  es: { nativeName: 'español' },
  fr: { nativeName: 'Français' },
};

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState(i18n.language);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedLanguage = localStorage.getItem('i18nextLng');
    if (storedLanguage) {
      setActiveLanguage(storedLanguage);
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  const handleLanguageChange = (language) => {
    setActiveLanguage(language);
    i18n.changeLanguage(language);

    const pathParts = location.pathname.split('/');
    if (Object.keys(languages).includes(pathParts[1])) {
      pathParts[1] = language;
    } else {
      pathParts.unshift(language);
    }

    const newPath = pathParts.join('/');
    navigate(newPath);
  };

  return (
    <Styled.LanguageSwitch>
      <Selector
        options={languages}
        placeholder={'Select a language'}
        valueSelected={languages[activeLanguage].nativeName}
        onSelectAction={handleLanguageChange}
      />
    </Styled.LanguageSwitch>
  );
};

export default LanguageSwitch;
