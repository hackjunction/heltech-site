import React, { PureComponent } from "react";
import "./style.scss";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import HeaderImage from "../../components/HeaderImage";
import BasicHeader from "../../components/HeaderImage/BasicHeader";
import BlockSection from "../../components/BlockSection";
import Divider from "../../components/Divider";
import NewsLetterForm from "../../components/NewsLetterForm";
import Markdown from "../../components/Markdown";
import Page from "../PageHOC";
import LoadingPage from "../Loading";

import {
  eventconceptsByPriority,
  eventconceptsLoading
} from "../../redux/dynamiccontent/selectors";

import * as ContentSelectors from "../../redux/staticcontent/selectors";

class ConceptsPage extends PureComponent {
  renderConcepts(eventconcepts) {
    if (!Array.isArray(eventconcepts) || eventconcepts.length === 0) {
      return null;
    }

    return eventconcepts.map(concept => {
      return (
        <React.Fragment key={concept.slug}>
          <BlockSection title={concept.name} subtitle={""}>
            <Markdown source={concept.shortdescription} />
            <Link to={`/concepts/${concept.slug}`}>See more</Link>
          </BlockSection>
          <Divider md />
        </React.Fragment>
      );
    });
  }

  render() {
    const { eventconcepts, loading, getMedia, getText } = this.props;

    if (loading) {
      return <LoadingPage />;
    }

    return (
      <Page
        className="ConceptsPage"
        pageTitle="Concepts"
        metaDesc={getText("conceptsPageSubtitle")}
      >
        <HeaderImage
          image={getMedia("conceptsPageHeaderImage")}
          alt="Header image"
        >
          <BasicHeader
            title={getText("conceptsPageTitle")}
            body={getText("conceptsPageSubtitle")}
          />
        </HeaderImage>
        <Divider lg />
        {this.renderConcepts(eventconcepts)}
        <Divider lg />
        <NewsLetterForm />
        <Divider lg />
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  loading: eventconceptsLoading(state),
  eventconcepts: eventconceptsByPriority(state),
  getText: ContentSelectors.buildGetText(state),
  getMedia: ContentSelectors.buildGetMedia(state)
});

export default connect(mapStateToProps)(ConceptsPage);
