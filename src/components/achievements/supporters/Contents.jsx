import { useState, useEffect } from "react";
import constants from "../../../constants.json";

const Contents = (props) => {
  const [supporters, setSupporters] = useState([]);
  useEffect(() => {
    getSupporters();
  }, []);
  const getSupporters = () => {
    fetch(constants.baseUrl + "/getsupporters", {
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
          setSupporters(data.data);
        }
      });
  };
  return (
    <div className="container pb-5">
      <div className="row justify-content-center mt-5">
        {supporters.map((member) => {
          return (
            <div className="col-xl-2 col-md-3 col-12 mt-2">
              <div className="  h-100">
                <div className="card-body">
                  <img src={member.imageUrl} className="supporter-image" />

                  <div className="card-title">
                    <h5>
                      <b>{member.name}</b>
                    </h5>
                  </div>
                  <p>
                    <h5>{member.designation}</h5>
                  </p>
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
