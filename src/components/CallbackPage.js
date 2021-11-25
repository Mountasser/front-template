import React from "react";
import { connect } from "react-redux";
import { CallbackComponent } from "redux-oidc";
import { push } from "react-router-redux";
import userManager from "../utils/userManager";

class CallbackPage extends React.Component {
  render() {
    console.log("callack");

    // just redirect to '/' in both cases
    return (
      <CallbackComponent
        userManager={userManager}
        successCallback={() =>{ this.props.dispatch(push("/"));
        console.log("roror")}
      
      }
        errorCallback={error => {
          this.props.dispatch(push("/"));
          console.error(error);
        }}
        >
        <div>Redirecting...</div>
      </CallbackComponent>
    );
  }
}

export default connect()(CallbackPage);