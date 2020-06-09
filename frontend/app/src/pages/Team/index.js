import React, { PureComponent } from 'react';
import './style.scss';
import { connect } from 'react-redux';

import * as ContentSelectors from '../../redux/staticcontent/selectors';
import { teammembersByPriority } from '../../redux/dynamiccontent/selectors';

import HeaderImage from '../../components/HeaderImage';
import BasicHeader from '../../components/HeaderImage/BasicHeader';
// NOTE this exists, use this plz :D
// import TeamMemberGrid from '../../components/TeamMemberGrid';

import Page from '../PageHOC';

import ImageBlockSection from '../../components/ImageBlockSection';
import SingleColumnSection from '../../components/SingleColumnSection';
import BorderedSection from '../../components/BorderedSection';

class TeamPage extends PureComponent {
    render() {
        const { getText, getMedia, teamMembers } = this.props;
        // console.log('test', teamMembers);
        return (
            <Page
                className='TeamPage'
                pageTitle='Meet the team'
                metaDesc={getText('teamPageSubtitle')}
            >
                <HeaderImage
                    image={getMedia('teamPageHeaderImage')}
                    alt='Header image'
                >
                    <BasicHeader
                        title={getText('teamPageTitle')}
                        body={getText('teamPageSubtitle')}
                    />
                </HeaderImage>
                <ImageBlockSection
                    imageSrc={require('../../assets/images/kasper-headshot.jpg')}
                    imagAlt={'Kasper Henriksson'}
                    title='Kasper Henriksson'
                    subtitle='Helsinki, Finland.'
                    socialImg={require('../../assets/logos/social/linkedin-white.png')}
                    socialLink='https://www.linkedin.com/in/kasperhenriksson/'
                >
                    <p>Head of Heltech</p>
                    <p>
                        <u>kasper.henriksson@hackjunction.com</u>
                    </p>
                </ImageBlockSection>
                <ImageBlockSection
                    imageSrc={require('../../assets/images/maiju-headshot.jpg')}
                    imagAlt={'Maiju Aspegren'}
                    title='Maiju Aspegren'
                    subtitle='Helsinki, Finland.'
                    socialImg={require('../../assets/logos/social/linkedin-white.png')}
                    socialLink='https://fi.linkedin.com/in/maijuaspegren'
                >
                    <p>Partnerships</p>
                    <p>
                        <u>maiju.aspegren@hackjunction.com</u>
                    </p>
                </ImageBlockSection>
                <SingleColumnSection title='And our lovely volunteers! 💕'>
                    <BorderedSection content='Who work to bring you these events!' />
                </SingleColumnSection>
            </Page>
        );
    }
}

const mapStateToProps = (state) => ({
    getText: ContentSelectors.buildGetText(state),
    getMedia: ContentSelectors.buildGetMedia(state),
    teamMembers: teammembersByPriority(state),
});
export default connect(mapStateToProps)(TeamPage);
