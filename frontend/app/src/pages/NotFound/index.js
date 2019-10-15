import React, { PureComponent } from "react";
import "./style.scss";
import { connect } from "react-redux";

import HeaderImage from "../../components/HeaderImage";
import BasicHeader from "../../components/HeaderImage/BasicHeader";
import Divider from "../../components/Divider";
import Page from "../PageHOC";

import * as ContentSelectors from "../../redux/staticcontent/selectors";

class NotFoundPage extends PureComponent {
  render() {
    const { getMedia } = this.props;
    return (
      <Page className="NotFoundPage" pageTitle="404">
        <HeaderImage
          image={getMedia("notFoundPageHeaderImage")}
          alt="Header image"
        >
          <BasicHeader
            title={"Page not found"}
            body={
              "It seems like the page you were looking for doesn't exist..."
            }
          />
        </HeaderImage>
        <Divider lg />
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  getMedia: ContentSelectors.buildGetMedia(state)
});

export default connect(mapStateToProps)(NotFoundPage);
