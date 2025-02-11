import styled from "styled-components";
import { BsCheck2Circle } from "react-icons/bs";

const Why = (props) => {
  return (
    <div className="container ">
      <div className="row mt-5">
        <div className="col-md-2 col-12"></div>
        <div className="col-md-4 col-12 story-text">
          <h3 className="our-story-title">
            Why Sukruthi? How Is It Different From Other NGOs?
          </h3>
          <br />
          <p>
            There are hundreds of charitable organizations in our country which
            are doing a splendid job in various areas.{" "}
          </p>
          <br />
          <p>
            <strong>
              “We like to do things a bit differently at Sukruthi,”
            </strong>{" "}
            says Nagarajan. “And that is, focus on quality and not quantity.
            While it is highly desirable that we are able to support thousands
            of needy people, we want to focus on sustaining long-term support
            for a few hundred people rather than provide one-time support to
            thousands of people.{" "}
          </p>
          <br />
          <p>
            For instance, a person may need to undergo a one-time cataract
            surgery while another person may need dialysis for a period of 5
            years before undergoing a kidney transplant. While both are
            absolutely genuine and important to those two people, our priority
            would be towards the person needing dialysis for 5 years”.
          </p>
          <br />
          <p>
            We use a highly personalized approach to help needy patients. We
            have started our focus on Cancer and Chronic Kidney Disease to start
            with and plan to expand our reach to support patients with eyes,
            heart, and other ailments as well over a period of time.
          </p>
        </div>
        <div className="col-md-4 col-12 mt-5 pt-5">
          <img
            src="/assets/about-us/our-bg.webp"
            className="our-bg-photo mt-5"
          />
        </div>
        <div className="col-md-2 col-12"></div>
      </div>
    </div>
  );
};

export default Why;
