import { useDebugValue, useEffect, useState } from "react";
import constants from "../../constants.json";
import styled from "styled-components";

const Carousel = () => {
  useEffect(() => {
    getPublicBgs();
    getPublicQoutes();
  }, []);
  const [counter, setCounter] = useState(0);
  const [qCounter, setQCounter] = useState(0);
  const [slider, setSliderContent] = useState([]);
  const [qoutes, setQoutes] = useState([]);
  const [Slider, setSlider] = useState(styled.div`
    background-image: url("/assets/about-us/bg.jpeg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    background-color: rgba(96, 96, 96, 0.8);
    background-blend-mode: multiply;

    text-align: start;
    padding-left: 10vw;
    -webkit-transition: opacity 2s ease-in;
    -moz-transition: opacity 2s ease-in;
    -o-transition: opacity 2s ease-in;
    -ms-transition: opacity 2s ease-in;
    transition: opacity 2s ease-in;
  `);

  const [author, setAuthor] = useState("Andrew Carnegie");
  const [qoute, setQoute] = useState(
    "One of the chief obstacles which the philanthropist meets in his efforts to do real and permanent good in this world is the practice of indiscriminate giving."
  );
  setTimeout(() => {
    incrementSlider();
  }, 3500);

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
          console.log(data);
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
          console.log(data);
          setQoutes(data.data);
        }
      });
  };

  const incrementSlider = () => {
    changeQoute();
    if (counter < slider.length - 1) {
      setSlider(styled.div`
        background-image: url(${slider[counter].imageUrl});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        background-color: rgba(96, 96, 96, 0.8);
        background-blend-mode: multiply;
        text-align: start;
        padding-left: 10vw;
        -webkit-transition: opacity 2s ease-in;
        -moz-transition: opacity 2s ease-in;
        -o-transition: opacity 2s ease-in;
        -ms-transition: opacity 2s ease-in;
        transition: opacity 2s ease-in;
      `);
      setCounter(counter + 1);
    } else {
      setCounter(0);
      setSlider(styled.div`
        background-image: url(${slider[0].imageUrl});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        background-color: rgba(96, 96, 96, 0.8);
        background-blend-mode: multiply;
        text-align: start;
        padding-left: 10vw;
        -webkit-transition: opacity 2s ease-in;
        -moz-transition: opacity 2s ease-in;
        -o-transition: opacity 2s ease-in;
        -ms-transition: opacity 2s ease-in;
        transition: opacity 2s ease-in;
      `);
    }
  };
  const changeQoute = () => {
    if (qCounter < qoutes.length - 1) {
      setAuthor(qoutes[qCounter].author);
      setQoute(qoutes[qCounter].content);
      setQCounter(counter + 1);
    } else {
      setAuthor(qoutes[0].author);
      setQoute(qoutes[0].content);
      setQCounter(0);
    }
  };

  return (
    <Slider className="row mt-3">
      <div className="col-lg-7 col-md-8 col-12">
        <h3 className="mt-5 qoute">{qoute}</h3>
        <p className="qoute-author">- {author}</p>
      </div>
    </Slider>
  );
};

export default Carousel;
