import React, { PureComponent } from "react";
import "./style.scss";

import { connect } from "react-redux";

import HeaderImage from "../../components/HeaderImage";
import BasicHeader from "../../components/HeaderImage/BasicHeader";
import BlockSection from "../../components/BlockSection/";
import SingleColumnSection from "../../components/SingleColumnSection/";
import BorderedSection from "../../components/BorderedSection/";
import ContactForm from "../../components/ContactForm/";
import Divider from "../../components/Divider";
import Markdown from "../../components/Markdown";
import PartnerLogoGrid from "../../components/LinkGrid/PartnerLogoGrid";

import Page from "../PageHOC";
import CenteredBlock from "../../components/CenteredBlock/index";

import * as ContentSelectors from "../../redux/staticcontent/selectors";


class PartnersPage extends PureComponent {
  render() {

    const { getText, getMedia } = this.props;
    return (
      <Page
        className="PartnersPage"
        pageTitle="For partners"
        metaDesc={getText("partnersPageSubtitle")}
      >
        <HeaderImage
          image={getMedia("partnerPageHeaderImage")}
          alt="Header image"
        >
          <BasicHeader
            title={getText("partnersPageTitle")}
            body={getText("partnersPageSubtitle")}
          />
        </HeaderImage>
        <BlockSection
          title={getText("partnersPageFirstTitle")}
          subtitle={getText("partnersPageFirstSubtitle")}
        >
          <Markdown source={getText("partnersPageFirstBody")} />
          
        </BlockSection>
  
        <SingleColumnSection title={getText("whyPartnerWithUsTitle")}>
          <BorderedSection
            title={getText("whyPartnerWithUsFirstTitle")}
            content={getText("whyPartnerWithUsFirstBody")}
          />
          <BorderedSection
            title="RECRUITING" //whyPartnerWithUsSecondTitle
            content="Get the chance to meet the top talents of many fields, build connections and gain relevant insights that will shape our lives with technology in the future.
The tech events we host gain variety of guests from executive-level company representatives to top developers in their field. Many of our participants are also interested in open tech positions. Have a chat with them and see if they are interested in working at your company!

" //whyPartnerWithUsSecondBody
          />
          <BorderedSection
            title="VISIBILITY" //whyPartnerWithUsThirdTitle
            content="Gain recognition among thousands of top tech talents, other creative partner companies and media. Hel Tech is an exceptional way to personally enhance your image, and build a recognized brand as an attractive employer within a large tech community. Partnering with Hel Tech steers your public image towards one that is at the bleeding edge of technology.

" //whyPartnerWithUsThirdBody
          />
        </SingleColumnSection>
        <React.Fragment>
          <CenteredBlock>
            <Markdown source={getText("partnersPageVideo")} />
          </CenteredBlock>
        </React.Fragment>
       
        <BlockSection
          title={getText("whatMakesUsDifferentTitle")}
          subtitle={getText("whatMakesUsDifferentSubtitle")}
        >
          <Markdown source={getText("whatMakesUsDifferentBody")} />
        </BlockSection>
        <BlockSection
          title={getText("previousPartnersTitle")}
          subtitle={getText("previousPartnersSubtitle")}
        >
          <PartnerLogoGrid />
        </BlockSection>
        <SingleColumnSection title="Intrested in becoming a partner?"></SingleColumnSection>
        <ContactForm />
        <Divider lg />
      </Page>
    );
  }
}
const mapStateToProps = state => ({
  getText: ContentSelectors.buildGetText(state),
  getMedia: ContentSelectors.buildGetMedia(state)
});

export default connect(mapStateToProps)(PartnersPage);

