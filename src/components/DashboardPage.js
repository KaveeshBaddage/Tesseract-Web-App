import React, { Component } from "react";
import { Advertisement,Segment,Header,List,Icon} from "semantic-ui-react";

class DashboardPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="jumbotron">
            <Segment color="grey" style={{ width: "95%"}} textAlign="center">
              <Header as="h1" block style={{ width: "95%" }}>
                Welcome to the BlockSci Analysis Tool
              </Header>
              <p>
                {" "}
                Free Online OCR service allows you to convert scanned images to
                editable text formats and extract text from JPEG/TIFF/BMP files.
              </p>
              <br/>
            </Segment>
            <Segment stacked style={{ width: "95%" }}>
            <Header as="h3">
              <Icon name="question circle outline" />
              How can you use this service...
            </Header>
            <List as="ol">
            <List.Item as="li"> Click the sidebar according to the desired  language  </List.Item>
              <List.Item as="li">Upload the file using file uploading section </List.Item>
              <List.Item as="li">Click <b>Get Text</b> Button </List.Item>
              <List.Item as="li">Extracted text will be shown a section below file uploadind section  </List.Item>
            </List>
          </Segment>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DashboardPage;
