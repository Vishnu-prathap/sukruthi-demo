import PageTitle from "../../reusable-components/PageTitle";
const Title = (props) => {
  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <PageTitle
            title={"Systematic Donation Plan"}
            description={
              "Financially strengthening the impoverished sufferers of cancer and kidney disease"
            }
          />
        </div>
      </div>
    </div>
  );
};
export default Title;
