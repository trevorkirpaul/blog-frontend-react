import React from 'react';
import { Mutation } from 'react-apollo';

import { DELETE_POST } from 'graphQL/mutations';
import { GET_POSTS } from 'graphQL/queries';

import Button from './Button';

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
