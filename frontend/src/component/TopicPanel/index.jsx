import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import { Button, Icon, Input, TextArea, Form } from 'semantic-ui-react'
import DiscussionCard from '../DiscussionCard'
import { getSingleTopic, getTopicComments, postComment, getDiscussions } from '../../store/actions'
import imageUrl from '../../constants/index'
import './TopicPanel.scss';
import 'react-toastify/dist/ReactToastify.css';

class TopicPanel extends Component {

  state = {
    comment: ""
  }

  componentDidMount(){
    this.props.getSingleTopic(this.props.topicId)
    this.props.getTopicComments(this.props.topicId)
    this.props.getDiscussions(this.props.topicId)
  }

  handleComment = (e, data) => this.setState({ comment: data.value})

  handleCommentSubmit = async() => {
    const { comment } = this.state;
    const { topicId, postComment } = this.props;

    if(comment.length) {
      await postComment(topicId, comment);
      this.setState({comment: "Comment here..."})
    }
  }
 
  render(){
    // console.log(this.props.comments, 'comments')
    // const {data: {title, content, User: {imageUrl, school, username} } } = this.props.singleTopic;
    const {singleTopic: { data }, comments, discussions }= this.props;
    console.log(discussions, 'discussions')
    return (
      <>
        <div className="topic-panel">
          <ToastContainer />
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
             <Form onSubmit={this.handleCommentSubmit}>
                <TextArea placeholder='Comment here...'  onChange={this.handleComment} required/>
                <Button type='submit'>Comment</Button>
                <Button className="close-btn"><><Icon name="window close" />Close</></Button>
            </Form>
            <div className="comment-section">
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
          {discussions.data && discussions.data.map((discussion, index) =>  <DiscussionCard key={`dis${index}`} discussion={discussion} />)}
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
  const {singleTopic, comments, discussions} = state;
  return {singleTopic, comments, discussions}
}

export default connect(mapStateToProps, { getSingleTopic, getTopicComments, postComment, getDiscussions })(TopicPanel);
