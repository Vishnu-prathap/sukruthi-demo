import styled from "styled-components";
import { BsCheck2Circle } from "react-icons/bs";

const Background = (props) => {
  return (
    <div className="container ">
      <div className="row mt-5">
        <div className="col-md-2 col-12"></div>
        <div className="col-md-4 col-12 story-text">
          <h3 className="our-story-title">Background</h3>
          <br />
          <p>
            Their journey of Philanthropy started several years ago when they
            celebrated their son’s 3 rd year birthday (2006) in a small
            orphanage along with other small children. The scale of suffering of
            poor people really moved them and exposed them to the harsh reality
            of the outside world. They slowly continued their journey by
            donating small sums of money, books, clothes, etc. to various NGOs.
            And they did not do this alone. Both were blessed with plenty of
            friends and relatives who were equally kind-hearted and joined hands
            with them to participate in various programs to help people living
            in extreme poverty.
          </p>
          <br />
          <p>
            Thereafter, whether it was supporting the education of children,
            providing medicines to old age homes, or organizing fundraising for
            flood relief victims, Kavitha and Nagarajan continued to be involved
            with this act of giving to the underprivileged for many years.
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
