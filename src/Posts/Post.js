import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

export default class Post extends Component {
  render() {
      const { match } = this.props;
    return (
        <Query 
            query={POST_QUERY} 
            variables={{
                id: match.params.id
            }}
        >
            {({ data, loading }) => {
                if (loading) return `Loading...`;
                const { post } = data;
                return <h1 key={post.id}>{post.title}</h1>
            }}
        </Query>
    )
  }
}

const POST_QUERY = gql`
  query post($id: ID!) {
    post(where: { id: $id }) {
        id
        title
        body 
    }
  }
`;
