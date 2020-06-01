import styled from 'styled-components';

export const FormsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  margin: 0 auto;
`;

export const Legend = styled.legend`
  font-family: 'Poppins-SemiBold';
  font-size: 32px;
  width: 100%;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 80%;
  grid-template-rows: repeat(4, auto);
  justify-content: center;
`;

export const Label = styled.label`
  font-size: 0.8em;
  font-family: 'Poppins-Light';
`;

export const InputWrapper = styled.div`  
`;

export const Input = styled.input`
  border: 0px thin black;
  height: 20px;
  margin-bottom: 20px;
`;

export const Submit = styled.div`

`;

export const Options = styled.div`
`;

export const RememberMe = styled.div`
`;

export const SignUpContent = styled.div`
  
`;