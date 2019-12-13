import React from 'react'
import './DiscussionCard.scss'

const DiscussionCard = () => (
  <div className="discussion-section">
    <div className="discussion-card">
      <div className="discussant-img">
        <img
          src="https://res.cloudinary.com/dx0nauane/image/upload/v1576065923/avatar.jpg"
          alt="discussant"
        />
        <p>2 days ago</p>
      </div>
      <div className="discussion">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae asperiores consectetur voluptas fuga reiciendis mollitia adipisci praesentium sed. Explicabo a iste molestias cumque impedit temporibus rem ducimus pariatur, laudantium maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, fugiat quisquam repellendus illum inventore omnis facere! Voluptatem quae ipsam suscipit deserunt</p>
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
