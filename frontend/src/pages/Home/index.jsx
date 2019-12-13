import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Container } from 'semantic-ui-react'
import Navbar from '../../component/Navbar';
import Banner from '../../component/Banner';
import TabbedPanel from '../../component/TabbedPanel';

class Home extends Component {
  
  render(){
    const {isAuthenticated} = this.props.students;
    return (
      <>
        <Navbar isAuthenticated={isAuthenticated} />
        <Container>
          <Banner isAuthenticated={isAuthenticated} />
          <TabbedPanel />
        </Container>
      </>
    )
  }
}

const mapStateToProps = state => {
  const {students} = state;
  return {students};
}

export default connect(mapStateToProps)(Home);
