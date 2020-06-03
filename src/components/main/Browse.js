import React from 'react';
import styled from 'styled-components';
import Hero from './Hero';

const Browse = () => {
  return (
    <PageContainer>
      <Hero/>
    </PageContainer>
  );
};

export default Browse;

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
`;