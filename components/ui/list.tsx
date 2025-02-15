import React from "react";
import "../../styles/nebiourflip.css"; // Assuming you have a CSS file for styling

const List: React.FC = () => {
  return (
    <div className="containerr">
      <div className="paper">
        <h1 className="DouYo">DO YOU KNOW?</h1>
        <p className="DouYoP">With over <b>400 million</b> views on YouTube, our work speaks for itself. We've partnered with industry giants like Amazon Prime Video, Stage OTT, and many more, delivering high-quality, impactful content that truly engages audiences. 🎥✨</p>
      </div>
      <ul className="numbers" role="list">
        {socialLinks.map((item, index) => (
          <li className="number" role="listitem" key={index}>
            <div className="link-wrapper">
              <i className={`fab ${item.icon}`} aria-hidden="true"></i>
              <a href={item.link} aria-label={`${item.name} profile`}>
                {item.username}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Social links data
const socialLinks = [
  {
    name: "Twitter",
    icon: "fa-twitter",
    link: "https://twitter.com/s_aitchison",
    username: "@s_aitchison",
  },
  {
    name: "DEV",
    icon: "fa-dev",
    link: "https://dev.to/s_aitchison",
    username: "@s_aitchison",
  },
  {
    name: "Instagram",
    icon: "fa-instagram",
    link: "https://www.instagram.com/suzanneaitchison/",
    username: "@suzanneaitchison",
  },
  {
    name: "GitHub",
    icon: "fa-github",
    link: "https://github.com/aitchiss",
    username: "@aitchiss",
  },
  {
    name: "CodePen",
    icon: "fa-codepen",
    link: "https://codepen.io/aitchiss",
    username: "@aitchiss",
  },
];

export default List;
