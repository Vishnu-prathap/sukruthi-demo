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
          <h3 className="our-story-title">Donation Plans</h3>
          <br />
          <p>
            Generally, most of the donations are event-based and sporadic.
            People usually donate to charitable organizations on their
            birthdays/wedding anniversaries or in memory of their elders or on a
            festival, etc. You can also donate for a one-time cataract or heart
            surgery. None of these is wrong but with only these kinds of
            donations, it is difficult for charitable organizations like
            Sukruthi to commit support to poor patients every month, especially
            for those who need long term support, like kidney dialysis. One of
            the children we support is a 3-month-old baby which is suffering
            from chronic kidney disease and needs dialysis till it reaches 4-5
            years when it may opt for a kidney transplant (if at all). The child
            needs to undergo dialysis twice every day, every day of the month,
            every month of the year for at least 4-5 years. Sukruthi supports
            such people on a monthly basis for which we need regular monthly
            donations.
          </p>
          <br />
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
