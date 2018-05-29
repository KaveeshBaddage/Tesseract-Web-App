import React from "react";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="ui grid">
        <div className="row">
          <div className="column" id="sidebar">
            <div className="ui secondary vertical fluid menu">
              <Link to={"/dashboard"}>
                <span className="item">Dashboard</span>{" "}
              </Link>
              <Link to={"/getSinhalaText"}>
                {" "}
                <span className="item">Get Sinhala Text</span>
              </Link>
              <Link to={"/getEnglishText"}>
                {" "}
                <span className="item">Get English Text</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Sidebar;
