import "./Navbar.css";
import PropTypes from "prop-types";

function Footer({ options }) {
  return <></>;
}

Navbar.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Footer;
