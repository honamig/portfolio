import "./ProfileHeader.css";
import PropTypes from "prop-types";
import Image from "next/image";
import defaltImage from "./ProfileIcon/profile.JPG";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ProfileHeader = ({ imageUrl, name, bio, linkedinUrl, githubUrl, twitterUrl }) => {
  return (
    <div className="profile-header">
      <Image className="profile-icon" src={imageUrl || defaltImage} alt="Profile Icon" width={400} height={400} />
      <div className="profile-details">
        <h1 className="home-head-title">{name}</h1>
        <p className="home-description">{bio}</p>
        <div className="social-links">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

ProfileHeader.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  linkedinUrl: PropTypes.string.isRequired,
};

export default ProfileHeader;
