import { useLocation } from "react-router-dom";
import IdeasForGiving from "./ideas-for-giving/IdeasForGiving";
import Donation from "./donation/Donation";
import ReferADonor from "./refer-a-donor/ReferADonor";
import SDP from "./sdp/SDP";

const MakeAnImpact = (props) => {
  return (
    <div className="row justify-content-center">
      {useLocation().pathname === "/make-an-impact/ideas-for-giving" ? (
        <IdeasForGiving />
      ) : useLocation().pathname === "/make-an-impact/donation" ? (
        <Donation />
      ) : useLocation().pathname === "/make-an-impact/refer-a-donor" ? (
        <ReferADonor />
      ) : useLocation().pathname ===
        "/make-an-impact/systematic-donation-plan" ? (
        <SDP />
      ) : (
        <h1>Not Found</h1>
      )}
    </div>
  );
};
export default MakeAnImpact;
