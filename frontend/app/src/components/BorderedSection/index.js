import React from "react";
import "./style.scss";

const BorderedSection = ({ title, content } = this.props) => {
  return (
    <div className="BorderedSection">
      <div className="BorderedSection--left">
        <h3 className="BorderedSection--title">{title}</h3>
      </div>
      <div className="BorderedSection--right">
        <p className="BorderedSection--content">{content}</p>
      </div>
    </div>
  );
};

export default BorderedSection;
