import React, { PureComponent } from 'react';
import './style.scss';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SocialMediaIcons from '../SocialMediaIcons';
import Divider from '../Divider';

import * as ContentSelectors from '../../redux/staticcontent/selectors';

import {
    homePages,
    eventPages,
    communityPages
} from '../../redux/dynamiccontent/selectors';

import { eventconceptsByPriority } from '../../redux/dynamiccontent/selectors';

class Footer extends PureComponent {
    renderConceptLinks(eventConcepts) {
        return eventConcepts.map(concept => {
            return (
                <Link
                    key={concept.slug}
                    className="FooterInner--right__section-link"
                    to={`/concepts/${concept.slug}`}
                >
                    {concept.name}
                </Link>
            );
        });
    }

    renderExtraPageLinks(pages) {
        return pages.map(page => {
            return (
                <Link
                    key={page.slug}
                    className="FooterInner--right__section-link"
                    to={`/${page.slug}`}
                >
                    {page.navTitle}
                </Link>
            );
        });
    }

    render() {
        const {
            siteSlogan,
            siteContactEmail,
            eventConcepts,
            homePages,
            eventPages,
            communityPages
        } = this.props;
        return (
            <footer className="Footer">
                <div className="FooterInner">
                    <div className="FooterInner--left">
                        <img
                            className="FooterInner--left__logo"
                            src={require('../../assets/logos/black_heltech_logo.png')}
                            alt="Junction logo"
                        />
                        <p className="FooterInner--left__slogan">
                            {siteSlogan}
                        </p>
                        <a
                            className="FooterInner--left__contact"
                            href={`mailto:${siteContactEmail}`}
                        >
                            {siteContactEmail}
                        </a>
                        <Divider sm />
                        <SocialMediaIcons />
                    </div>
                    <div className="FooterInner--separator" />
                    <nav className="FooterInner--right">
                        <div className="FooterInner--right__section">
                            <Link to="/">
                                <h5 className="FooterInner--right__section-title">
                                    Home
                                </h5>
                            </Link>
                            <Link
                                className="FooterInner--right__section-link"
                                to="/story"
                            >
                                Story
                            </Link>
                            <Link
                                className="FooterInner--right__section-link"
                                to="/calendar"
                            >
                                Calendar
                            </Link>
                            <Link
                                className="FooterInner--right__section-link"
                                to="/team"
                            >
                                Team
                            </Link>
                            {this.renderExtraPageLinks(homePages)}
                        </div>
                        <div className="FooterInner--right__section">
                            <h5 className="FooterInner--right__section-title">
                                Community
                            </h5>
                            <Link
                                className="FooterInner--right__section-link"
                                to="/partners"
                            >
                                For partners
                            </Link>
                            <Link
                                className="FooterInner--right__section-link"
                                to="/participants"
                            >
                                For speakers
                            </Link>
                            {this.renderExtraPageLinks(communityPages)}
                        </div>
                        <div className="FooterInner--right__section">
                            <a href="https://medium.com/heltech" alt="terms">
                                <h5 className="FooterInner--right__section-title">
                                    Blog
                                </h5>
                            </a>
                            <a
                                href="https://www.hackjunction.com/policy"
                                alt="policy"
                            >
                                <h5 className="FooterInner--right__section-title">
                                    Privacy policy
                                </h5>
                            </a>
                            <a
                                href="https://www.hackjunction.com/terms"
                                alt="terms"
                            >
                                <h5 className="FooterInner--right__section-title">
                                    Terms & Conditions
                                </h5>
                            </a>
                        </div>
                    </nav>
                </div>
                <div className="FooterBottom">
                    <span className="FooterBottom--text">
                        Designed and developed with{' '}
                        <span role="img" aria-label="love">
                            💕
                        </span>{' '}
                        &{' '}
                        <span role="img" aria-label="coffee">
                            ☕
                        </span>{' '}
                        by the Junction Team.
                    </span>
                </div>
            </footer>
        );
    }
}

const mapStateToProps = state => {
    const getText = ContentSelectors.buildGetText(state);
    return {
        siteSlogan: getText('siteSlogan'),
        siteContactEmail: getText('siteContactEmail'),
        homePages: homePages(state),
        eventPages: eventPages(state),
        communityPages: communityPages(state),
        eventConcepts: eventconceptsByPriority(state)
    };
};

export default connect(mapStateToProps)(Footer);
