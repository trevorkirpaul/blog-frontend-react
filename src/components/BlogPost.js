import React from 'react';
import styled from 'styled-components';

import DeleteBlogPostButton from './DeleteBlogPostButton';

const Wrapper = styled.li`
  background: ${({ index }) => (index % 2 === 0 ? null : '#E8EAF6')};
  padding: 15px 25px;
  display: flex;
  justify-content: space-between;
`;

const Section = styled.div``;

const Left = styled(Section)`
  max-width: 500px;
`;
const Right = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  margin-bottom: 15px;
`;

const BodyText = styled.p`
  margin-bottom: 10px;
`;

const Boldify = styled.span`
  font-weight: 600;
`;

const BlogPost = ({ title, body, author: { email }, index, id }) => (
  <Wrapper index={index}>
    <Left>
      <Title>
        {index + 1}. {title}
      </Title>
      <BodyText>
        <Boldify>body:</Boldify> {body}
      </BodyText>
      <BodyText>
        <Boldify>from:</Boldify> {email}
      </BodyText>
    </Left>

    <Right>
      <DeleteBlogPostButton postID={id} />
    </Right>
  </Wrapper>
);

export default BlogPost;
