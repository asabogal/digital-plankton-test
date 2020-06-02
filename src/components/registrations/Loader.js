import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <Spinner>
      
    </Spinner>
  );
};

export default Loader;

const Spinner = styled.div`
  width: 70px;
  height: 70px;
  border: 5px solid #e50914;
  border-left: 5px solid rgba(255, 255, 255, 0.2);
  border-radius: 100%;
  justify-self: center;
  align-self: center;
  animation: spin 0.6s infinite linear;
  position: absolute;
  top: 45%;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    } to {
      transform: rotate(360deg);
    }
  }
`;