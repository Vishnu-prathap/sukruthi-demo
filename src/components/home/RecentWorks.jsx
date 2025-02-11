import styled from "styled-components";
import initiatives from "../../data/initiatives.json";
const RecentWorks = () => {
  return (
    <div className="container">
      <div className="row text-center justify-content-center">
        <div className="col-12">
          <Title>Our Initiatives</Title>
        </div>
        {initiatives.map((data) => {
          return (
            <div className="col-md-5">
              <div className="card initiative-card " style={{ width: "auto" }}>
                <img
                  className="card-img-top initiative-img"
                  src={data.imageUrl}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title initiatives-title">{data.title}</h5>
                  <p className="card-text initiatives-description">
                    {data.description}
                  </p>
                  <a href="#" className="btn btn-danger">
                    Know more
                  </a>
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
export default RecentWorks;
