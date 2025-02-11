import styled from "styled-components";
import { BsCheck2Circle } from "react-icons/bs";

const Birth = (props) => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-2 col-12"></div>

        <div className="col-md-4 col-12 mt-5 pt-5">
          <img
            src="/assets/about-us/story.jpeg"
            className="our-story-photo mt-5"
          />
        </div>
        <div className="col-md-4 col-12 story-text">
          <h3 className="our-story-title">Birth of Sukruthi</h3>
          <br />
          <p>
            During the Covid aid and relief work, they realized that innumerable
            people in India are deprived of basic essentials like food, shelter,
            education, and healthcare. But many of us are fortunate enough to
            have access to all these things needed for a fulfilling life. And
            more importantly, collectively we have significant resources at our
            disposal to easily meet the most basic needs of India’s poorest
            people many times over.
          </p>
          <br />
          <p>
            Philanthropy without scale and sustainability is like any other bad
            business that will simply wither & lose momentum. This is what led
            to the birth of the Sukruthi Charitable Trust.
          </p>
          <br />
          <h5>
            <b>Sukruthi means doing good.</b>
          </h5>
          <p>
            Bhagavad Gita warns us{" "}
            <strong>
              ” That charity is noble, of the highest quality (Satvik) where the
              giver does not expect anything in return and does not do it for
              personal pride and gain. Donations must go for a good cause, and
              those responsible (for administrating) are dedicated people of
              integrity.”
            </strong>
          </p>
          <br />
          <p>
            Kavitha says{" "}
            <strong>
              “We are not doing this because of any kind of guilt or any need to
              create a public image for ourselves – we are not into public life,
              we are not celebrities. We are like any one of you and would like
              to remain so. But we are very passionate and strongly believe that
              personal wealth can / should be used constructively to solve the
              fundamental problems of mankind”.
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Birth;
