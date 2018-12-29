import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loading from 'components/Loading';
import BlogPost from 'components/BlogPost';

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

const BlogPosts = () => {
  return (
    <Query query={GET_POSTS}>
      {({ data, loading, error }) => {
        if (loading) {
          return <Loading />;
        }

        if (error) {
          return <span>error</span>;
        }

        return (
          <div>
            <h1>Blog Posts</h1>

            <ul>
              {data.posts &&
                data.posts.map((post, index) => (
                  <BlogPost key={post.id} {...post} index={index} />
                ))}
            </ul>
          </div>
        );
      }}
    </Query>
  );
};

export default BlogPosts;
