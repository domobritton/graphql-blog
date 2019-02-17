import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  uri: `https://api-uswest.graphcms.com/v1/cjs8kc06b9agq01gjxanpv3m4/master`
});

const POSTS_QUERY = gql`
  query allPosts {
    posts {
      id
      title
      body
    }
  }
`;

// test the connection to graphcms
// client.query({
//   query: testQuery
// }).then(res => console.log(res));

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Query query={POSTS_QUERY}>
            {({ data, loading }) => {
              if (loading) return `Loading...`;
              const { posts } = data;
              return posts.map(post => <h1 key={post.id}>{post.title}</h1>)
            }}
          </Query>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
