import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const MyListSlider = () => {
  return (
    <Slider>
      <Section>

      </Section>
      <Section>
        
      </Section>
      <LeftButton>
          <FontAwesomeIcon
            icon={faChevronLeft}
            size='2x'
            color='white'
          />
        </LeftButton>
        <RightButton>
        <FontAwesomeIcon
          icon={faChevronRight}
          size='2x'
          color='white'
        />
        </RightButton>
    </Slider>
  );
};

export default MyListSlider;

const Slider = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 100%);
  position: relative;
`;

const Section = styled.div`
  width: 100%;
  height: 200px;
  background-color: red;
  border: 1px solid yellow;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  width: 5vw;
  height: 98%;
  border: none;
  cursor: pointer;
  :hover {
    background-color: rgba(0,0,0,0.4);
  }
`;

const LeftButton = styled(Button)`
  left: 0;
`;

const RightButton = styled(Button)`
  right: 0;
`; 

