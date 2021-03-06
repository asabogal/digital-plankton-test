import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import gems from '../../images/uncut_gems.png';
import {PlayButton, InfoButton} from '../utils/Buttons';
import MyListSlider from './MyListSlider';

const Hero = () => {
  return (
    <HeroContainer image={gems}>
      <Header/>
      <ContentContainer>
        <Heading>
          <h1>UNCUT</h1>
          <h1>GEMS</h1>
        </Heading>
        <InfoContainer>
          <h5>#5 in the U.S. Today</h5>
          <p>Meet Howard Ratner: hustler, gambler, jeweler. He's just one scheme away from hitting it big -- and one misstep from losing it all.</p>
          <Buttons>
            <PlayButton>Play</PlayButton>
            <InfoButton>More Info</InfoButton>
          </Buttons>
        </InfoContainer>
      </ContentContainer>
      <MyListContainer>
        <h3>My List</h3>
        <MyListSlider/>
      </MyListContainer>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  display: grid;
  grid-template-rows: 10% 65% 35%;
  background: url(${props => props.image}) no-repeat;
  background-position: center center;
  background-size: cover;
  height: 100vh;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  text-shadow: 2px 2px 2px rgba(0,0,0,.45);
`;

const Heading = styled.div`
  color: white;
  font-family: 'Poppins-Bold';
  font-size: 3rem;
  line-height: 75px;
  align-self: flex-end;
  padding-left: 50px;
  h1 {
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;

const InfoContainer = styled.div`
  display: grid;
  gap: 0px;
  grid-area: 2 / 1 / 3 / 2;
  padding: 0px 120px 0px 50px;
  h5 {
    font-size: 1.4rem;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    align-self: center;
  }
  p {
    margin: 0;
    font-size: 1.2rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  button {
    margin-right: 10px;
  }
`;

const MyListContainer = styled.div`
  h3 {
    margin-left: 50px;
    color: #e5e5e5;
  }
`;
