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
  animation: FadeIn 0.2s ease-in-out forwards;
  @keyframes FadeIn {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  }
`;