import "./UsesSection.css";
import PropTypes from "prop-types";
import UsesCard from "../UsesCard/UsesSection/UsesCard";

const UsesSection = ({ items }) => {
  return (
    <section className="uses-section">
      <div className="uses-section__content">
        {items.map((item, index) => (
          <div className="uses-section__group" key={index}>
            <h2>{item.groupName}</h2>
            <div className="contentAlign">
              {item.items.map((itemInside, i) => (
                <div className="uses-section__group-content" key={i}>
                  <UsesCard title={itemInside.title} content={itemInside.description} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

UsesSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      groupName: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
        })
      ),
    })
  ),
};

UsesSection.defaultProps = {
  items: [],
};

export default UsesSection;
