import { useState } from "react";
import constants from "../../../constants.json";

const Form = (props) => {
  const [refererName, setRefererName] = useState("");
  const [refererEmail, setRefererEmail] = useState("");
  const [refererNumber, setRefererNumber] = useState("");
  const [referredName, setReferredName] = useState("");
  const [referredEmail, setReferredEmail] = useState("");
  const [referredNumber, setReferredNumber] = useState("");

  const submitDetails = (e) => {
    e.preventDefault();
    fetch(constants.baseUrl + "/createpotentialdonors", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        potentialDonors: {
          refererName,
          refererEmail,
          refererNumber,
          referredName,
          referredEmail,
          referredNumber,
        },
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.status === 201) {
          alert("Thank you for referring a donor!");
          window.location.reload();
        } else {
          alert("Error" + data.status + " with message " + data.message);
        }
      });
  };

  return (
    <div className="container text-start mb-5">
      <form>
        <div className="row">
          <div className="col-md-1 "></div>
          <div className="col-md-10 col-12">
            <h2 className="idea-content-h3 mt-4">Your details</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-lg-3 col-md-4">
            <label>Full Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Full name"
              value={refererName}
              onChange={(e) => setRefererName(e.target.value)}
              required
            />
          </div>
          <div className="col-lg-3 col-md-4">
            <label>Email</label>
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              value={refererEmail}
              onChange={(e) => setRefererEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-1"></div>
          <div className="col-lg-3 col-md-4">
            <label>Phone Number</label>
            <input
              type="text"
              class="form-control"
              placeholder="Phone Number"
              pattern="^(?:(?:\+|00)\d{1,3}\s?)?(?:\(?\d{2,4}\)?[\s.-]?)?\d{2,5}[\s.-]?\d{2,5}[\s.-]?\d{2,9}$"
              value={refererNumber}
              onChange={(e) => setRefererNumber(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>

          <div className="col-md-10 col-12">
            <h2 className="idea-content-h3 mt-3">Prospective Donor Details</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-lg-3 col-md-4">
            <label>Full Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Full name"
              value={referredName}
              onChange={(e) => setReferredName(e.target.value)}
              required
            />
          </div>
          <div className="col-lg-3 col-md-4">
            <label>Email</label>
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              value={referredEmail}
              onChange={(e) => setReferredEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-1"></div>
          <div className="col-lg-3 col-md-4">
            <label>Phone Number</label>
            <input
              type="text"
              class="form-control"
              placeholder="Phone Number"
              pattern="^(?:(?:\+|00)\d{1,3}\s?)?(?:\(?\d{2,4}\)?[\s.-]?)?\d{2,5}[\s.-]?\d{2,5}[\s.-]?\d{2,9}$"
              value={referredNumber}
              onChange={(e) => setReferredNumber(e.target.value)}
              required
            />
          </div>
          <div className="row mt-3">
            <div className="col-1"></div>
            <div className="col-10">
              <button
                className="btn btn-danger"
                onClick={(e) => submitDetails(e)}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;
