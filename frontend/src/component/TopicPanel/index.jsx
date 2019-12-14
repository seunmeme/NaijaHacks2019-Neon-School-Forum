import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Icon, Input } from 'semantic-ui-react'
import DiscussionCard from '../DiscussionCard'
import { getSingleTopic, getTopicComments } from '../../store/actions'
import imageUrl from '../../constants/index'
import './TopicPanel.scss';

class TopicPanel extends Component {

  componentDidMount(){
    this.props.getSingleTopic(this.props.topicId)
    this.props.getTopicComments(this.props.topicId)
  }
 
  render(){
    // console.log(this.props.comments, 'comments')
    // const {data: {title, content, User: {imageUrl, school, username} } } = this.props.singleTopic;
    const {singleTopic: { data }, comments }= this.props;
    // console.log(comments, 'comments')
    return (
      <>
        <div className="topic-panel">
          <div className="user-section">
            <div className="edit-icon">
              <Icon name='edit' color="red" />
            </div>
            <img
              src={data && data.User.imageUrl? data.User.imageUrl : imageUrl.placeholderImageUrl}
              alt="title author"
            />
            <p className="username">{`@${data && data.User.username}`}</p>
            <p>{data && data.User.school}</p>
            <p>25 Topics</p>
          </div>
          <div className="topic-section">
            <div className="topic-area">
              <h2>{data && data.title}</h2>
              <p>{data && data.content}</p>
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
            <Input className="custom-input" type='text' placeholder='Search...' action>
              <input />
              <Button type='submit'>Comment</Button>
              <Button className="close-btn"><><Icon name="window close" />Close</></Button>
            </Input><div className="comment-section">
            {comments.data && comments.data.map((comment, index) => <p key={`comment${index}`}><span>@tobi</span>{` - ${comment.content}`}</p>)}
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
}

TopicPanel.propTypes = {
  singleTopic: PropTypes.shape({
    data: PropTypes.object
  })
}

TopicPanel.defaultProps = {
  singleTopic: PropTypes.shape({
    data: {}
  })
}

const mapStateToProps = state => {
  const {singleTopic, comments} = state;
  return {singleTopic, comments}
}

export default connect(mapStateToProps, { getSingleTopic, getTopicComments })(TopicPanel);
