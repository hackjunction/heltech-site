import React, { PureComponent } from "react";
import "./style.scss";

import HeaderImage from "../../components/HeaderImage";
import BasicHeader from "../../components/HeaderImage/BasicHeader";
import EventCalendar from "../../components/EventCalendar";
import Divider from "../../components/Divider";
import NewsLetterForm from "../../components/NewsLetterForm";
import SingleColumnSection from "../../components/SingleColumnSection";

import Page from "../PageHOC";
import { connect } from 'react-redux';

import * as ContentSelectors from '../../redux/staticcontent/selectors'

class CalendarPage extends PureComponent {
  render() {
      const {getMedia} = this.props;
    return (
      <Page className="CalendarPage" pageTitle="Calendar" metaDesc={""}>
        <HeaderImage
          image={getMedia('calendarPageHeaderImage')}
          alt="Header image"
        >
          <BasicHeader title={""} bodyKey={""} />
        </HeaderImage>
        <SingleColumnSection title="Here you will find a list of our coming events:"></SingleColumnSection>
        <EventCalendar />
        <Divider lg />
        <NewsLetterForm />
        <Divider lg />
      </Page>
    );
  }
}
const mapStateToProps = state => ({
    getMedia: ContentSelectors.buildGetMedia(state)
})

export default connect(mapStateToProps)(CalendarPage);
