import styled from "styled-components";
import { BsCheck2Circle } from "react-icons/bs";

const Pledge = (props) => {
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
          <h3 className="our-story-title">Our Pledge</h3>
          <br />
          <p>
            We have pledged a minimum of Rs. 25 lakhs of our personal wealth to
            be given to charity over 3 years. And we are making this pledge
            publicly not for recognition but for two important reasons–
            <br />
            1. To be committed & accountable to ourselves so that we don’t go
            back on our words someday in future.
            <br />
            2. To inspire and motivate others to think on the same lines and
            keep aside a portion of our earnings for charity.
          </p>
          <br />
          <p>
            Nagarajan adds{" "}
            <b>
              “Giving is not only our duty but also a privilege. And we will do
              everything in our power to be transparent about our contributions”
            </b>
            .
          </p>
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
export default Pledge;
