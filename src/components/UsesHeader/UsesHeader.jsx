import React from "react";
import PropTypes from "prop-types";
import "./UsesHeader.css";

const UsesHeader = ({ title, content }) => {
  return (
    <div className="uses-header">
      <h1>{title}</h1>
      <div className="uses-content">
        {content ? content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      </div>
    </div>
  );
};

UsesHeader.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
};

export default UsesHeader;
