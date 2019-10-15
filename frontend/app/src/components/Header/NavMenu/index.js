import React, { memo } from 'react';
import './style.scss';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as StaticSelectors from '../../../redux/staticcontent/selectors';

import { toggleSidebar } from '../../../redux/dynamiccontent/actions';
import { isSidebarOpen } from '../../../redux/dynamiccontent/selectors';

const NavMenuInner = memo(() => {
    return (
        <div className="NavMenu--inner">
            <Link to="/">
                <img
                    className="NavMenu--inner__logo"
                    src={require('../../../assets/logos/black_heltech_logo.png')}
                    alt="Junction text logo"
                />
            </Link>
            <nav className="NavMenu--inner__menu">
                <Link to="/">
                    <h6 className="NavMenu--inner__menu-title">Home</h6>
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/story">
                    Story
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/calendar">
                    Calendar
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/team">
                    Team
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/past-speakers">
                    Past Speakers
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/dev">
                    Hel Tech //Dev
                </Link>
                <h6 className="NavMenu--inner__menu-title">Community</h6>
                <Link className="NavMenu--inner__menu-item" to="/partners">
                    For partners
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/participants">
                    For speakers
                </Link>

                <Link to="/team">
                    <h6 className="NavMenu--inner__menu-title">Contact</h6>
                </Link>
            </nav>
        </div>
    );
});

const ConnectedNavMenuInner = NavMenuInner;

const NavMenu = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <div className="NavMenuWrapper">
            <div
                className={`NavMenuOverlay ${
                    isSidebarOpen ? 'NavMenuOverlay-open' : ''
                }`}
                onClick={() => toggleSidebar(false)}
            />
            <div className={`NavMenu ${isSidebarOpen ? 'NavMenu-open' : ''}`}>
                <ConnectedNavMenuInner />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isSidebarOpen: isSidebarOpen(state)
});

const mapDispatchToProps = dispatch => ({
    toggleSidebar: open => dispatch(toggleSidebar(open))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavMenu);
