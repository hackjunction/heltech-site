import React, { Component } from 'react';
import './style.scss';

import { connect } from 'react-redux';

import * as ContentSelectors from '../../redux/staticcontent/selectors';

import HeaderVideo from '../../components/HeaderVideo';
import BlockSection from '../../components/BlockSection';
import Divider from '../../components/Divider';
import Markdown from '../../components/Markdown';
import PartnerLogoGrid from '../../components/LinkGrid/PartnerLogoGrid';
import ImageLinks from '../../components/ImageLinks';
import EventCalendar from '../../components/EventCalendar';
import SingleColumnSection from '../../components/SingleColumnSection';

import Page from '../PageHOC';
import LinkButton from '../../components/LinkButton/index';


const BOTTOM_LINKS = [
    
    { 
        imageKey: 'calendarPageHeaderImage', 
        imageAlt:'Link',
        linkTo: '/calendar',
        linkText: 'Calendar'
    },
    {
        imageKey:'teamPageHeaderImage',
        imageAlt: 'Link',
        linkTo: '/Story',
        linkText: 'About us'
    },
    {
        imageKey:'partnerPageHeaderImage',
        imagealt: 'Link',
        linkTo:'/partners',
        linkText: 'For partners'
    }
];

class HomePage extends Component {
    render() {
        const { getText, getMedia } = this.props;
        return (
            <Page
                className="HomePage"
                pageTitle="Tech Worth Exploring"
                metaDesc={getText('whoAreWeBody')}
            >
                <HeaderVideo />
                <BlockSection
                    title={getText('whoAreWe')}
                    subtitle={getText('whoAreWeSubtitle')}
                >
                    <Markdown source={getText('whoAreWeBody')} />
                </BlockSection>
                <Divider lg />
                <BlockSection
                    title={getText('whatWeDo')}
                    subtitle={getText('whatWeDoSubtitle')}
                >
                    <Markdown source={getText('whatWeDoBody')} />
                </BlockSection>
                <Divider lg />

               {/*  <div className="EventBrite">
                    <iframe src="https://eventbrite.fi/tickets-external?eid=75811541361&ref=etckt" frameBorder="0" height="393" width="100%" vspace="0" hspace="0" marginHeight="5" marginWidth="5" scrolling="auto" allowtransparency="true"></iframe>
                    <div className="EventBriteInner">
                        <a className="powered-by-eb" target="_blank" href="https://www.eventbrite.fi/">
                        Powered by Eventbrite
                        </a>
                    </div>
                </div> */}

                <SingleColumnSection
                    className="column"
                    title={getText('homePageEvents')}
                ></SingleColumnSection>
                <EventCalendar />
                <BlockSection
                    title={getText('previousPartnersTitle')}
                    subtitle={getText('previousPartnersSubtitle')}
                >
                    <PartnerLogoGrid />
                    <Divider sm />
                    <LinkButton to="/partners" text="More about partnering" />
                </BlockSection>
                <Divider lg />
                <ImageLinks links={BOTTOM_LINKS} />
            </Page>
        );
    }
}

const mapStateToProps = state => ({
    getText: ContentSelectors.buildGetText(state),
    getMedia: ContentSelectors.buildGetMedia(state)
});
export default connect(mapStateToProps)(HomePage);
