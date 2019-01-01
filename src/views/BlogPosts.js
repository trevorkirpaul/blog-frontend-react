import React from 'react';
import { Query } from 'react-apollo';

import Loading from 'components/Loading';
import BlogPost from 'components/BlogPost';
import { GET_POSTS } from 'graphQL/queries';

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
