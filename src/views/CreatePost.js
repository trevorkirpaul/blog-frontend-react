import React, { Component } from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import TextField from 'components/TextField';
import Button from 'components/Button';

const Wrapper = styled.div``;

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

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };
  }

  handleOnChange = ({ target: { name, value } }) =>
    this.setState(() => ({ [name]: value }));

  render() {
    const { title, body } = this.state;
    return (
      <Mutation mutation={CREATE_POST}>
        {(createPost, { data }) => (
          <Wrapper>
            <TextField
              name="title"
              onChange={this.handleOnChange}
              value={title}
              placeholder="enter title"
            />

            <TextField
              name="body"
              onChange={this.handleOnChange}
              value={body}
              placeholder="enter post"
            />

            <Button
              disabled={!title || !body}
              onClick={() => {
                return createPost({
                  variables: {
                    title,
                    body,
                    author: '5c0dc51911dd9b5aa61ed244',
                  },
                });
              }}
              label="Create Post"
            />
          </Wrapper>
        )}
      </Mutation>
    );
  }
}

export default CreatePost;
