import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div``;
const ImgBox = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    height: 50px;
  }
`;
const MenuBox = styled.div``;
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  li {
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem 2rem;
      text-transform: uppercase;
      transition: all 0.3s ease;
      font-size: 1.5rem;

      &:hover {
        background-color: black;
        color: white;
      }
    }
  }
  margin-bottom: 1rem;
`;

const GlobalNavigation = () => {
  return (
    <Wrapper>
      <ImgBox>
        <img src="https://cdn.worldvectorlogo.com/logos/infiniti-logo-1.svg" alt="" />
      </ImgBox>
      <MenuBox>
        <Menu>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/notice">Notice</Link>
          </li>
          <li>
            <Link to="/board">Board</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </Menu>
      </MenuBox>
    </Wrapper>
  );
};

export default GlobalNavigation;
