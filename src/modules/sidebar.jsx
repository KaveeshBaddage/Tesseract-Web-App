import React from "react";
import { Link } from "react-router-dom";
import { List, Icon, Header } from "semantic-ui-react";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="ui grid">
        <div className="row">
          <div className="column" id="sidebar">
            <div className="ui secondary vertical fluid menu">
              <Header as="h1" block style={{ width: "95%" }}>
               Tesseract OCR
              </Header>
              <List selection verticalAlign="middle">
                <List.Item>
                  <Link to={"/"}>
                    <span className="item">Dashboard</span>{" "}
                  </Link>
                </List.Item>
                <List.Item>
                  <Link to={"/getSinhalaText"}>
                    {" "}
                    <span className="item">Get Sinhala Text</span>
                  </Link>
                </List.Item>
                <List.Item>
                  <Link to={"/getEnglishText"}>
                    {" "}
                    <span className="item">Get English Text</span>
                  </Link>
                </List.Item>
              </List>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Sidebar;
