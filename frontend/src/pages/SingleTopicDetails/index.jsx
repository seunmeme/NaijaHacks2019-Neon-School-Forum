import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Container } from 'semantic-ui-react'
import Navbar from '../../component/Navbar';
import TopicPanel from '../../component/TopicPanel';

class SingleTopicDetails extends Component {


  render(){
    const {id} = this.props.match.params
    const {isAuthenticated} = this.props.students;
    return (
      <>
        <Navbar isAuthenticated={isAuthenticated} singlePage />
        <Container>
          <TopicPanel topicId={id}/>
        </Container>
      </>
    )
  }
}

const mapStateToProps = state => {
  const {students} = state;
  return {students}
}

export default connect(mapStateToProps)(SingleTopicDetails);
