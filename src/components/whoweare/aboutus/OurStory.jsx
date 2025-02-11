import styled from "styled-components";
import { BsCheck2Circle } from "react-icons/bs";

const OurStory = (props) => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-2 col-12"></div>

        <div className="col-md-4 col-12 mt-5">
          <img
            src="/assets/about-us/story.jpeg"
            className="our-story-photo mt-5"
          />
        </div>
        <div className="col-md-4 col-12 story-text">
          <h3 className="our-story-title">Our Story</h3>
          <br />
          <p>
            Sukruthi Charitable Trust was founded on 22 June 2021 by a normal
            middle-class couple Kavitha Nagarajan and BS Nagarajan as a kind
            idea of philanthropy for healthcare.
          </p>
          <br />
          <p>
            <BsCheck2Circle /> Background
            <br />
            <br /> <BsCheck2Circle /> Birth of Sukruthi
            <br />
            <br /> <BsCheck2Circle /> Why Sukruthi? How is it different from
            other NGOs?
            <br />
            <br /> <BsCheck2Circle /> Our Pledge
          </p>

          <Button
            onClick={() => window.location.replace("/make-an-impact/donation")}
          >
            <span>Donate Now</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
const Button = styled.button`
  margin-top: 20px;
  margin-bottom: 40px;
  min-width: 200px;
  min-height: 60px;
  border: none !important;
  background-color: #b43c3a;
  span {
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
  }
`;
export default OurStory;
