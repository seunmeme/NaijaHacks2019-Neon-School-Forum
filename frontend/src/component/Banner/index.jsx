import React from 'react';
// import SignupModal from '../SignupModal';
import './Banner.scss';
import CreateTopicModal from '../CreateTopicModal';

const title = "Introducing a school forum";

const text = "Where brilliant minds around the globe can interact and learn together. Create a topic and start discussion from the comfort of your home.";

const Banner = () => (
  <div className="banner">
    <div className="intro">
      <div className="intro-content">
        <h1>{title}</h1>
        <p>{text}</p>
        {/* <SignupModal /> */}
        <CreateTopicModal />
      </div>
    </div>
    <div className="banner-img">
      <img
        src="https://res.cloudinary.com/dx0nauane/image/upload/v1576029770/neon_img_1.jpg"
        alt="banner"
      />
    </div>
  </div>
);

export default Banner;
