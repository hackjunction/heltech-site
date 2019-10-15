import React, { Component } from "react";
import { connect } from "react-redux";

/* A component with the same lifecycle as the app in general. Use this
  to e.g. dispatch any Redux actions that you want to dispatch on every page load (refresh).

  Remember to render this in App.js
*/

class GlobalLifecycle extends Component {
  async componentDidMount() {
    /** Dispatch updates that affect the whole page */
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalLifecycle);
