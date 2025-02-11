import { useState, useEffect } from "react";
import constants from "../../../constants.json";

const Contents = (props) => {
  const [allTestinomials, setAllTestinomials] = useState([]);
  useEffect(() => {
    getTestinomials();
  }, []);
  const getTestinomials = () => {
    fetch(constants.baseUrl + "/getpublictestinomials", {
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
          setAllTestinomials(data.data);
        }
      });
  };
  return (
    <div className="container pb-5">
      <div className="row justify-content-center mt-5">
        {allTestinomials.map((testinomial) => {
          return (
            <div className="col-md-4 col-12 mt-4">
              <div className="card testinominals-card h-100">
                <div className="card-body testinomials-body">
                  <div className="row">
                    <div className="col-8">
                      <p class="card-text ">{testinomial.content}</p>
                    </div>
                    <div className="col-4">
                      <img
                        src={testinomial.imageUrl}
                        className="testinomials-img"
                      />
                    </div>
                  </div>
                  <div className="row mt-2 testinomial-designation">
                    <div className="col-12">
                      <span class="card-author h5">{testinomial.name}</span>
                      <br />
                      <span className="card-designation h6">
                        {testinomial.designation}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Contents;
