import React, { Component } from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';

import TextField from 'components/TextField';
import Button from 'components/Button';
import TitlePanel from 'components/TitlePanel';
import Wrapper from 'components/Wrapper';
import { CREATE_POST } from 'graphQL/mutations';
import theme from 'theme';

const FormWrapper = styled.div`
  background-color: ${theme.colors.lightGrey};
  margin: ${theme.wrapper.margin};
  padding: ${theme.wrapper.padding};
  border-radius: ${theme.wrapper.borderRadius};
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
      <Wrapper>
        <TitlePanel
          title="Create Post"
          subTitle="write something interesting"
        />
        <Mutation mutation={CREATE_POST}>
          {(createPost, { data }) => (
            <FormWrapper>
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
            </FormWrapper>
          )}
        </Mutation>
      </Wrapper>
    );
  }
}

export default CreatePost;
