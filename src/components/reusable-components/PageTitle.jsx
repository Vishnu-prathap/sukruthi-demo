import styled from "styled-components";
const PageTitle = (props) => {
  return (
    <>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </>
  );
};

const Title = styled.h1`
  margin-top: 4rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: #121212;
  margin-bottom: 1rem;
  text-align: center;
  @media (max-width: 992px) {
    font-size: 2rem;
  }
`;
const Description = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: #383838;
  margin-bottom: 1rem;
  text-align: center;

  text-justify: inter-word;
  @media (max-width: 992px) {
    font-size: 0.8rem;
  }
`;
export default PageTitle;
