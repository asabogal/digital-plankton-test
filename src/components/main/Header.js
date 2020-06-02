import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import brand from '../../images/Netflix_Logo_RGB.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <LogoContainer>
          <Link to='/'>
            <img src={brand} alt='netflix-logo'/>
          </Link>
        </LogoContainer>
        <LinksContainer>
          <Link to='/'>Home</Link>
          <Link to='/'>TV Shows</Link>
          <Link to='/'>Movies</Link>
          <Link to='/'>Latest</Link>
          <Link to='/'>My List</Link>
        </LinksContainer>
      </Navigation>
      <IconsContainer>
        <Link to='/'>
          <FontAwesomeIcon
            size='lg'
            color='white'
            icon={faSearch}
          />
        </Link>
        <Link to='/'>
          <FontAwesomeIcon
            size='lg  '
            color='white'
            icon={faUserAlt}
          />
        </Link>
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
  padding-left: 20px;
`;

const LogoContainer = styled.div`
  width: 125px;
  height: 50px;
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
    color: #e0dede;
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
  padding-right: 80px;
  svg {
    padding-left: 20px;
  }
`;