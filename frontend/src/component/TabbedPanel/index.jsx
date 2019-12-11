import React from 'react';
import { Tab } from 'semantic-ui-react';
import TopicCard from '../../component/TopicCard';
import './TabbedPanel.scss';

const panes = [
  {
    menuItem: 'Science',
    render: () => <Tab.Pane className="tab-content" attached={false}>
      <div className="pane-container">
        <TopicCard />
        <TopicCard />
      </div>
    </Tab.Pane>,
  },
  {
    menuItem: 'Arts',
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  },
  {
    menuItem: 'Commercial',
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
]

const TabPanel = () => (
  <Tab
    className="tab"
    menu={{ secondary: true, pointing: true }}
    panes={panes}
  />
)

export default TabPanel