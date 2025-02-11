import Brief from "./Brief";
import RecentWorks from "./RecentWorks";
import Donate from "./Donate";
import OurImpact from "./Impact";
import OurValues from "./Values";
import Testinomials from "./Testinomials";
import Content from "../achievements/storiesofgood/Content";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home-1">
        <Brief />
        <RecentWorks />
        <Donate />
      </div>
      <div className="home-2">
        <OurImpact />
        <OurValues />
        <Testinomials />
        <div className="row text-center justify-content-center">
          <div className="col-12">
            <Title>Stories of Good</Title>
          </div>
        </div>
        <Content home={true} />
        <div className="row text-center justify-content-center mt-3 mb-5">
          <Button onClick={(e) => navigate("/achievements/stories-of-good")}>
            <span>Read More</span>
          </Button>
        </div>
      </div>
    </>
  );
};
const Title = styled.h1`
  margin-top: 2rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: #121212;
  margin-bottom: 1rem;
  text-align: center;
  @media (max-width: 992px) {
    font-size: 2rem;
  }
`;
const Button = styled.button`
  width: 220px;
  height: 60px;
  background-color: #bd0814;
  border: solid;
  border-color: #ffffff;
  border-width: 3px;
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  transition-duration: 0.5s;

  &:hover {
    background-color: #9c020c;
    width: 230px;
  }
`;
export default Home;
