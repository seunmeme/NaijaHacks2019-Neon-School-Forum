import React from 'react';
import { Button, Icon } from 'semantic-ui-react'
import DiscussionCard from '../DiscussionCard'
import './TopicPanel.scss';

const TopicPanel = (props) => {
  return (
    <>
      <div className="topic-panel">
        <div className="user-section">
          <div className="edit-icon">
            <Icon name='edit' color="red" />
          </div>
          <img
            src="https://res.cloudinary.com/dx0nauane/image/upload/v1576065923/avatar.jpg"
            alt="title author"
          />
          <p className="username">@Joy_Vincent</p>
          <p>Mofessor group of school</p>
          <p>25 Topics</p>
        </div>
        <div className="topic-section">
          <div className="topic-area">
            <h2>Motion</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet porro hic commodi magni, expedita voluptatum debitis similique alias consequuntur ullam nam, veritatis quod laboriosam. Voluptatem, velit est temporibus mollitia sapiente voluptatibus odit impedit id, repudiandae vel facere dignissimos, pariatur dolore animi ducimus quae. Deleniti ex neque mollitia dignissimos in doloribus.
            </p>
          </div>
          <div className="special-icon">
            <Icon className="cursor" name='share alternate square' />
            <div>
              <Icon className="cursor" name='heart outline' /> <span>2</span>

            </div>
            <p>2 mins ago</p>
          </div>
        </div>
      </div>
      <div className="comment-panel">
        <p>add comment</p>
        <div className="comment-section">
          <p><span>@tobi</span> - Lorem ipsum dolor, sit amet</p>
          <p><span>@fred</span> - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi.</p>
          <p><span>@fred</span> - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi.</p>
          
        </div>
      </div>
      <div  className="discussion-panel">
        <h3>Discussions</h3>
        <hr/>
        <Button color="red" className="custom-btn" animated='fade'>
          <Button.Content visible>Join</Button.Content>
          <Button.Content hidden>Discussion</Button.Content>
        </Button>
        <DiscussionCard />
        <DiscussionCard />
      </div>
    </>
  )
}


export default TopicPanel;
