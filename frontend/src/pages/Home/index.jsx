import React from 'react';
import { Container } from 'semantic-ui-react'
import Navbar from '../../component/Navbar';
import Banner from '../../component/Banner';
import TabbedPanel from '../../component/TabbedPanel';

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Banner />
      <TabbedPanel />
    </Container>
  )
}

export default Home;
