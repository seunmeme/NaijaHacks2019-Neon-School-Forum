import React from 'react';
import { Container } from 'semantic-ui-react'
import Navbar from '../../component/Navbar';
import Banner from '../../component/Banner';

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Banner />
    </Container>
  )
}

export default Home;
