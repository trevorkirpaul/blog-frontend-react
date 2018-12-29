import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #383838;
  color: #f8f8f8;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
`;

const UL = styled.ul`
  list-style: none;
  display: flex;
`;

const LI = styled.li`
  color: #f8f8f8;
  padding-left: 5px;
`;

const StyledLink = styled(Link)`
  color: #f8f8f8;
  text-decoration: none;

  &:hover {
    color: palevioletred;
  }
`;

const NavBar = () => (
  <Wrapper>
    <span>Blog</span>

    <nav>
      <UL>
        <LI>
          <StyledLink to="/">Login</StyledLink>
        </LI>

        <LI>
          <StyledLink to="/posts">BlogPosts</StyledLink>
        </LI>

        <LI>
          <StyledLink to="/post/create">Create Post</StyledLink>
        </LI>
      </UL>
    </nav>
  </Wrapper>
);

export default NavBar;
