import visionmission from "../../../data/visionmission.json";
const VisionMisson = (props) => {
  return (
    <div className="row vision-mission justify-content-center">
      <div className="col-md-4 col-12 mt-3">
        <div className="card value-card h-100" style={{ width: "auto" }}>
          <div className="card-body">
            <div className="vision-icon-wrapper">
              <img src={visionmission.vision.icon} className="vision-icon" />
            </div>
            <h5 className="card-title initiatives-title">
              {visionmission.vision.title}
            </h5>
            <p className="card-text initiatives-description">
              {visionmission.vision.description}
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-12 mt-3">
        <div className="card value-card h-100" style={{ width: "auto" }}>
          <div className="card-body">
            <div className="mission-icon-wrapper">
              <img src={visionmission.mission.icon} className="mission-icon" />
            </div>
            <h5 className="card-title initiatives-title">
              {visionmission.mission.title}
            </h5>
            <p className="card-text initiatives-description">
              {visionmission.mission.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VisionMisson;
