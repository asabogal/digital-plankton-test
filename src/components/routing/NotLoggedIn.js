import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Header from '../registrations/Header';
import image from '../../images/netflix_background.png';


const NotLoggedIn = () => {
  return (
    <PageContainer>
      <Header/>
      <InfoContainer>
        <h2>You must be signed in to access this page.</h2>
        <Link to='/register'>Sign In</Link>
      </InfoContainer>
    </PageContainer>
  );
};

export default NotLoggedIn;

const PageContainer = styled.div`
  display: grid;
  grid-template-rows: 10% 90%;
  width: 100%;
  height: 100vh;
  position: relative;
  background: url(${image}) no-repeat center center/cover;
  overflow: hidden;
  &::after {
  content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1;
  }
`;

const InfoContainer = styled.div`
  text-align: center;
  z-index: 2;
  margin-top: 6rem;
  h2 {
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color: #858585;
    font-size: 2rem;
  }
  a {
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;