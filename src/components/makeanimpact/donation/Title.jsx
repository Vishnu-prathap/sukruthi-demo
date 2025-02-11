import PageTitle from "../../reusable-components/PageTitle";
const Title = (props) => {
  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <PageTitle
            title={"Donate to Sukruthi Charitable Trust"}
            description={
              'Support us with your littlest effort because "No act of kindness, no matter how small, is ever wasted."'
            }
          />
        </div>
      </div>
    </div>
  );
};
export default Title;
