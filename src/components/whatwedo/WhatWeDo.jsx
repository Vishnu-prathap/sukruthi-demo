import OurPartner from "./our-partner/OurPartner";

import { useLocation } from "react-router-dom";

const WhatWeDo = (props) => {
  return (
    <div className="row justify-content-center">
      {useLocation().pathname === "/what-we-do/our-partners" ? (
        <OurPartner />
      ) : (
        <h1>Not Found</h1>
      )}
    </div>
  );
};
export default WhatWeDo;
