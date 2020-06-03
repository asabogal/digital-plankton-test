import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
// images
import blood from '../../images/browser/1_blood.png';
import space from '../../images/browser/2_space.png';
import history from '../../images/browser/3_history.png';
import spy from '../../images/browser/4_spy.png';
import gates from '../../images/browser/5_gates.png';
import machina from '../../images/browser/7_machina.png';
import senna from '../../images/browser/8_senna.png';
import taxi from '../../images/browser/9_taxi.png';
import legend from '../../images/browser/10_legend.png';
import miles from '../../images/browser/12_miles.png';
import mossad from '../../images/browser/13_mossad.png';
import hank from '../../images/browser/15_hank.png';

const MyListSlider = () => {

  const picturesOne = [blood, space, history, spy, gates, mossad];
  const picturesTwo = [machina, senna, taxi, legend, miles, hank];

  const renderPictures = (pictures) => {
    return pictures.map((picture, index) => {
      return (
        <Thumbnail key={index}>
          <img src={picture}/>
        </Thumbnail>
      )
    })
  }

  return (
    <Slider>
      <Section>
        {renderPictures(picturesOne)}
      </Section>
      <Section>
        {renderPictures(picturesTwo)}
      </Section>
      <LeftButton>
        <FontAwesomeIcon
          icon={faChevronLeft}
          size='3x'
          color='white'
        />
      </LeftButton>
      <RightButton>
        <FontAwesomeIcon
          icon={faChevronRight}
          size='3x'
          color='white'
        />
      </RightButton>
    </Slider>
  );
};

export default MyListSlider;

const Slider = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100%);
  position: relative;
  &:hover {
    button {
      opacity: 1;
    }
  }
`;

const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(6, auto);
  width: 100%;
  position: relative;
`;

const Thumbnail = styled.div`
  padding: 0 2px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0,0,0,0.4);
  width: 50px;
  height: 100%;
  border: none;
  cursor: pointer;
  opacity: 0;
`;

const LeftButton = styled(Button)`
  left: 0;
`;

const RightButton = styled(Button)`
  right: 0;
`; 

