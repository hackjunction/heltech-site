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
					Head of Heltech
				</p>
				<p>
					<u>kasper.henriksson@hackjunction.com</u>
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
					Head of Partnerships
				</p>
				<p>
					<u>maiju.aspegren@hackjunction.com</u>
				</p>
				
			</ImageBlockSection>
			<ImageBlockSection
				imageSrc={require('../../assets/images/joonas-headshot.jpg')}
				imagAlt={'Joonas Remes'}
				title="Joonas Remes"
				subtitle="Espoo, Finland."
				socialImg={require('../../assets/logos/social/linkedin-white.png')}
				socialLink=""
			>	<p><b>Marketing</b></p>
				<p>
				<u>joonas.remes@hackjunction.com</u>
				</p>
				
			</ImageBlockSection>
            <SingleColumnSection title="And our lovely volunteers! 💕">
				<BorderedSection content="Who work to bring you these events!" />
			</SingleColumnSection>
        </Page>
    );
};

export default TeamPage;