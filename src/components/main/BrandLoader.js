import React from 'react';
import styled from 'styled-components';
import brand from '../../images/Netflix_Logo_RGB.png';

const BrandLoader = () => {
  return (
    <BrandContainer>
      <img src={brand} alt='netflix-brand'/>
    </BrandContainer>
  );
};

export default BrandLoader;

const BrandContainer = styled.div`
  margin: 100px auto;
  width: 80vw;
  animation: ScaleIn 2.6s ease forwards;
  overflow: hidden;
  position: relative;
  top: 15%;
  img {
    width: 100%;
    animation: FadeRight 1s ease forwards 1s;
  }
  &::before {
    content: '';
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 500px;
    transform: translateX(100%) rotate(-45deg); 
    animation: Cut 0.6s ease forwards 1s;
    transition: opacity 1s;
    z-index: 99;
    @keyframes Cut {
      from {
        transform: translateX(100%);
      } to {
        transform: translateX(57%);
      }
    }
  }
  @keyframes ScaleIn {
    0% {
      transform: scale(0);
      opacity: 1;
    } 40% {
      transform: scale(1);
      opacity: 1;
    }
      70% {
      transform: scale(1);
      opacity: 1;
    } 
    100% {
      transform: scale(2.5);
      opacity: 0;
    }
  }

  @keyframes ZoomIn {
    from {
      transform: scale(0);
    } to {
      transform: scale(5);
    }
  }

  @keyframes FadeRight {
    from {
      transform: translateX(0);
    } to {
      transform: translateX(35%);
    }
  }
`;