import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as StaticSelectors from '../../redux/staticcontent/selectors';

import HeaderImage from '../../components/HeaderImage';
import BasicHeader from '../../components/HeaderImage/BasicHeader';
import SingleColumnSection from '../../components/SingleColumnSection';
import SpeakerCards from '../../components/SpeakerCards';
import BlockSection from '../../components/BlockSection';

import Page from '../../pages/PageHOC';
import Markdown from '../../components/Markdown';

class OldSpeakersPage extends Component {
    render() {
        const { getText, getMedia } = this.props;
        return (
            <Page
                className="OldSpeakersPage"
                pageTitle="Previous speakers"
                metaDesc={getText('oldSpeakersSubtitle')}
            >
                <HeaderImage
                    image={getMedia('oldSpeakersHeaderImage')}
                    alt="Header Image"
                >
                    <BasicHeader
                        title={getText('oldSpeakersTitle')}
                        body={getText('oldSpeakersSubtitle')}
                    />
                </HeaderImage>
                <BlockSection
                    title={getText('oldSpeakersSection1Title')}
                    subtitle={getText('oldSpeakersSection1Subtitle')}
                >
                    <Markdown source={getText('oldSpeakersSection1Body')} />
                </BlockSection>

                <SingleColumnSection title={getText('oldSpeakersPastTitle')}>
                    <SpeakerCards type="old" />
                </SingleColumnSection>
            </Page>
        );
    }
}

const mapStateToProps = state => ({
    getText: StaticSelectors.buildGetText(state),
    getMedia: StaticSelectors.buildGetMedia(state)
});

export default connect(mapStateToProps)(OldSpeakersPage);
