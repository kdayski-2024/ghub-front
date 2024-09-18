import { useEffect, useState } from 'react';
import { isMobile } from '../lib/lib';
import { ANIMATION } from '../models/enum';

const useStep = () => {
  const [step, setStep] = useState(ANIMATION.STEP);
  const mobile = isMobile();

  useEffect(() => {
    if (mobile) setStep(0.1);
  }, [mobile]);

  return step;
};

export default useStep;
