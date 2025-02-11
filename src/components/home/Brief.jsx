import styled from "styled-components";
const Brief = () => {
  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <Title>Welcome to Sukruthi Charitable Trust</Title>
          <Description>
            <b>Sukruthi means "doing good".</b> It symbolizes a noble gesture.
            It's a space that thrives on kindness and compassion, an initiative
            to save the lives of the deprived.
            <br />
            <br />
            The health of a nation depends critically on its citizens having
            access to an equitable, affordable and accountable healthcare
            system. While India is one of the fastest-growing economies in the
            world, it is also one of the most unequal countries. The richest are
            getting richer at a much faster pace while the poor are still
            struggling to earn a minimum wage and access quality education and
            healthcare services.
            <br />
            <br />
            The people, especially the rich have an obligation to help those
            born into the cycle of poverty.{" "}
            <b>That's what Sukruthi aims to achieve.</b>
            <br />
            <br />
            Sukruthi was founded because there is a real opportunity to address
            the health inequality in India by making sure that irrespective of
            whether a person resides in a village or a big city, whether
            literate or not, whether employed or not, he or she has the chance
            to live a healthy productive life.
          </Description>
        </div>
      </div>
    </div>
  );
};
const Title = styled.h1`
  margin-top: 4rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: #121212;
  margin-bottom: 3rem;
  text-align: center;
  @media (max-width: 992px) {
    font-size: 2rem;
  }
`;
const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: #383838;
  margin-bottom: 1rem;
  text-align: left;
  text-align: justify;
  text-justify: inter-word;
  @media (max-width: 992px) {
    font-size: 1rem;
  }
`;
export default Brief;
