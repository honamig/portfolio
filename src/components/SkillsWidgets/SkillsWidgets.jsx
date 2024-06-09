import PropTypes from "prop-types";
import "./SkillsWidgets.css";
import Image from "next/image";

const SkillsWidget = ({ title, content, skills }) => {
  return (
    <section className="skills-widget">
      <h2>{title}</h2>
      <p>{content}</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className="skills-item">
            <Image src={skill.icon} alt={`${skill.name} Icon`} width={40} height={40} className="skills-item-icon" />
            <div className="skills-item-details">
              <h3 className="skills-item-title">{skill.name}</h3>
              <div className="skills-item-proficiency">
                <div className="proficiency-bar" style={{ width: `${skill.proficiency}%` }}></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

SkillsWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      proficiency: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SkillsWidget;
