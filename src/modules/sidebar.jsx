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
               BlockSci Analysis
              </Header>
              <List selection verticalAlign="middle">
                <List.Item>
                  <Link to={"/"}>
                    <span className="item">Guidelines</span>{" "}
                  </Link>
                </List.Item>
                <List.Item>
                  <Link to={"/getExistingDataSet"}>
                    {" "}
                    <span className="item">Get Existing Data Set</span>
                  </Link>
                </List.Item>
                <List.Item>
                  <Link to={"/createNewDataSet"}>
                    {" "}
                    <span className="item">Create New Data Set</span>
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
