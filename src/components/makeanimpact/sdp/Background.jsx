import styled from "styled-components";
import { BsCheck2Circle } from "react-icons/bs";

const Background = (props) => {
  return (
    <div className="container ">
      <div className="row mt-5">
        <div className="col-md-2 col-12"></div>
        <div className="col-md-4 col-12 story-text">
          <h3 className="our-story-title">
            What Are Systematic Donation Plans (SDPs)?
          </h3>
          <br />
          <p>
            You might have heard of Systematic Investment Plans (SIP).
            Systematic Donation Plans (SDP) work exactly like SIPs.
          </p>
          <br />
          <p>
            Our systematic Donation Plan is a regular donations plan that allows
            donors to automatically give a specified amount to Sukruthi each
            month. Systematic Donation Plans are very similar to you saving
            every month to buy a car or home in the future.
          </p>{" "}
          <br />
          <p>
            Food for thought - we earn a salary every month, we earn interest on
            our deposits every month, we pay our mobile, electricity, water
            bills every month, we pay our EMIs every month - then why not donate
            to charity every month?
          </p>
        </div>
        <div className="col-md-4 col-12 mt-3">
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

export default Background;
