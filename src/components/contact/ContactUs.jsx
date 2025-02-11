import styled from "styled-components";

import constants from "../../constants.json";

import { useState } from "react";
const ContactUs = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(constants.baseUrl + "/createcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contact: {
          name: name,
          email: email,
          phoneNumber: phone,
          message: message,
        },
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.status === 201) {
          alert("We Received Your Message.");
        } else {
          alert("Error occured");
        }
      });
    setName("");
    setEmail("");
    setPhone("");

    setMessage("");
  };
  return (
    <div className="container mb-5">
      <Title>Contact Us</Title>
      <div className="row mt-5 mb-5 justify-content-center">
        <div className="col-lg-5 col-12 mt-3">
          <div className="card contact-card text-start h-100">
            <div className="card-body">
              <h5 className="card-title fs-2 fw-bold mb-3 lightblue">
                Feel free to contact us!
              </h5>
              <form
                className="row g-3 needs-validation"
                id="contact-us"
                onSubmit={handleSubmit}
              >
                <div className="col-12">
                  <label for="name" className="form-label">
                    Full name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    pattern="[a-z A-Z]+"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    minLength={3}
                    required
                  />
                </div>
                <div className="col-12">
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div className="col-12">
                  <label for="tel" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="tel"
                    value={phone}
                    pattern="[0-9]{10}"
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number"
                    required
                  />
                </div>

                <div className="col-12">
                  <label for="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    type="message"
                    className="form-control"
                    id="message"
                    minLength={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Mention your query!"
                    required
                  />
                </div>
                <div className="col-12 mt-5">
                  <LoginButton type="submit">
                    <span>Submit</span>
                  </LoginButton>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-12"></div>
        <div className="col-lg-5 mt-3">
          <div className="card contact-card text-start h-100">
            <div className="card-body">
              <h5 className="card-title fs-2 fw-bold mb-3 lightblue">
                Company Name
              </h5>
              <div className="row g-3">
                <div className="col-12">
                  <div className="row">
                    <div className="col-12">
                      <p className="text-decoration-none">
                        Email :{" "}
                        <a
                          href="mailto:sukruthitrust@gmail.com"
                          className="text-decoration-none"
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          sukruthitrust@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <p className="text-decoration-none">
                        Phone :{" "}
                        <a
                          href="tel:+919606993333"
                          className="text-decoration-none"
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          +91 9606 99 33 33
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <p className="text-decoration-none">
                        Address: #503, Tushti, 1st cross, 2nd main,
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AGs layout,
                        Bangalore 560061
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Karnataka, India.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <iframe
                        className="maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0404121945107!2d77.52827871744384!3d12.905123000000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fba56013b59%3A0xb0f7b64b0177770d!2s1st%20Cross%20Rd%20%26%202nd%20Main%20Rd%2C%20Vaddara%20Palya%2C%20Kodipur%2C%20Bengaluru%2C%20Karnataka%20560061!5e0!3m2!1sen!2sin!4v1688269577793!5m2!1sen!2sin"
                        allowfullscreen=""
                        title="Sukruthi Organization"
                        width="100%"
                        height="350px"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Title = styled.h1`
  margin-top: 2rem;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  @media (max-width: 992px) {
    font-size: 2rem;
  }
`;
const LoginButton = styled.button`
  display: flex;
  text-decoration: none;
  align-items: center;
  margin: 0 3px;
  padding: 0 8px;
  border: solid;
  border-width: 1px;
  border-color: #3469ff;
  background-color: #3469ff;
  border-radius: 10px;
  span {
    color: #ffffff;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 0.1px;
    line-height: 1.08;
    padding: 10px 5px;
    white-space: nowrap;
    position: relative;
  }
  &:hover {
    background-color: #eff2fb;
    border-color: #3469ff;
    span {
      color: #1c2c9b;
    }
  }
`;
export default ContactUs;
