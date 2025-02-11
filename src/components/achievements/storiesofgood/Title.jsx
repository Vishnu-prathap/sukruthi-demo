import PageTitle from "../../reusable-components/PageTitle";
const Title = (props) => {
  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <PageTitle
            title={"Stories of Good"}
            description={
              "With our aim to make healthcare accessible for the poor, we have been able to bring positive transformations to people's lives. Read about the stories of our beneficiaries."
            }
          />
        </div>
      </div>
    </div>
  );
};
export default Title;
