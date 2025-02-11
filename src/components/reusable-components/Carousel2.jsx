import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';
import constants from '../../constants.json';
import defaultCarouselImage from '../../assets/about-us/bg.jpeg';

function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slider, setSliderContent] = useState([
    {
      imageUrl: defaultCarouselImage,
    }
  ]);
  const [qoutes, setQoutes] = useState([{
    "_id": "64c279adee71a3bf7b820b55",
    "content": "There could be no definition of a successful life that does not include service to others.",
    "author": "George H.W. Bush",
    "order": 1,
    "publicView": true,
    "createdAt": "2023-07-27T14:05:33.944Z",
    "updatedAt": "2023-07-27T14:05:33.944Z",
    "__v": 0
  }]);
  const transformQuotes = (quotes) => {
    if (quotes.length === slider.length) return quotes;
    if (quotes.length > slider.length) return quotes.slice(0, slider.length);
    const newQuotes = [...quotes];
    const min = 0;
    const max = qoutes.length - 1;
    const extraQuotes = Array.from({ length: slider.length - quotes.length }, () => {
      return quotes[Math.floor(Math.random() * (max - min) + min)]
    });
    return [...newQuotes, ...extraQuotes];
  }
  const getPublicBgs = () => {
    fetch(constants.baseUrl + "/getpublicbgs", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.status === 201) {
          setSliderContent(data.data);
        }
      });
  };
  const getPublicQoutes = () => {
    fetch(constants.baseUrl + "/getpublicqoutes", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.status === 201) {
          setQoutes(transformQuotes(data.data));
        }
      });
  };

  const goNext = () => {
    setActiveSlide((prevValue) => (prevValue + 1) % slider.length);
  };
  const goPrev = () => {
    setActiveSlide((prevValue) => {
      if (prevValue === 0) {
        return slider.length - 1;
      } else {
        return prevValue - 1;
      }
    });
  };
  useEffect(() => {
    const sliderTimer = setInterval(() => {
      setActiveSlide((prevValue) => {
        return (prevValue + 1) % slider.length;
      });
    }, 5000);
    return () => {
      clearInterval(sliderTimer);
    };
  }, [slider]);
  useEffect(() => {
    getPublicBgs();
  }, []);
  useEffect(() => {
    getPublicQoutes();
  }, [slider]);

  return (
    <MainContainer >
      <InnerContainer >
        <ControllerContainer >
          <LeftController
            onClick={goPrev}
          >
            <IoIosArrowBack color='white' size={40} />
          </LeftController>
          <div onClick={goNext}>
            <RightController
            >
              <IoIosArrowForward color='white' size={40} />
            </RightController>
          </div>
        </ControllerContainer>
        <DotContainer >
          <div style={{ display: "flex", gap: "10px" }}>
            {slider.map((img, idx) => {
              if (activeSlide === idx) {
                return (
                  <ActiveDot
                    key={idx}
                  ></ActiveDot>
                );
              } else {
                return (
                  <Dot
                    key={idx}
                  ></Dot>
                );
              }
            })}
          </div>
        </DotContainer>
        <ImagesContainer >
          {slider.map((img, idx) => {
            return (
              <ImageContainer
                key={idx}
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                <Darker></Darker>
                <QuoteContainer>
                  <Quote>"{qoutes[idx]?.content}"</Quote>
                  <QuoteAuthor>- {qoutes[idx]?.author}</QuoteAuthor>
                </QuoteContainer>
                <Image src={img?.imageUrl} ></Image>
              </ImageContainer>
            );
          })}
        </ImagesContainer>
      </InnerContainer>
    </MainContainer>
  );
}

export default Carousel;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const InnerContainer = styled.div`
  width: 100vw;
  height: 50vh;
  background-color: #ffffff;
  overflow: hidden;
  position: relative;
`;

const ControllerContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  z-index: 10;
`;

const DotContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  z-index: 9;
  padding-bottom: 1rem;
`;

const ImagesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const LeftController = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display:flex;
  align-items:center;
  justify-content:flex-end;
  height:100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.0));
  padding-right: 4rem;
  padding-left: 1rem;
  cursor: pointer;
  @media (max-width: 768px) {
    padding-right: 1rem;
    padding-left: 0.5rem;
  }
`;

const RightController = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display:flex;
  align-items:center;
  justify-content:flex-start;
  height:100%;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.8), transparent);
  padding-right: 1rem;
  padding-left: 4rem;
  cursor: pointer;
  @media (max-width: 768px) {
    padding-right: 0.5rem;
    padding-left: 1rem;
  }
`

const Dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: #ffffff;
  opacity: 0.5;
`;

const ActiveDot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: #ffffff;
  opacity: 1;
`;

const ImageContainer = styled.div`
  min-width: 100%;
  transition: transform 0.5s ease-in-out;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
`;


const Quote = styled.p`
  font-size: 2rem;
  height: auto;
  color: white;
  text-align: left;
  width: 55%;
  font-weight: 700;
  @media (max-width: 992px) {
    font-size: 1.5rem;
    width: 100%;
  }
`;

const QuoteAuthor = styled.p`
  font-size: 2rem;
  height: auto;
  color: white;
  text-align: left;
  width: 50%;
  @media (max-width: 992px) {
    font-size: 1.5rem;
    width: 100%;
  }
`;

const QuoteContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 4rem 10rem;
  @media (max-width: 992px) {
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;


const Darker = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0,0,0,0.4);
  top: 0;
  left: 0;
`;