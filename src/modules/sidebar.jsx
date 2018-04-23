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
                <a className="item">Dashboard</a>{" "}
              </Link>
              <Link to={"/getSinhalaText"}>
                {" "}
                <a className="item">Get Sinhala Text</a>
              </Link>
              <Link to={"/getEnglishText"}>
                {" "}
                <a className="item">Get English Text</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Sidebar;
