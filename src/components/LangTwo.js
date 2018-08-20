import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios, { post } from "axios";
import { textActions } from "./../actions";
import { bindActionCreators } from "redux";

import {
  Button,
  Checkbox,
  Form,
  Header,
  Icon,
  Input,
  Card,
  Divider,
  Segment,
  List,
  Dimmer,
  Loader
} from "semantic-ui-react";

class LangTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      view: <p>sdfs</p>
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }

  componentWillUnmount() {
    this.props.textActions.clearText();
  }

  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit
    this.props.textActions.queryStart();
    var textType = "English";
    var data = this.state.file;
    this.props.textActions.getText({ data, textType });

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
    const output = post(url, formData, config);
    console.log("Output is ", output);
    //this.setState({ view: output})
    return output;
  }
  render() {
    let loadingMsg = this.props.loading && (
      <Dimmer active inverted>
        <Loader >Preparing Files</Loader>
      </Dimmer>
    );
    return (
      <React.Fragment>
        <div>
          <Header as="h1" block style={{ width: "95%" }}>
            <Icon name="settings" />
            Tesseract OCR To Get English Text
          </Header>
          <Divider horizontal hidden />
          <Segment stacked style={{ width: "95%" }}>
            <Header as="h3">
              <Icon name="question circle outline" />
              Steps to extract text from JPEG/TIFF/BMP files
            </Header>
            <List as="ol">
              <List.Item as="li">Upload the file using following section </List.Item>
              <List.Item as="li">Click <b>Get Text</b> Button </List.Item>
              <List.Item as="li">Extracted text will be shown below the file upload section</List.Item>
            </List>
          </Segment>
          <Segment stacked style={{ width: "95%" }}>
            <Form onSubmit={this.onFormSubmit}>
              <Header as="h3">
                <Icon name="upload" />
                Upload File
              </Header>
              <Input
                type="file"
                placeholder="First Name"
                onChange={this.onChange}
              />
              <br />
              <Divider horizontal hidden />
              <Button type="submit">Get Text</Button>
            </Form>
          </Segment>
        </div>
        <Segment stacked style={{ width: "95%" }}>
      {loadingMsg}
        <div><pre>{this.props.text}</pre></div>
        </Segment>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    text: state.text.data,
    loading:state.text.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    textActions: bindActionCreators(textActions, dispatch)
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LangTwo)
);
