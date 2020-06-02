import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SignIn from './SignIn';
import SignUp from './SignUp';

const FormsSlider = () => {

  const [x, setX] = useState(0);

  const moveLeft = () => {
   setX(x + 100);
  };

  const moveRight = () => {
    setX(x - 100);
  };

  return (
    <Slider>
      <FormsWrapper style={{transform: `translateX(${x}%)`}}>
        <SignIn
          moveRight={moveRight}
        />
        <SignUp
          moveLeft={moveLeft}
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
`;

const FormsWrapper = styled.div`
  display: flex;
  transition: 0.5s;
`;