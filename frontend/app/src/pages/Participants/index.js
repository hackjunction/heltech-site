import React, { PureComponent } from "react";
import "./style.scss";
import { connect } from "react-redux";

import HeaderImage from "../../components/HeaderImage";
import BasicHeader from "../../components/HeaderImage/BasicHeader";

import Divider from "../../components/Divider";
import ContactForm from "../../components/ContactForm";
import SingleColumnSection from "../../components/SingleColumnSection";

import * as ContentSelectors from "../../redux/staticcontent/selectors";

import Page from "../PageHOC";

/* 
import {
    participantTestimonials,
} from '../../redux/testimonials/selectors';
 */
class ParticipantsPage extends PureComponent {
  render() {
    const { getText, getMedia } = this.props;
    /* const { testimonials } = this.props;
        const testimonial = testimonials.length > 0 ? testimonials[0] : null; */

    return (
      <Page
        className="ParticipantsPage"
        pageTitle="For speakers"
        metaDesc={getText("participantsPageSubtitle")} //empty
      >
        <HeaderImage
          image={getMedia("participantPageHeaderImage")} //empty
          alt="Header image"
        >
          <BasicHeader
            title={getText("participantsPageTitle")} //empty
            body={getText("participantsPageSubtitle")} //empty
          />
        </HeaderImage>
        <Divider lg />
        <SingleColumnSection title="Interested in becoming a speaker?"></SingleColumnSection>
        <ContactForm type="speaker" />
        <Divider lg />
      </Page>
    );
  }
}
const mapStateToProps = state => ({
  getText: ContentSelectors.buildGetText(state),
  getMedia: ContentSelectors.buildGetMedia(state)
});
export default connect(mapStateToProps)(ParticipantsPage);

/* const mapStateToProps = state => ({
    testimonials: participantTestimonials(state),
});

 */
