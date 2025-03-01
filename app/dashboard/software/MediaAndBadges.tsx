import React from 'react';
import './software.css';

const MediaAndBadges: React.FC = () => {
  return (
    <section className="media-badges-section">
      <h2 className="mb-heading">Media &amp; <span className="relative z-50 text-transparent bg-clip-text bg-gradient-to-r from-[#5a6042] to-[#b4b98d]">Badges</span>
        </h2>

      <hr className="fade-2"/>
      <p className="mb-description">
        Googenix provides personalized on-demand applications for business and mobile phones. 
        We are listed on the following platforms.
      </p>

      <div className="badges-container">
        {/* Replace these src values with your actual badge image URLs */}
        <img alt="Custom mobile app development company" loading="lazy" src="https://www.itfirms.co/wp-content/uploads/2023/06/itfirms-top-app-developers-badge-2023.png" width="183" height="370" className="badge-image" />
        <img alt="Custom mobile app development company" loading="lazy" src="https://topfirms.co/wp-content/uploads/2019/10/top-mobile-app-development-company-badge.jpg" width="183" height="370" className="badge-image" />
        <img alt="Custom mobile app development company" loading="lazy" src="https://www.topdevelopers.co/assets/badges/app-2023/Mobile-App/Global/badge-top-mobile-app-developers-2023.png" title="Mobile App Development Companies" width="183" height="370" className="badge-image" />
        <img  alt="Custom mobile app development company" loading="lazy" src="https://wadline.com/badges/june/badge/Badge_Colored_Mobile.svg" width="183" height="370" className="badge-image" />
        <img alt="Custom mobile app development company" loading="lazy" src="https://cdn.appsrhino.com/new-website-2022/assets/new-icons/top-mobileapp-development-companies_Badge1-new.svg" width="183" height="370" className="badge-image" />
      </div>
    </section>
  );
};

export default MediaAndBadges;
