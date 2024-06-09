import "./Navbar.css";
import PropTypes from "prop-types";
import Switcher from "../Switcher/Switcher";

function Navbar({ options }) {
  return (
    <div className="nav-element">
      <nav data-testid="nav" className="navbar">
        <ul data-testid="ul" className="navbar-ul">
          {options?.map((element, index) => (
            <li data-testid="li" key={index}>
              <a href={element.path} className="link">
                {element.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="swicher-style">
        <Switcher darkClassName="dark-mode" />
      </div>
    </div>
  );
}

Navbar.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
