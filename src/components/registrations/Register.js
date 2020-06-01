import React from 'react';
import styled from 'styled-components';
import SignIn from './SignIn';
import image from '../../images/netflix_background.png';

const Register = () => {
  return (
    <PageContainer>
      <SignIn/>
    </PageContainer>
  );
};

export default Register;

const PageContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  position: relative;
  background: url(${image}) no-repeat center center/cover;
  &::after {
  content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  }
`;