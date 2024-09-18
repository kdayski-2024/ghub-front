import { useState, useEffect } from 'react';
import * as Styled from './styled';

function VerticalSlider({ slides, setActiveBg }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [appearDirection, setAppearDirection] = useState('bottom');

  useEffect(() => {
    setActiveBg(currentSlide);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  useEffect(() => {
    function handleWheel(event) {
      if (scrollTimeout) {
        return;
      }
      setScrollTimeout(
        setTimeout(() => {
          setScrollTimeout(null);
        }, 500)
      );
      if (event.deltaY > 0) {
        setAppearDirection('bottom');
        if (currentSlide === slides.length - 1) {
          setCurrentSlide(0);
        } else {
          setCurrentSlide((prevCurrentSlide) => prevCurrentSlide + 1);
        }
      } else {
        setAppearDirection('top');
        if (currentSlide === 0) {
          setCurrentSlide(slides.length - 1);
        } else {
          setCurrentSlide((prevCurrentSlide) => prevCurrentSlide - 1);
        }
      }
    }
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentSlide, slides, scrollTimeout]);

  return (
    <>
      {slides.map((Content, index) => (
        <Styled.Slide
          className={index === currentSlide ? 'active' : ''}
          appearDirection={appearDirection}
          key={index}
        >
          {<Content />}
        </Styled.Slide>
      ))}
      <Styled.Pagination>
        {slides.map((_, index) => (
          <Styled.PaginationItem
            className={index === currentSlide ? 'active' : ''}
            key={index}
          />
        ))}
      </Styled.Pagination>
    </>
  );
}

export default VerticalSlider;
