import styled from "styled-components";
import CountUp, { useCountUp } from "react-countup";

import { useEffect, useState } from "react";
import constants from "../../constants.json";
const OurImpact = (props) => {
  const [impacts, setImpacts] = useState([]);
  useEffect(() => {
    getImpactStats();
  }, []);
  const getImpactStats = () => {
    fetch(constants.baseUrl + "/getimpact", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.status === 201) {
          setImpacts(data.data);
        }
      });
  };

  useCountUp({
    ref: "counter",

    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div className="container impact-container ">
      <div className="row">
        <div className="col-12">
          <Title>Our Impact</Title>
        </div>
      </div>
      <div className="row">
        {impacts.map((impact) => {
          return (
            <div className="col-md-3">
              <div className="card impact-card mt-3" style={{ width: "auto" }}>
                <div className="card-body">
                  <h5 className="card-title initiatives-title">
                    <CountUp
                      start={1}
                      end={impact.value}
                      duration={2}
                      enableScrollSpy
                    />
                    <span id="counter" />
                  </h5>
                  <p className="card-text initiatives-description">
                    {impact.name}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
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
export default OurImpact;
