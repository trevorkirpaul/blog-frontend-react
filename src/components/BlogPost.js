import React from 'react';
import styled from 'styled-components';

import DeleteBlogPostButton from './DeleteBlogPostButton';

const Wrapper = styled.li`
  background: ${({ index }) => (index % 2 === 0 ? null : '#E8EAF6')};
  padding: 5px 15px;
  display: flex;
  justify-content: space-between;
`;

const Section = styled.div``;

const Left = styled(Section)``;
const Right = styled(Section)``;

const Title = styled.h2``;

const BodyText = styled.p``;

const BlogPost = ({ title, body, author: { email }, index, id }) => (
  <Wrapper index={index}>
    <Left>
      <Title>{title}</Title>
      <BodyText>body: {body}</BodyText>
      <BodyText>from: {email}</BodyText>
    </Left>

    <Right>
      <DeleteBlogPostButton postID={id} />
    </Right>
  </Wrapper>
);

export default BlogPost;
