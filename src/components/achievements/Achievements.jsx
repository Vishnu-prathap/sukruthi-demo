import { useLocation } from "react-router-dom";
import Transparency from "./transparency/Transparency";

import Testinomials from "./testinomials/Testinomials";
import StoriesOfGood from "./storiesofgood/StoriesOfGood";
import IndividualStory from "./storiesofgood/IndividualStory";
import Supporters from "./supporters/Supporters";
const Achievements = (props) => {
  return (
    <div className="row justify-content-center">
      {useLocation().pathname === "/achievements/transparency" ? (
        <Transparency />
      ) : useLocation().pathname === "/achievements/testimonials" ? (
        <Testinomials />
      ) : useLocation().pathname === "/achievements/our-supporters" ? (
        <Supporters />
      ) : useLocation().pathname === "/achievements/stories-of-good" ? (
        <StoriesOfGood />
      ) : useLocation().pathname.includes("/achievements/stories-of-good/") ? (
        <IndividualStory />
      ) : (
        <h1>Not Found</h1>
      )}
    </div>
  );
};
export default Achievements;
