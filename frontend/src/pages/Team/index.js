import React, { useEffect } from 'react';
import './style.scss';
import { connect } from 'react-redux';

import HeaderImage from '../../components/HeaderImage';
import BasicHeader from '../../components/HeaderImage/BasicHeader'
import TeamMemberGrid from '../../components/TeamMemberGrid';
import Divider from '../../components/Divider';

import Page from '../PageHOC';

import KEYS from '../../redux/staticcontent/keys';
import MEDIA_KEYS from '../../redux/staticmedia/keys';
import CenteredBlock from '../../components/CenteredBlock/';
import LinkButton from '../../components/LinkButton';
import Markdown from '../../components/Markdown';
import ImageBlockSection from '../../components/ImageBlockSection'
import SingleColumnSection from '../../components/SingleColumnSection'
import BorderedSection from '../../components/BorderedSection'

const TeamPage= () => {

    return (
        <Page className="TeamPage" pageTitle="Meet the team" metaDescKey={KEYS.teamPageSubtitle}>
            <HeaderImage
                imageKey={MEDIA_KEYS.teamPageHeaderImage}
                alt="Header image"
            >
                <BasicHeader titleKey={KEYS.teamPageTitle} bodyKey={KEYS.teamPageSubtitle} />
            </HeaderImage>
            <ImageBlockSection
				imageSrc={require('../../assets/images/kasper-headshot.jpg')}
				imagAlt={'Kasper Henriksson'}
				title="Kasper Henriksson"
				subtitle="Helsinki, Finland."
				socialImg={require('../../assets/logos/social/linkedin-white.png')}
				socialLink="https://www.linkedin.com/in/kasperhenriksson/"
			>
				<p>
					Le hefe 
				</p>
				<p>
					Facilisis Pellentesque Helsinki, Finland. “Diam eleifend at eleifend quis, rhoncus ac tellus. Aenean pellentesque tempus urna euismod imperdiet. Suspendisse ornare eu metus nec semper. Vivamus eu congue nisi, ut consectetur risus. Donec non lectus quis risus posuere commodo. Sed tristique lorem vel mi eleifend, eu dapibus dolor tristique.”
				</p>
			</ImageBlockSection>
			<ImageBlockSection
				imageSrc={require('../../assets/images/joose-headshot.jpg')}
				imagAlt={'Joose Toiviainen'}
				title="Joose Toiviainen"
				subtitle="Helsinki, Finland."
				socialImg={require('../../assets/logos/social/linkedin-white.png')}
				socialLink="https://www.linkedin.com/in/joosetoiviainen/"
			>
				<p>
					Growth
				</p>
				<p>
					Joose is a 2nd year business student at Aalto University. He is currently working with healthcare technology and has a large variety of tech-related interests. Joose enjoys cycling, chess, summer and loves dogs!<br/>
					<u>joose.toiviainen@hackjunction.com</u>
				</p>
				
			</ImageBlockSection>
			<ImageBlockSection
				imageSrc={require('../../assets/images/maiju-headshot.jpg')}
				imagAlt={'Maiju Aspegren'}
				title="Maiju Aspegren"
				subtitle="Helsinki, Finland."
				socialImg={require('../../assets/logos/social/linkedin-white.png')}
				socialLink="https://fi.linkedin.com/in/maijuaspegren"
			>
				<p>
					Parnerships boss
				</p>
				<p>
					Facilisis Pellentesque Helsinki, Finland. “Diam eleifend at eleifend quis, rhoncus ac tellus. Aenean pellentesque tempus urna euismod imperdiet. Suspendisse ornare eu metus nec semper. Vivamus eu congue nisi, ut consectetur risus. Donec non lectus quis risus posuere commodo. Sed tristique lorem vel mi eleifend, eu dapibus dolor tristique.”
				</p>
				
			</ImageBlockSection>
			<ImageBlockSection
				imageSrc={require('../../assets/images/joonas-headshot.jpg')}
				imagAlt={'Joonas Remes'}
				title="Joonas Remes"
				subtitle="Espoo, Finland."
				socialImg={require('../../assets/logos/social/linkedin-white.png')}
				socialLink="https://www.linkedin.com/in/joonas-r-1aabb6a6/"
			>	<p><b>Marketing</b></p>
				<p>
				Joonas is a 1st year business student at Aalto University. He is interested in entrepreneurship, politics and influential communication. On his free time Joonas shoots every ball and reads every book he sees.<br/>
				<u>joonas.remes@hackjunction.com</u>
				</p>
				
			</ImageBlockSection>
            <SingleColumnSection title="And our lovely volunteers! 💕">
				<BorderedSection content="Who work to bring you these events!" />
			</SingleColumnSection>
            <CenteredBlock>
            </CenteredBlock>
        </Page>
    );
};

export default TeamPage;