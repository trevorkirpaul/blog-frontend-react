import React, { Component } from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';

import TextField from 'components/TextField';
import TextArea from 'components/TextArea';
import Button from 'components/Button';
import TitlePanel from 'components/TitlePanel';
import Wrapper from 'components/Wrapper';
import { CREATE_POST } from 'graphQL/mutations';
import { GET_POSTS } from 'graphQL/queries';
import theme from 'theme';
import Modal from 'components/Modal';
import Text from 'components/Text';

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
      successModalIsOpen: false,
    };
  }

  handleOnChange = ({ target: { name, value } }) =>
    this.setState(() => ({ [name]: value }));

  handleOpenModal = () => this.setState({ successModalIsOpen: true });

  handleNavigateToBlogPosts = () => this.props.history.push('/posts');

  render() {
    const { title, body, successModalIsOpen } = this.state;
    return (
      <Wrapper>
        <Modal isOpen={successModalIsOpen} contentLabel="Created post">
          <Text>You have successfully created a new post!</Text>
          <Button
            onClick={this.handleNavigateToBlogPosts}
            label="View all posts"
          />
        </Modal>

        <TitlePanel
          title="Create Post"
          subTitle="write something interesting"
        />
        <Mutation
          mutation={CREATE_POST}
          update={(cache, { data: { createPost } }) => {
            /*
              We'll update the local cache with the
              newly created post
            */

            const { posts } = cache.readQuery({ query: GET_POSTS });

            this.setState(() => ({ successModalIsOpen: true }));

            return cache.writeQuery({
              query: GET_POSTS,
              data: { posts: posts.concat([createPost]) },
            });
          }}
        >
          {(createPost, { data }) => (
            <FormWrapper>
              <TextField
                name="title"
                onChange={this.handleOnChange}
                value={title}
                placeholder="enter title"
              />

              <TextArea
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
