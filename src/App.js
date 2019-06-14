import React from 'react';
import logo from './logo.svg';
import './App.css';

import { addUser }  from './graphql/mutations';
import awsconfig from './aws-exports';
import { API, graphqlOperation } from "aws-amplify";
API.configure(awsconfig);


class App extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.addData();
  }

  async addData() {
    const newUser = {id: Date.now().toString(), name:'Test' + Date.now().toString()};
    await API.graphql(graphqlOperation(addUser, newUser)).then((result) => {
      console.log('success');
      console.log(result);
      this.setState( {
        data: result
      })
    }).catch((err) => {console.error(err)});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

}

export default App;
