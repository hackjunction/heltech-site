import React, { Component } from 'react';
import './style.scss';
import { connect } from 'react-redux';

import HeaderImage from '../../components/HeaderImage';
import BasicHeader from '../../components/HeaderImage/BasicHeader';
import BlockSection from '../../components/BlockSection';


import SpeakerCards from '../../components/SpeakerCards';
import PartnerCards from '../../components/PartnerCards';

import SingleColumnSection from '../../components/SingleColumnSection/';
import Divider from '../../components/Divider';
import Markdown from '../../components/Markdown';
import NewsLetterForm from '../../components/NewsLetterForm';

import Page from '../PageHOC';

import * as ContentSelectors from '../../redux/staticcontent/selectors';

class DevPage extends Component {
    render() {
        const { getText, getMedia } = this.props;
        return (
            <Page
                className="DevPage"
                pageTitle="//Dev"
                metaDesc={getText('devPageSubtitle')}
            >
                <HeaderImage
                    image={getMedia('devPageHeaderImage')}
                    alt="Header Image"
                >
                    <BasicHeader
                        title={getText('devPageTitle')}
                        body={getText('devPageSubtitle')}
                    />
                </HeaderImage>
                <BlockSection
                    title={getText('devPageFirstTitle')}
                    subtitle={getText('devPageFirstSubtitle')}
                >
                    <Markdown source={getText('devPageFirstBody')} />
                </BlockSection>
                <Divider md />
             
                <SingleColumnSection title={getText('speakersTitle')}>
                    <SpeakerCards type="new" />
                </SingleColumnSection>
                <Divider md />
                
                <SingleColumnSection title={getText('devPagePartnersTitle')||'Main Partners' }>
                    <PartnerCards type="main"/>
                </SingleColumnSection>
                <Divider sm />
                <SingleColumnSection title={getText('devPageSupportingPartnersTitle') ||'Supporting Partners'}>
                    <PartnerCards type="support"/>
                </SingleColumnSection>
                <Divider sm />
                <SingleColumnSection title={getText('ticketsTitle')}>
                    <div className="EventBrite">
                        <iframe src="https://eventbrite.fi/tickets-external?eid=69708065701&ref=etckt" frameBorder="0" height="500" width="100%" vspace="0" hspace="0" marginHeight="5" marginWidth="5" scrolling="auto" allowtransparency="true"></iframe>
                        <div className="EventBriteInner">
                            <a className="powered-by-eb" target="_blank" href="https://www.eventbrite.fi/">
                            Powered by Eventbrite
                            </a>
                        </div>
                    </div>
                </SingleColumnSection>
                <Divider md />
                <NewsLetterForm />
            </Page>
        );
    }
}

const mapStateToProps = state => ({
    getText: ContentSelectors.buildGetText(state),
    getMedia: ContentSelectors.buildGetMedia(state)
});

export default connect(mapStateToProps)(DevPage);
