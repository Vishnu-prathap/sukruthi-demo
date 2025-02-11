import { useEffect, useState } from "react";
import constants from "../../../constants.json";

const Content = (props) => {
  const [publicStories, setPublicStories] = useState([]);
  useEffect(() => {
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
          setPublicStories(data.data);
        } else {
          alert("Error " + data.status + " with message " + data.message);
        }
      });
  };
  if (props.home) {
    return (
      <div className="container pb-5 mt-5">
        <div className="row justify-content-center">
          {publicStories.slice(0, 3).map((story) => {
            return (
              <div className="col-md-4 mt-2">
                <div className="card testinominals-card h-100">
                  <img
                    class="card-img-top story-card-img"
                    src={story.imageUrl}
                    alt={story.name}
                  />
                  <div className="card-body testinomials-body">
                    <h3 class="card-author h3">{story.name}</h3>
                    <p className="truncate">{story.caseDescription}</p>
                  </div>
                  <div class="card-footer text-muted">
                    <button
                      className="btn btn-outline-danger search-btn"
                      onClick={(e) =>
                        window.open(
                          "/achievements/stories-of-good/" + story.urlRoute,
                          "_blank"
                        )
                      }
                    >
                      Know More
                    </button>

                    {/* <span className="card-designation span">
                      {new Date(story.publishDate).toLocaleString("en-US", {
                        localeMatcher: "best fit",
                        timeZoneName: "short",
                      })}
                    </span> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="container pb-5 mt-5">
        <div className="row justify-content-center">
          {publicStories.map((story) => {
            return (
              <div className="col-md-3 mt-2">
                <div className="card testinominals-card h-100">
                  <img
                    class="card-img-top story-card-img"
                    src={story.imageUrl}
                    alt={story.name}
                  />
                  <div className="card-body testinomials-body">
                    <h3 class="card-author h3">{story.name}</h3>
                    <p className="truncate">{story.caseDescription}</p>
                  </div>

                  <div class="card-footer text-muted">
                    <button
                      className="btn btn-outline-danger search-btn"
                      onClick={(e) =>
                        window.open(
                          "/achievements/stories-of-good/" + story.urlRoute,
                          "_blank"
                        )
                      }
                    >
                      Know More
                    </button>

                    {/* <span className="card-designation span">
                      {new Date(story.publishDate).toLocaleString("en-US", {
                        localeMatcher: "best fit",
                        timeZoneName: "short",
                      })}
                    </span> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};
export default Content;
