import { useLocation } from "react-router-dom";

import AboutUs from "./aboutus/AboutUs";
import OurManagement from "./our-management/OurManagement";

const WhoWeAre = (props) => {
  return (
    <div className="row justify-content-center">
      {useLocation().pathname === "/who-we-are/about-us" ? (
        <AboutUs />
      ) : useLocation().pathname === "/who-we-are/our-management" ? (
        <OurManagement />
      ) : (
        <h1>Not Found</h1>
      )}
    </div>
  );
};
export default WhoWeAre;
