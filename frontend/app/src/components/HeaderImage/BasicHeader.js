import React from "react";
import "./style.scss";

const BasicHeader = ({ title, body } = this.props) => {
  return (
    <div className="BasicHeader">
      <h2 className="BasicHeader--title">{title}</h2>
      <p className="BasicHeader--body">{body}</p>
    </div>
  );
};

export default BasicHeader;
