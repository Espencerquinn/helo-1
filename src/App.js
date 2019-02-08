import React, { Component } from 'react';
import './App.css';
import routes from './routes'
import { HashRouter as Router} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import store from './ducks/store';
import { Provider } from 'react-redux';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
            <Nav/>
            {routes}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
