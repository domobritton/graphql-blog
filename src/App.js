import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Posts from './Posts/Posts';
import Post from './Posts/Post';
import NewPost from './Posts/NewPost';
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  uri: `https://api-uswest.graphcms.com/v1/cjs8kc06b9agq01gjxanpv3m4/master`
});

// test the connection to graphcms
// client.query({
//   query: testQuery
// }).then(res => console.log(res));

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to={'/'}>
              Home
            </Link>
          </header>
          <Link to={'/post/new'}>New Post</Link>
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/post/new" component={NewPost} />
            <Route path="/post/:id" component={Post} />
          </Switch>
        </div>

      </Router>
      </ApolloProvider>
    );
  }
}

export default App;
