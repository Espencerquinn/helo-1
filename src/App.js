import React, { Component } from 'react';
import './App.css';
import routes from './routes'
import { HashRouter as Router} from 'react-router-dom';
import Nav from './components/Nav/Nav';

class App extends Component {

  componentDidMount(){
    console.log(this.props)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
          <Nav/>
          {routes}
          <img src={'./graphics/logo.png'} className="App-logo" alt="logo" />
        </div>
      </Router>
    );
  }
}

export default App;
