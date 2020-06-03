import React, {useState, useEffect} from 'react';
import styled, { keyframes } from 'styled-components';
import SignIn from './SignIn';
import SignUp from './SignUp';

const FormsSlider = (props) => {

  const [x, setX] = useState(0);

  const moveLeft = () => {
   setX(x + 100);
  };

  const moveRight = () => {
    setX(x - 100);
  };

  return (
    <Slider loading={props.loading}>
      <FormsWrapper style={{transform: `translateX(${x}%)`}}>
        <SignIn
          startLoader={props.startLoader}
          moveRight={moveRight}
          handleLogin={props.handleLogin}
        />
        <SignUp
          startLoader={props.startLoader}
          moveLeft={moveLeft}
          handleLogin={props.handleLogin}
        />
      </FormsWrapper>
    </Slider>
  );
};

export default FormsSlider;

const Slider = styled.div`
  justify-self: center;
  z-index: 2;   
  max-width: 445px;
  height: 665px;
  overflow: hidden;
  animation: ${props => props.loading ? 'SlideDown 0.6s ease forwards' : 'SlideUp 0.6s ease'};
  @keyframes SlideUp {
    from {
      transform: translateY(110%);
    } to {
      transform: translateY(0);
    }
  }
  @keyframes SlideDown {
    from {
      transform: translateY(0);
    } to {
      transform: translateY(200%);
    }
  }
`;

const FormsWrapper = styled.div`
  display: flex;
  transition: 0.5s;
`;