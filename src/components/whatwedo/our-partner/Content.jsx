import partners from "../../../data/partners.json";
const Content = (props) => {
  return (
    <div className="container pb-5">
      <div className="row justify-content-center ">
        <div className="col-md-8 mt-5">
          <p>
            Good intentions do not make for philanthropic success on their own.
            Blind spots cost philanthropists ~ and the causes they espouse
            dearly. A gift can be given for the right reasons to the wrong
            group. A grant can be generously dispersed but without careful
            research. An investment in a social enterprise with great promise
            can be rendered impotent by a misguided business plan. To take the
            most of our philanthropic rupees, we need to practice due diligence.
            Often difficult decisions about priorities and proportions will need
            to be made.
          </p>
        </div>
      </div>
      <div className="row justify-content-center mt-5"></div>
      <div className="row justify-content-center mt-3">
        {partners.map((partner) => {
          return (
            <div className="col-md-4 col-12 ">
              <div className="card testinominals-card h-100">
                <div className="card-body testinomials-body text-center">
                  <h4 className="partner-name">
                    <strong>{partner.name}</strong>
                  </h4>

                  <p className="partner-about">{partner.about}</p>
                  <button
                    className="btn btn-outline-danger"
                    onClick={(e) => window.open(partner.link, "_blank")}
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Content;
