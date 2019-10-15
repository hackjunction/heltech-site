import React from "react";
import "./style.scss";

const SingleColumnSection = ({ title, subtitle, children } = this.props) => {
  return (
    <div className="SingleColumnSection">
      <h3 className="SingleColumnSection--title">{title}</h3>
      <p className="SingleColumnSection--subtitle">{subtitle}</p>
      <div className="SingleColumnSection--content">{children}</div>
    </div>
  );
};
export default SingleColumnSection;
