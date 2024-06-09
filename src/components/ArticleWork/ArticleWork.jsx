import PropTypes from "prop-types";
import Image from "next/image";
import "./ArticleWork.css";

const ArticleWork = ({ title, content, items }) => {
  return (
    <section data-testid="articleWork" className="article-work">
      <h2 data-testid="articleWorkTitle" className="work-h2">
        {title}
      </h2>
      <p data-testid="articleWorkContent" className="work-p">
        {content}
      </p>
      <ul>
        {items.map((item, index) => (
          <li key={index} data-testid={`workItem${index}`}>
            <div className="work-item">
              <div className="work-item-icon">
                <Image src={item.icon} alt={`${item.name} Icon`} width={52} height={52} />
              </div>
              <div className="setItemWork">
                <h3 data-testid={`workItemTitle${index}`} className="work-item-title">
                  {item.name}
                </h3>
                <div className="work-item-content-details">
                  <p className="work-item-role">Software Engineer</p>
                  <p data-testid={`workItemDuration${index}`} className="work-item-duration">
                    {item.startYear} - {item.endYear}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

ArticleWork.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ArticleWork;
