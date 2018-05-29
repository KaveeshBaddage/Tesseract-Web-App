import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios, { post } from "axios";
import {textActions} from './../actions';
import { bindActionCreators } from "redux";

import {
  Button,
  Checkbox,
  Form,
  Header,
  Icon,
  Input,
  Card
} from "semantic-ui-react";

class LangOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      view:<p>sdfs</p>
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }
  

  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit
    this.props.textActions.queryStart();
    var textType = "Sinhala"
    var data = this.state.file
    this.props.textActions.getText({data,textType});

    // this.fileUpload(this.state.file).then(response => {
    //   console.log(response.data);
    // });
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }
  fileUpload(file) {
    const url = "http://localhost:8080/getEnglishText";
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    const output =  post(url, formData, config)
    console.log("Output is ",output)
    //this.setState({ view: output})
    return output;
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <Header>
            <Icon name="settings" />
            Tesseract OCR To Get Sinhala Text
          </Header>
          <Form onSubmit={this.onFormSubmit}>
            <label>Upload File</label>
            <input
              type="file"
              placeholder="First Name"
              onChange={this.onChange}
            /><br/>
            <Button type="submit">Get Text</Button>
          </Form>
        </div>

        <div>
          {this.props.text}
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    text: state.text.data,
}
}

function mapDispatchToProps(dispatch) {
  return {
    textActions: bindActionCreators(textActions, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LangOne));

