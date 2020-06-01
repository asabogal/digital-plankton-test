import styled from 'styled-components';

export const FormsContainer = styled.div`
  justify-self: center;
  align-self: center;
  background-color: rgba(0,0,0,0.73);
  width: 325px;
  height: 560px;
  padding: 2rem 4rem;
  z-index: 2;
`;

export const Legend = styled.legend`
  font-family: 'Poppins-SemiBold';
  font-size: 30px;
  width: 100%;
  margin: 2rem 0;
`;

export const Form = styled.form`

`;

export const InputWrapper = styled.div`  
  display: flex;
  margin-bottom: 0.8rem;
  position: relative;
  span {
    position: absolute;
    right: 1rem;
    top: 1rem;
    color: lightgrey;
    font-size: 0.8em;
  }
`;

export const Label = styled.label`
  font-size: 0.9em;
  font-family: 'Poppins-Light';
  position: absolute;
  top: 1.1rem;
  left: 1rem;
  color: lightgrey;
  transition: font-size 0.2s ease, top 0.2s ease;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  padding: 1.3rem 1rem 0.7rem 1rem;
  flex: 1;
  background-color: #333;
  border: none;
  border-radius: 5px;
  color: white;
  &:focus {
    background-color: #454545;
    + label {
      font-size: 0.5rem;
      top: 0.3rem;
    }
  }
`;

export const Submit = styled.div`
`;

export const Options = styled.div`
`;

export const RememberMe = styled.div`
`;

export const SignUpContent = styled.div`

`;