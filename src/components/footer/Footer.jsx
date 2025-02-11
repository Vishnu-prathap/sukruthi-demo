import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import quickLinks from "./quickLinks.json";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = (props) => {
  const navigate = useNavigate();
  const changePage = (page) => {
    navigate(page);
    window.scrollTo(0, 0);
  };
  return (
    <div className="row footer mt-5">
      <div className="col-12">
        <div className="container mt-5 mb-5">
          <div className="row mb-5">
            <div className="col-md-4 col-12">
              <div className="row">
                <div className="col-12">
                  <img src={logo} className="footer-logo" />
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <div className="col-2">
                  <BsFacebook style={{ color: "black", fontSize: "25px" }} />
                </div>
                <div className="col-2">
                  <AiFillTwitterCircle
                    style={{ color: "black", fontSize: "25px" }}
                  />
                </div>
                <div className="col-2">
                  <AiFillInstagram
                    style={{ color: "black", fontSize: "25px" }}
                  />
                </div>
                <div className="col-2">
                  <AiFillYoutube style={{ color: "black", fontSize: "25px" }} />
                </div>
              </div>
            </div>

            <div className="col-md-3 col-12 text-start quick-links">
              <h4>Contacts</h4>
              <p>
                #503, Tushti, 1st cross, 2nd main, AGs layout, Bangalore -
                560061 Karnataka, India.
              </p>
              <p>Phone : +91 9606 99 33 33</p>
              <p>Email : sukruthitrust@gmail.com</p>
            </div>
            <div className="col-md-5 col-12 text-start quick-links">
              <h4>Menus & Links</h4>
              <div className="row">
                {quickLinks.map((link) => {
                  return (
                    <div className="col-5 mt-2">
                      <span
                        onClick={(e) => changePage(link.link)}
                        className="quick-link-item"
                      >
                        {link.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="row">
            {/* <hr /> */}
            <div className="col-12">© 2023 Sukruthi Charitable Trust.</div>
            <div className="col-12">
              Made with ❤️ in India by{" "}
              <a
                href="https://ttcindia.co"
                className="text-decoration-none ttc-link"
                target="_blank"
              >
                TTC India
              </a>
            </div>

            <div className="col-12 mt-4 footer-text">
              Sukruthi Charitable Trust has received provisional approval under
              Section 12 AB of the Income Tax Act 1961 with provisional
              registration number ABBTS8660GE20215 on 1st October 2021 for the
              duration AY 2022-23 to AY 2024-25. All donations made to Sukruthi
              Charitable Trust are tax exempt under Section 80 G (5) (iv) of the
              Income Tax Act 1961 with provisional registration number
              ABBTS8660GF20213 on 13th Nov 2021 for the duration 13-11-2021 to
              AY 2024-25.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
