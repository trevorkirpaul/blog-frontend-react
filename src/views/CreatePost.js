import React, { Component } from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';

import TextField from 'components/TextField';
import Button from 'components/Button';
import { CREATE_POST } from 'graphQL/mutations';

const Wrapper = styled.div``;

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
