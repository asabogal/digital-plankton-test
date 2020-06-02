import React from 'react';
import styled from 'styled-components';
import brand from '../../images/Netflix_Logo_RGB.png';

const BrandLoader = () => {
  return (
    <PageContainer>
      <BrandContainer>
        <img src={brand} alt='netflix-brand'/>
      </BrandContainer>
    </PageContainer>

  );
};

export default BrandLoader;

const PageContainer = styled.div`
`;

const BrandContainer = styled.div`
  border: 1px solid blue; 
  margin: auto auto;
  width: 50vw;
  animation: ZoomIn 0.5s ease;
  /* overflow: hidden; */
  position: relative;
  img {
    width: 100%;
    animation: FadeRight 1s ease 1s;
  }
  @keyframes ZoomIn {
    from {
      transform: scale(0);
    } to {
      transform: scale(1);
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