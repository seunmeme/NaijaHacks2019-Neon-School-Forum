import React from 'react';
import { withRouter } from 'react-router-dom';
import './TopicCard.scss';

const TopicCard = (props) => {
  return (
  <div 
    className="card"
    onClick={() => props.history.push(`/topic/${1}`)}
  >
    <h1>Motion</h1>
    <p>I want to know more about the types of motion, any comment is welcome and how things are done in relation to what we are....</p>
    <div className="card-content">
      <img
        alt="user profile"
        className="card-avatar"
        src="https://res.cloudinary.com/dx0nauane/image/upload/v1576065923/avatar.jpg" />
      <div className="card-info">
        <div className="card-details">
          <h2>Joyce Dennis</h2>
          <p>Mofessor group of school</p>
        </div>
        <p>24 views</p>
      </div>
    </div>
  </div>
  )
}


export default withRouter(TopicCard);
