import React from "react";
import "./style.scss";

import { connect } from "react-redux";
import { map } from "lodash-es";
import { stories } from "../../redux/dynamiccontent/selectors";
import LinkGrid from "./index.js";

const StoryGrid = ({ stories }) => {
  const items = map(stories, s => {
    return {
      image: s.logo,
      url: s.website,
      alt: s.name
    };
  });

  return <LinkGrid links={items} />;
};

const mapStateToProps = state => ({
  stories: stories(state)
});

export default connect(mapStateToProps)(StoryGrid);
