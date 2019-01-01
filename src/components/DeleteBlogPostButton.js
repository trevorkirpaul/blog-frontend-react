import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import Button from './Button';

const GET_POSTS = gql`
  query {
    posts {
      title
      body
      id
      author {
        email
      }
    }
  }
`;

const DELETE_POST = gql`
  mutation DeletePost($postID: ID) {
    deletePost(postID: $postID) {
      id
    }
  }
`;

const DeleteBlogPostButton = props => {
  return (
    <Mutation
      mutation={DELETE_POST}
      update={(
        cache,
        {
          data: {
            deletePost: { id },
          },
        }
      ) => {
        /*
          We'll use the `GET_POSTS` query to pull the posts
          stored in the cache then filter out the post we just
          successfully deleted.

          We'll know it was a successful delete bc the post id
          is coming back to us from the mutation response
        */

        const { posts } = cache.readQuery({ query: GET_POSTS });
        return cache.writeQuery({
          query: GET_POSTS,
          data: {
            posts: posts.filter(post => post.id !== id),
          },
        });
      }}
    >
      {(deletePost, { data, loading }) => (
        <Button
          onClick={() =>
            deletePost({
              variables: {
                postID: props.postID,
              },
            })
          }
          circle
        >
          {loading ? (
            <i className="fas fa-spinner" />
          ) : (
            <i className="fas fa-trash-alt" />
          )}
        </Button>
      )}
    </Mutation>
  );
};

export default DeleteBlogPostButton;
