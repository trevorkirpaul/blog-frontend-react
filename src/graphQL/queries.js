import gql from 'graphql-tag';

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

export { GET_POSTS };
