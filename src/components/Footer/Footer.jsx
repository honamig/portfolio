import PropTypes from "prop-types";
import "./Footer.css";

function Footer({ options }) {
  return (
    <div className="nav-element-footer">
      <nav data-testid="nav" className="navbar-footer">
        <ul data-testid="ul" className="navbar-ul-footer">
          {options?.map((element, index) => (
            <li data-testid="li" key={index}>
              <a href={element.path} className="link-footer">
                {element.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="footer-p">© 2024 Honami. All rights reserved.</p>
      </nav>
    </div>
  );
}

Footer.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Footer;
