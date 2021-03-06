import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route,Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import {
} from 'semantic-ui-react';
import { loginActions } from './../actions';


class Navbar extends Component {

    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);

    }

    logoutUser(){
        console.log("Calling logout")
        this.props.logout();   
    }

    // componentDidUpdate() {
    //     if (this.props.isAuthenticated==false) {
    //         console.log("Redirect to login");
    //         this.props.history.push('/login');
    //     }
    // }

    // componentDidMount() {
    //     if (this.props.isAuthenticated==false) {
    //         console.log("Redirect to login");
    //         this.props.history.push('/login');
    //     }
    // }

    render() {
        return (
            <div className="ui inverted huge borderless fixed fluid menu" style={{height:50}} id="navbar">
                <a className="header item">Tesseract OCR</a>
                <div className="right menu">
                    {/* <a className="item" onClick={this.logoutUser} >Sign Out </a> */}
                         
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state.Login,
        isAuthenticated: state.session.isAuthenticated
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...loginActions
    },dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
