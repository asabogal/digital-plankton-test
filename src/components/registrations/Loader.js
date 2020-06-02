import React, {useEffect} from 'react';
import styled from 'styled-components';

const Loader = (props) => {

  useEffect(() => {
    setTimeout(() => {
      redirect()
    }, 3000)
  })

  const redirect = () => {
    props.history.push('/profile');
  }
  
  return (
    <Spinner>
    </Spinner>
  );
};

export default Loader;

const Spinner = styled.div`
  width: 70px;
  height: 70px;
  border: 10px solid #e50914;
  border-left: 10px solid rgba(255, 255, 255, 0.2);
  border-radius: 100%;
  justify-self: center;
  align-self: center;
  animation: spin 0.6s infinite linear;
  position: absolute;
  top: 45%;
  z-index: 3;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    } to {
      transform: rotate(360deg);
    }
  }
`;