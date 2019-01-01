import React from 'react';
import styled from 'styled-components';

import theme from 'theme';

const Wrapper = styled.div`
  margin: ${theme.wrapper.margin};
  padding: ${theme.wrapper.padding};
  background: ${theme.colors.lightBlue};
  border-radius: ${theme.wrapper.borderRadius};
`;
const Title = styled.h1`
  margin-bottom: 15px;
`;
const SubTitle = styled.h2`
  font-weight: 300;
  margin-bottom: 15px;
`;
const Message = styled.p``;

const TitlePanel = ({ title, subTitle, message }) => (
  <Wrapper>
    <Title>{title}</Title>
    {subTitle && <SubTitle>{subTitle}</SubTitle>}
    {message && <Message>{message}</Message>}
  </Wrapper>
);

export default TitlePanel;
