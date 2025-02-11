import styled from "styled-components";
import values from "../../data/values.json";

const OurValues = (props) => {
  return (
    <div className="container impact-container ">
      <div className="row justify-content-center">
        <div className="col-12">
          <Title>Our Values</Title>
        </div>
        <div className="col-md-6">
          <p>
            These are the core beliefs of Sukruthi that inspire and guide us in
            choosing the way we operate and deal with people.
          </p>
        </div>
      </div>
      <div className="row justify-content-center ">
        {values.map((value) => {
          return (
            <div className="col-xl-3 col-lg-4 mt-3 ">
              {/* <div className="card value-card h-100" style={{ width: "auto" }}>
                <div className="card-body"> */}
              <div className="h-100 mt-3">
                <div className="value-icon-wrapper">
                  <img src={value.icon} className="values-icon" />
                </div>
                <h5 className="card-title initiatives-title">{value.title}</h5>
                <p className="card-text initiatives-description">
                  {value.description}
                </p>
              </div>
            </div>
            //   </div>
            // </div>
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
export default OurValues;
