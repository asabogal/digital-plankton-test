import React from 'react';
import styled from 'styled-components';
import brand from '../../images/Netflix_Logo_RGB.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
      <LogoContainer>
        <img src={brand} alt='netflix-logo'/>
      </LogoContainer>
      <LinksContainer>
        <a href='#'>Home</a>
        <a href='#'>TV Shows</a>
        <a href='#'>Movies</a>
        <a href='#'>Latest</a>
        <a href='#'>My List</a>
      </LinksContainer>
      </Navigation>
      <IconsContainer>
        <FontAwesomeIcon
          size='lg'
          color='white'
          icon={faSearch}
        />
        <FontAwesomeIcon
          size='lg  '
          color='white'
          icon={faUserAlt}
        />
      </IconsContainer>
  </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 99;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  width: 150px;
  height: 60px;
  padding-left: 20px;
  padding-right: 40px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  a {
    color: #858585;
    font-size: 0.9rem;
    padding-right: 20px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-right: 40px;
  svg {
    padding-left: 20px;
  }
`;