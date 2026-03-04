import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate.jsx';
import StreamDelete from './streams/StreamDelete.jsx';
import StreamEdit from './streams/StreamEdit.jsx';
import StreamList from './streams/StreamList.jsx';
import StreamShow from './streams/StreamShow.jsx';
import Header from './Header.jsx';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
