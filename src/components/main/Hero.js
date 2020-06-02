import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import gems from '../../images/uncut_gems.png';

const Hero = () => {
  return (
    <HeroContainer image={gems}>
      <Header/>
      <ContentContainer>

      </ContentContainer>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  display: grid;
  grid-template-rows: 10% 90%;
  background: url(${props => props.image}) no-repeat;
  background-position: center center;
  background-size: cover;
  height: 100vh;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
