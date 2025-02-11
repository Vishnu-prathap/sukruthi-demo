import { useEffect, useState } from "react";

import constants from "../../../constants.json";
const Founders = (props) => {
  const [founder, setFounder] = useState([]);

  const [advisors, setAdvisors] = useState([]);
  const [management, setManagement] = useState([]);
  useEffect(() => {
    getFounders();
    getAdvisor();
    getManagementTeam();
  }, []);
  const getFounders = () => {
    fetch(constants.baseUrl + "/getfounders", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if ((data.status = 201)) {
          setFounder(data.data);
        } else {
          alert(data.message);
        }
      });
  };
  const getAdvisor = () => {
    fetch(constants.baseUrl + "/getadvisor", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if ((data.status = 201)) {
          setAdvisors(data.data);
        } else {
          alert(data.message);
        }
      });
  };
  const getManagementTeam = () => {
    fetch(constants.baseUrl + "/getmanagementteam", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if ((data.status = 201)) {
          setManagement(data.data);
        } else {
          alert(data.message);
        }
      });
  };
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-12 ">
          <h3 className="our-story-title">Founders</h3>
          <p>
            The supporting force behind shaping a practice into a wider
            philanthropic initiative, the Sukruthi Charitable Trust.
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        {founder.map((member) => {
          return (
            <div className="col-md-3 col-12 mt-2">
              <div className="card founders-card h-100">
                <div className="card-body">
                  <img src={member.imageUrl} className="founder-image" />
                  <div className="card-title">
                    <h3>
                      <b>{member.name}</b>
                    </h3>
                  </div>
                  <p>
                    <h5>{member.designation}</h5>
                  </p>
                  <p>{member.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row">
        <div className="col-12 ">
          <h3 className="our-story-title">Management Team</h3>
        </div>
      </div>
      <div className="row justify-content-center">
        {management.map((member) => {
          return (
            <div className="col-md-3 col-12 mt-2">
              <div className="card founders-card h-100">
                <div className="card-body">
                  <img src={member.imageUrl} className="founder-image" />

                  <div className="card-title">
                    <h3>
                      <b>{member.name}</b>
                    </h3>
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
      <div className="row">
        <div className="col-12 ">
          <h3 className="our-story-title">Advisors</h3>
        </div>
      </div>
      <div className="row justify-content-center">
        {advisors.map((member) => {
          return (
            <div className="col-md-3 col-12 mt-2">
              <div className="card founders-card h-100">
                <div className="card-body">
                  <img src={member.imageUrl} className="founder-image" />

                  <div className="card-title">
                    <h3>
                      <b>{member.name}</b>
                    </h3>
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

export default Founders;
