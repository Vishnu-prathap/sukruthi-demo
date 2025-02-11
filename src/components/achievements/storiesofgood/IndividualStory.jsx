import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import constants from "../../../constants.json";
import { FaShareSquare } from "react-icons/fa";
import { Helmet } from "react-helmet";

const IndividualStory = (props) => {
  const [story, setStory] = useState({});
  const urlRoute = useLocation().pathname.split("/").slice(-1);
  const [searchStr, setSearchStr] = useState("");

  const [storiesList, setStoriesList] = useState([]);

  const search = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getStory();
    getPublicStories();
  }, []);
  const getPublicStories = () => {
    fetch(constants.baseUrl + "/getpublicstories", {
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
          setStoriesList(data.data.slice(0, 4));
        } else {
          alert("Error " + data.status + " with message " + data.message);
        }
      });
  };
  const getStory = () => {
    fetch(constants.baseUrl + "/getastory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        story: {
          urlRoute,
        },
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.status === 201) {
          setStory(data.data);
        }
      });
  };
  return (
    <div className="container mt-5">
      <Helmet>
        <title>{story.name}</title>
        <meta
          name="title"
          content={story.name + " | Sukruthi Charitable Trust"}
        />
        <meta name="description" content={story.caseDescription} />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={
            "https://sukruthi.org/achievements/stories-of-good/" +
            story.urlRoute
          }
        />
        <meta
          property="og:title"
          content={story.name + " | Sukruthi Charitable Trust"}
        />
        <meta property="og:description" content={story.caseDescription} />
        <meta property="og:image" content={story.imageUrl} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={
            "https://sukruthi.org/achievements/stories-of-good/" +
            story.urlRoute
          }
        />
        <meta
          property="twitter:title"
          content={story.name + " | Sukruthi Charitable Trust"}
        />
        <meta property="twitter:description" content={story.caseDescription} />
        <meta property="twitter:image" content={story.imageUrl} />
      </Helmet>
      <div className="row">
        <div className="col-lg-10 col-12">
          <div className="row ">
            <div className="col-12 text-start">
              <h1>{story.name} </h1>
            </div>

            <div className="col-12 text-start">
              <span className="text-muted">
                {new Date(story.publishDate).toLocaleString("en-US", {
                  localeMatcher: "best fit",
                  timeZoneName: "short",
                })}
              </span>
            </div>
            <div className="col-12">
              <img src={story.imageUrl} className="story-image" />
            </div>
            <div className="col-12 text-justify">
              <h5>
                <strong>Patient Name : </strong>
                {story.patientName}
              </h5>
              <h5>
                <strong>Location : </strong>
                {story.location}
              </h5>
              <h5>
                <strong>Age : </strong>
                {story.age}
              </h5>
              <h5>
                <strong>Diagnosed with : </strong>
                {story.diagnosed}
              </h5>
              <h5>
                <strong>Case Description :</strong>
              </h5>
              <p>{story.caseDescription}</p>
              <h5>
                <strong>Sukruthi Charitable Trust’s Contribution :</strong>
              </h5>
              <p>{story.contribution}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-12">
          <div className="row">
            <div className="col-12">
              <div className="card testinominals-card">
                <div className="card-body testinomials-body">
                  <form>
                    <label>Search</label>
                    <input
                      className="form-control search-bar mt-2"
                      onChange={(e) => setSearchStr(e.target.value)}
                      value={searchStr}
                    />
                    <button
                      className="btn btn-danger search-btn mt-3"
                      onClick={(e) => search(e)}
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {storiesList.map((story) => {
                return (
                  <div className="card testinominals-card mt-2">
                    <img
                      class="card-img-top story-card-img"
                      src={story.imageUrl}
                      alt={story.name}
                    />
                    <div className="card-body testinomials-body">
                      <h3 class="card-author h3">{story.name}</h3>

                      <button
                        className="btn btn-outline-danger search-btn"
                        onClick={(e) =>
                          window.open(
                            "stories-of-good/" + story.urlRoute,
                            "_blank"
                          )
                        }
                      >
                        Know More
                      </button>
                      <br />
                      <span className="card-designation span">
                        {new Date(story.publishDate).toLocaleString("en-US", {
                          localeMatcher: "best fit",
                          timeZoneName: "short",
                        })}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IndividualStory;
