import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
  background: ${({ index }) => (index % 2 === 0 ? null : '#E8EAF6')};
  padding: 5px 5px;
`;

const Title = styled.h2``;

const BodyText = styled.p``;

const BlogPost = ({ title, body, author: { email }, index }) => (
  <Wrapper index={index}>
    <Title>{title}</Title>
    <BodyText>body: {body}</BodyText>
    <BodyText>from: {email}</BodyText>
  </Wrapper>
);

export default BlogPost;
