import React, { PureComponent } from "react";
import "./style.scss";

import { connect } from "react-redux";

import * as Selectors from "../../redux/misc/selectors";
import * as Actions from "../../redux/misc/actions";

class PrivacyBanner extends PureComponent {
  constructor(props) {
    super(props);
    this.handleAccept = this.handleAccept.bind(this);
  }

  handleAccept() {
    this.props.setAccepted();
  }

  render() {
    if (this.props.accepted) {
      return null;
    }

    return (
      <div className="PrivacyBanner">
        <div className="PrivacyBanner--left">
          <p className="PrivacyBanner--text">
            We use cookies from external service providers in order to collect
            statistics about the usage of the site. This information is
            anonymized, and cannot be connected to individual users. See our
            <a href="https://www.hackjunction.com/policy" alt="Privacy Policy">
              Privacy policy
            </a>
            and
            <a href="https://www.hackjunction.com/terms" alt="terms">
              Terms & Conditions
            </a>
            for details on how we use your data.
          </p>
        </div>
        <div className="PrivacyBanner--right">
          <button className="PrivacyBanner--close" onClick={this.handleAccept}>
            OK
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  accepted: Selectors.isCookiesAccepted(state)
});

const mapDispatchToProps = dispatch => ({
  setAccepted: () => dispatch(Actions.setCookiesAccepted(true))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivacyBanner);
