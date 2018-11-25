import { createLogic } from "redux-logic";
import { textTypes, textActions } from "./../actions";
import { sessionActions } from "./../actions";
import * as API from "./httpClient";
import * as endPoints from "./endpoints";

const getText = createLogic({
  type: textTypes.TEXT, // only apply this logic to this type "login/LOGIN"
  latest: true, // only take latest data
  debounce: 1000, // Wait 1 s before triggering another call

  process({ MockHTTPClient, getState, action }, dispatch, done) {
    let HTTPClient;
    if (MockHTTPClient) {
      HTTPClient = MockHTTPClient;
    } else {
      HTTPClient = API;
    }

    var url = "";
    console.log("TEXT TYPE IS", action.payload.textType);
    console.log("Data is", action.payload.data);
    if (action.payload.textType == "Sinhala") {
      url = endPoints.GET_EXISTING_DATA_SET;
    } else {
      url = endPoints.CREATE_NEW_DATA_SET;
    }

    var formData = new FormData();
    formData.append('file', action.payload.data);
    for(var pair of formData.entries()) {
      console.log(pair[0]+ ', '+ pair[1]); 
   }
   // console.log("form data is",formData )
    // var data =  {file:action.payload.data}
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    
    HTTPClient.Post(url,formData,config)
      .then(resp => resp.data) 
      .then(data => dispatch(textActions.getTextSuccess(data)))
      .then(data => dispatch(textActions.queryEnd()))
      .catch(err => {
        dispatch(textActions.queryEnd());
        var errorMessage = "Failed to get text.";

        console.error(err); // log since could be render err
        if (err && err.code == "ECONNABORTED") {
          errorMessage = "Please check your internet connection.";
        }

        dispatch(
          textActions.getTextFailed({ title: "Error!", message: errorMessage })
        );
      })
      .then(() => done()); // call done when finished dispatching
  }
});

export default [getText];
