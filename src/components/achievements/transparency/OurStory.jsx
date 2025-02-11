import styled from "styled-components";
import AreaOfSpending from "./AreaOfSpending";
import SourceOfFunding from "./SourceOfFunding";
import IncomeVOutcome from "./IncomeVOutcome";
const OurStory = (props) => {
  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-10 story-text">
          <br />
          <p>
            Thousands of people want to be involved with charitable
            organizations through donations. But there is a serious concern for
            the donors as whether those organizations spend the entire
            donation/charity amount on the cause they are promoting. So these
            days, people want to see if their money is well utilized & spent for
            the right cause.
          </p>
          <br />
          <p>
            {" "}
            At Sukruthi, we want to practice philanthropy with the highest
            levels of professional and ethical standards while ensuring complete
            transparency. This allows us to create long term and sustained
            trusting relationships with both our donors and beneficiaries.
          </p>
          <br />
          <p>
            {" "}
            We believe it is our sacred duty to give confidence to our donors
            that their money is being put to good use, the one It was intended
            for. We want you and every member of the public to know as much as
            possible about how we operate and how carefully and effectively we
            use your donations.
          </p>
          <br />
          <p>
            {" "}
            The below graphs show you how every rupee donated to Sukruthi is
            being utilized for supporting the needs of the vulnerable sections
            of the society.
          </p>
        </div>
      </div>
      <div className="row justify-content-center text-center">
        <div className="col-md-6 col-12 ">
          <AreaOfSpending />
        </div>

        <div className="col-md-6 col-12 ">
          <SourceOfFunding />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4 col-12 justify-content-center income-v-outcome-graph">
          <IncomeVOutcome />
        </div>
      </div>
      <Button
        onClick={() => window.location.replace("/make-an-impact/donation")}
      >
        <span>Donate Now</span>
      </Button>
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
