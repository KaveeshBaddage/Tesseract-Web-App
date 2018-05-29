import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { connect } from 'react-redux';
import Navbar from "./../modules/navbar";
import Sidebar from "./../modules/sidebar";
import DashboardPage from "./DashboardPage";
import LangOne from "./LangOne";
import LangTwo from "./LangTwo";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <div className="ui four column grid">
                    <Navbar />
                </div>
                <div className="ui four column grid">
                    <div className="row">
                        <div className="two wide column">2</div>
                        <div className="fourteen wide column">14</div>
                    </div>
                </div> */}
        <div className="ui four column grid">
          <div className="row">
            <div className="column" style={{ height: 50 }}>
              {" "}
              <Navbar />
            </div>
          </div>
          <div className="row" style={{ height: 800 }}>
            <div className="three wide column">
              <Sidebar />
            </div>
            <div className="thirteen wide column">
              <Route exact path="/" component={DashboardPage} />
              <Route exact path="/getSinhalaText" component={LangOne} />
              <Route exact path="/getEnglishText" component={LangTwo} />
            </div>
          </div>
        </div>

        {/* <Navbar/>
                    <Sidebar/> */}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
    return {
    };
  }
  
  export default connect(mapStateToProps, null)(Dashboard);

