import gql from 'graphql-tag';

const CREATE_POST = gql`
  mutation CreatePost($title: String, $body: String, $author: ID) {
    createPost(title: $title, body: $body, author: $author) {
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

export { CREATE_POST, DELETE_POST };
