import React, { useEffect, useState } from 'react';
import logoSrc from '../../../img/logo.svg';
import { PreloaderService } from '../../../services';
import * as Styled from './styled';

const Preloader = () => {
  const [logo, setLogo] = useState(logoSrc);

  useEffect(() => {
    const img = new Image();
    img.src = logo;
    setLogo(logo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let preloader = document.getElementById('preloader');
    setTimeout(() => {
      preloader.classList.add('preloader-hidden');
    }, 1500);

    setTimeout(() => {
      PreloaderService.close();
    }, 1800);

    setTimeout(() => {
      preloader.classList.add('d-none');
    }, 2500);
  }, []);

  return (
    <Styled.Preloader id="preloader">
      <img src={logo} alt="" width={300} height={100} />
    </Styled.Preloader>
  );
};

export default Preloader;
