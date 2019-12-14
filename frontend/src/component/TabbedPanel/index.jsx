import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import { Tab } from 'semantic-ui-react';
import TopicCard from '../../component/TopicCard';
import {getTopicsByCategory} from '../../store/actions'
import './TabbedPanel.scss';


class TabPanel extends Component {
  
  componentDidMount(){
    this.props.getTopicsByCategory('science')
    this.props.getTopicsByCategory('arts')
    this.props.getTopicsByCategory('commercial')
  }
  
  panes = [
    {
      menuItem: 'Science',
      render: () => <Tab.Pane className="tab-content" attached={false}>
        <div className="pane-container">
          {this.props.topics.science && this.props.topics.science.data.map((topic, index) => <TopicCard key={`topic${index}`} topic={topic} />)}
        </div>
      </Tab.Pane>,
    },
    {
      menuItem: 'Arts',
      render: () => <Tab.Pane attached={false}>
          <div className="pane-container">
            {this.props.topics.arts && this.props.topics.arts.data.map((topic, index) => <TopicCard key={`topic${index}`} topic={topic} />)}
          </div>
        </Tab.Pane>,
    },
    {
      menuItem: 'Commercial',
      render: () => <Tab.Pane attached={false}>
          <div className="pane-container">
            {this.props.topics.commercial && this.props.topics.commercial.data.map((topic, index) => <TopicCard key={`topic${index}`} topic={topic} />)}
          </div>
        </Tab.Pane>,
    },
  ]

  render(){
    console.log(this.props.topics, 'topics')
    return(
      <Tab
        className="tab"
        menu={{ secondary: true, pointing: true }}
        panes={this.panes}
      />
    )
  }
}

const mapStateToProps = state => {
  const { topics } = state;
  return {topics};
}


export default connect(mapStateToProps, { getTopicsByCategory })(TabPanel)