import React from "react";
import "./style.scss";

import ImageLink from "../ImageLink";

const ImageLinks = (imageLinks = this.props) => {
  const renderLinks = links => {
    return links.links.map(link => {
      return <ImageLink key={link.linkTo} {...link} />;
    });
  };
  return <div className="ImageLinks">{renderLinks(imageLinks)} </div>;
};

export default ImageLinks;
