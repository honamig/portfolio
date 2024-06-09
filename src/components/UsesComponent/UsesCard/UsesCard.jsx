import "./UsesCard";
import PropTypes from "prop-types";

const UsesCard = ({ title, content }) => {
  return (
    <div className={"uses-card"}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

UsesCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default UsesCard;
