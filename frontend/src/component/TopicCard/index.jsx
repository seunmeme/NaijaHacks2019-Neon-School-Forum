import React from 'react';
import { withRouter } from 'react-router-dom';
import './TopicCard.scss';

const TopicCard = (props) => {
  const {history, topic: {id, title, content, User: {imageUrl, school, fullname}}} = props
  return (
  <div 
    className="card"
    onClick={() => history.push(`/topic/${id}`)}
  >
    <h1>{title}</h1>
    <div className="card-paragraph">
      <p>{content}</p>
    </div>
    <div className="card-content">
      <img
        alt="user profile"
        className="card-avatar"
        src={imageUrl ? imageUrl : "https://res.cloudinary.com/dx0nauane/image/upload/v1576315771/placeholder_image.jpg"} />
      <div className="card-info">
        <div className="card-details">
          <h2>{fullname}</h2>
          <p>{school}</p>
        </div>
        <p>24 views</p>
      </div>
    </div>
  </div>
  )
}


export default withRouter(TopicCard);
