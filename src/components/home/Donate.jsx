import styled from "styled-components";
const Donate = (props) => {
  return (
    <div className="donate">
      <div className="container donate-container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <Content>
              We aim to reach out to several underprivileged patients with our
              free medical care program. We need your support to carry out the
              journey.
            </Content>
            <br />
            <Button
              onClick={() =>
                window.location.replace("/make-an-impact/donation")
              }
            >
              <span>Donate Now</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
const Content = styled.h4`
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
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
export default Donate;
