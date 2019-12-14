import React from 'react'
import ImageUrl from '../../constants'
import './DiscussionCard.scss'

const DiscussionCard = ({discussion}) => (
  <div className="discussion-section">
    <div className="discussion-card">
      <div className="discussant-img">
        <img
          src={discussion.User.imageUrl ? discussion.User.imageUrl : ImageUrl.placeholderImageUrl}
          alt="discussant"
        />
        <p>2 days ago</p>
      </div>
      <div className="discussion">
        <p>{discussion.content}</p>
      </div>
    </div>
    <div className="comment-pane">
      <p className="add-comment">add comment</p>
      <div className="comment-section">
        <p><span>@tobi</span> - Lorem ipsum dolor sit amet consectetur.</p>
        <p><span>@titi</span> - Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
    </div>
  </div>
)

export default DiscussionCard;
