import React, { PureComponent } from "react";
import "./style.scss";
import { connect } from "react-redux";

import * as ContentSelectors from "../../redux/staticcontent/selectors";

import HeaderImage from "../../components/HeaderImage";
import BasicHeader from "../../components/HeaderImage/BasicHeader";
import BlockSection from "../../components/BlockSection/";
import Markdown from "../../components/Markdown";
import NewsLetterForm from "../../components/NewsLetterForm";
import Divider from "../../components/Divider";

import Page from "../PageHOC";
import CenteredBlock from "../../components/CenteredBlock/index";

const BOTTOM_LINKS = [
  {
    image: require("../../assets/liveImages/headerImage.jpg"), //partnerPageHeaderImage,
    imageAlt: "Link",
    linkTo: "/partners",
    linkText: "For partners"
  },
  {
    image: require("../../assets/liveImages/teamVolunteerHeader.jpg"), //volunteerPageHeaderImage,
    imageAlt: "Link",
    linkTo: "/volunteers",
    linkText: "For volunteers"
  },
  {
    image: require("../../assets/liveImages/headerImage.jpg"), //calendarPageHeaderImage,
    imageAlt: "Link",
    linkTo: "/calendar",
    linkText: "Calendar"
  }
];

class StoryPage extends PureComponent {
  render() {
    const { getText, getMedia } = this.props;

    return (
      <Page
        className="StoryPage"
        pageTitle="Our story"
        metaDesc={getText("storyPageSubtitle")}
      >
        <HeaderImage
          image={getMedia("storyPageHeaderImage")} //empty
          alt="Header image"
        >
          <CenteredBlock></CenteredBlock>
          <BasicHeader
            title={getText("storyPageTitle")} //empty
            bodyKey={getText("storyPageSubtitle")} //empty
          />
        </HeaderImage>
        <BlockSection
          title="What is HEL TECH?" //whatIsJunctionTitle
          subtitle="for the love of Technology <3" //whatIsJunctionSubtitle
        >
          <Markdown
            source="Hel Tech got started in 2017, when three students from Aalto University were looking for an event that would bring together tech enthusiasts in the Helsinki area.They soon realized that such an event did not yet exist, inspiring them to create their own meetup, Hel Tech.

Since the very first event, Hel Tech has gathered together thousands of people from a wide variety of backgrounds. For some it’s a way to find new exciting topics and to explore, and for some it’s a way to connect with like-minded people. Ideally, it's both.

A community of curious minds comes together at Hel Tech to explore and discuss the most relevant developments in tech, all in an open environment where research and entrepreneurs collide. By attending our meetups, you'll be up to date on the latest and greatest new tech has to offer and maybe ignite that inner spark in you!

We are and always have been a non-profit event organised by people who are motivated by the joy of learning, love of tech, united by the common goal to cultivate the tech community around the Finnish capital. 
## We are powered by our lovely volunteers and awesome partners.
As Hel Tech gained more traction and a larger like-minded audience, we decided to join forces with Junction, a student-run hackathon community that aims to empower people to create with technology." //whatIsJunctionBody
          />
        
        </BlockSection>
        <Divider lg />
        <CenteredBlock>
          <Markdown
            source={getText("storyPageContent")} //empty
          />
        </CenteredBlock>
        <BlockSection
          titleKey={getText("junction2019")} //empty
          subtitle={getText("henrisKey")} //empty
        >
          <Markdown
            source={getText("junction2019Body")} //empty
          />
        </BlockSection>
        <Divider lg />
        <NewsLetterForm />
        <Divider lg />
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  getText: ContentSelectors.buildGetText(state),
  getMedia: ContentSelectors.buildGetMedia(state)
});
export default connect(mapStateToProps)(StoryPage);
