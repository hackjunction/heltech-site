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
                    imageSrc={require('../../assets/images/min.jpg')}
                    imagAlt={'Min Nguyen'}
                    title='Min Nguyen'
                    subtitle='Helsinki, Finland.'
                    socialImg={require('../../assets/logos/social/linkedin-white.png')}
                    socialLink='https://www.linkedin.com/in/phuongnguyen18/'
                >
                    <p>Head of Hel Tech</p>
                    <p>
                        <u>min.nguyen@hackjunction.com</u>
                    </p>
                </ImageBlockSection>
                <ImageBlockSection
                    imageSrc={require('../../assets/images/jolie.jpg')}
                    imagAlt={'Jolie Pham'}
                    title='Jolie Pham'
                    subtitle='Helsinki, Finland.'
                    socialImg={require('../../assets/logos/social/linkedin-white.png')}
                    socialLink='https://www.linkedin.com/in/joliekpham/'
                >
                    <p>Social Media Marketing Specialist</p>
                    <p>
                        <u>Jolie.pham134@gmail.com</u>
                    </p>
                </ImageBlockSection>
                <ImageBlockSection
                    imageSrc={require('../../assets/images/kai.jpg')}
                    imagAlt={'Kai Nguyen'}
                    title='Kai Nguyen'
                    subtitle='Helsinki, Finland.'
                    socialImg={require('../../assets/logos/social/linkedin-white.png')}
                    socialLink='https://www.linkedin.com/in/imkai1995/'
                >
                    <p>Visual Designer</p>
                    <p>
                        <u>Imkai1995@gmail.com</u>
                    </p>
                </ImageBlockSection>
                <ImageBlockSection
                    imageSrc={require('../../assets/images/sofia.jpg')}
                    imagAlt={'Sofia Leino'}
                    title='Sofia Leino'
                    subtitle='Helsinki, Finland.'
                    socialImg={require('../../assets/logos/social/linkedin-white.png')}
                    socialLink='https://www.linkedin.com/in/sofia-leino-654298156/'
                >
                    <p>Partnerships Manager</p>
                    <p>
                        <u>sofia.leino@hackjunction.com</u>
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
