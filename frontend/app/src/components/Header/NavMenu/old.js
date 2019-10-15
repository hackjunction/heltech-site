import React from "react";
import "./style.scss";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { map } from "lodash-es";

import * as Actions from "../../../redux/dynamiccontent/actions";

import {
  homePages,
  eventPages,
  communityPages,
  eventconceptsByPriority,
  isSidebarOpen
} from "../../../redux/dynamiccontent/selectors";

const ExtraPagesSection = React.memo(({ pages }) => {
  return map(pages, page => {
    return (
      <Link
        key={page.slug}
        className="NavMenu--inner__menu-item"
        to={"/" + page.slug}
      >
        {page.navTitle}
      </Link>
    );
  });
});

const ConceptPagesSection = React.memo(({ concepts }) => {
  return map(concepts, concept => {
    return (
      <Link
        key={concept.slug}
        className="NavMenu--inner__menu-item"
        to={`/concepts/${concept.slug}`}
      >
        {concept.name}
      </Link>
    );
  });
});

const NavMenuInner = React.memo(
  ({ eventConcepts, homePages, eventPages, communityPages }) => {
    return (
      <div className="NavMenu--inner">
        <Link to="/">
          <img
            className="NavMenu--inner__logo"
            src={require("../../../assets/logos/black_heltech_logo.png")}
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
          <ExtraPagesSection pages={homePages} />

          <h6 className="NavMenu--inner__menu-title">Community</h6>
          <Link className="NavMenu--inner__menu-item" to="/partners">
            For partners
          </Link>
          <Link className="NavMenu--inner__menu-item" to="/participants">
            For speakers
          </Link>

          <ExtraPagesSection pages={communityPages} />
          <Link to="/team">
            <h6 className="NavMenu--inner__menu-title">Contact</h6>
          </Link>
        </nav>
      </div>
    );
  }
);
const mapStateToPropsInner = state => ({
  eventConcepts: eventconceptsByPriority(state),
  homePages: homePages(state),
  eventPages: eventPages(state),
  communityPages: communityPages(state)
});

const ConnectedNavMenuInner = connect(mapStateToPropsInner)(NavMenuInner);

const NavMenu = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className="NavMenuWrapper">
      <div
        className={`NavMenuOverlay ${
          isSidebarOpen ? "NavMenuOverlay-open" : ""
        }`}
        onClick={() => toggleSidebar(false)}
      />
      <div className={`NavMenu ${isSidebarOpen ? "NavMenu-open" : ""}`}>
        <ConnectedNavMenuInner />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isSidebarOpen: isSidebarOpen(state)
});

const mapDispatchToProps = dispatch => ({
  toggleSidebar: open => dispatch(Actions.toggleSidebar(open))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavMenu);
