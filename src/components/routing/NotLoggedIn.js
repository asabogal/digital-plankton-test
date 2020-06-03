import React from 'react';
import styled from 'styled-components';
import Header from '../registrations/Header';

const NotLoggedIn = () => {
  return (
    <PageContainer>
      <Header/>
    </PageContainer>
  );
};

export default NotLoggedIn;

const PageContainer = styled.div`
  display: grid;
  grid-template-rows: 10% 90%;
  width: 100%;
  height: 100vh;
`;