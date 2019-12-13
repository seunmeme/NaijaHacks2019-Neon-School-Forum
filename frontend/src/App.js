import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { toast } from 'react-toastify';
import Home from './pages/Home';
import SingleTopicDetails from './pages/SingleTopicDetails';
import NotFound from './pages/NotFound';


function App() {
  toast.configure({
    autoClose: 2000,
    draggable: false,
  })
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path={`/topic/:id`} exact={true} component={SingleTopicDetails} />
          <Route path={'*'} exact={true} component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
