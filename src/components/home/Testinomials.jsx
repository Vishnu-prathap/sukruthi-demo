import styled from "styled-components";
import constants from "../../constants.json";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Testinomials = () => {
  const navigate = useNavigate();
  const [testinomials, setTestinomials] = useState([]);
  useEffect(() => {
    getTestinomials();
  }, []);
  const getTestinomials = () => {
    fetch(constants.baseUrl + "/getpublictestinomials", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if ((data.status = 201)) {
          setTestinomials(data.data);
        }
      });
  };
  return (
    <div className="container">
      <div className="row text-center justify-content-center">
        <div className="col-12">
          <Title>What people are saying about Sukruthi</Title>
        </div>
      </div>
      <div className="row  justify-content-center mt-3 mb-5">
        {testinomials.map((testinomial, index) => {
          if (index < 2) {
            return (
              <div className="col-12 col-lg-6">
                <div className="card testinominals-card  mt-4">
                  <div className="card-body testinomials-body">
                    <div className="row">
                      <div className="col-8">
                        <p class="card-text ">{testinomial.content}</p>
                      </div>
                      <div className="col-4">
                        <img
                          src={testinomial.imageUrl}
                          className="testinomials-img"
                        />
                      </div>
                    </div>
                    <div className="row mt-2 testinomial-designation">
                      <div className="col-12">
                        <span class="card-author h5">{testinomial.name}</span>
                        <br />
                        <span className="card-designation h6">
                          {testinomial.designation}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            return <></>;
          }
        })}
      </div>
      <div className="row text-center justify-content-center mt-3 mb-5">
        <Button onClick={(e) => navigate("/achievements/testimonials")}>
          <span>Read More</span>
        </Button>
      </div>
    </div>
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
export default Testinomials;
