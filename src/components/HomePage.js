import React from "react";
import { connect } from "react-redux";
import LoginPage from "./LoginPage";
import App from "../App";

function HomePage(props) {
  const { user } = props;
console.log("user",user)
  return !user || user.expired ? <LoginPage /> : <App/>;
}

function mapStateToProps(state) {
  return {
    user: state.oidc.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);