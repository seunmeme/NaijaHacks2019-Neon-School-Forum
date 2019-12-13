import React from 'react';
import { Container } from 'semantic-ui-react'
import Navbar from '../../component/Navbar';
import TopicPanel from '../../component/TopicPanel';

const SingleTopicDetails = () => {
  return (
    <>
      <Navbar singlePage />
      <Container>
        <TopicPanel />
      </Container>
    </>
  )
}

export default SingleTopicDetails;
