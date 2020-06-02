import React from 'react';
import styled from 'styled-components';
import brand from '../../images/Netflix_Logo_RGB.png';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={brand} alt='netflix-logo'/>
      </LogoContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  z-index: 99;
`;

const LogoContainer = styled.div`
  width: 200px;
  height: 90px;
  padding-left: 20px;
  img {
    width: 100%;
    height: 100%;
  }
`;