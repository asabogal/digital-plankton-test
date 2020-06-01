import styled from 'styled-components';

export const FormsContainer = styled.div`
  justify-self: center;
  background-color: rgba(0,0,0,0.73);
  width: 320px;
  height: 610px;
  padding: 2rem 4rem;
  z-index: 2;
`;

export const Legend = styled.legend`
  font-family: 'Poppins-SemiBold';
  font-size: 30px;
  width: 100%;
  margin: 1.8rem 0;
`;

export const Form = styled.form`

`;

export const InputWrapper = styled.div`  
  display: flex;
  margin-bottom: 1rem;
  position: relative;
  span {
    position: absolute;
    right: 1rem;
    top: 1rem;
    color: #858585;
    font-size: 0.8em; 
  }
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-family: 'Poppins-Light';
  position: absolute;
  top: 1.1rem;
  left: 1rem;
  color: #858585;
  transition: font-size 0.2s ease, top 0.2s ease;
`;

export const Input = styled.input`
  padding: 1.5rem 0.8rem 0.7rem 0.8rem;
  flex: 1;
  background-color: #333;
  border: none;
  border-radius: 5px;
  color: white;
  &:focus {
    background-color: #454545;
    + label {
      font-size: 0.6rem;
      top: 0.3rem;
    }
  }
`;

export const Submit = styled.div`
  input {
    font-family: 'Poppins-SemiBold';
    margin-top: 2.5rem;
    display: block;
    width: 100%;
    background-color: #e50914;
    text-align: center;
    text-decoration: none;
    font-size: 0.9rem;
    padding: 0.9rem 0;
    transition: background-color 0.3s ease-in-out;
    &:hover {
      background-color: #b4151d;
      cursor: pointer;
    }
  }
  
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  margin-bottom: 4rem;
  align-items: center;
  a {
    text-decoration: none;
    font-family: 'Poppins-Regular';
    color: #aaaaaa;
    font-size: 0.8rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const RememberMe = styled.div`
  input {
    height: 1.1rem;
    width: 1.1rem;
    align-self: center;
    vertical-align: bottom;
  }
  label {
    font-family: 'Poppins-Regular';
    color: #aaaaaa;
    font-size: 0.8rem;
  }

`;

export const SignUpContent = styled.div`
  display: flex;
  align-content: center;
  justify-content: flex-end;
  padding-bottom: 2rem;
  margin-bottom: 4rem;
  font-size: 0.9rem;
  color: #858585;
  h4 {
    margin: 0;
    padding-right: 0.5rem;
  }
  p {
    margin: 0;
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const Footer = styled.div`
  text-align: right;
  color: #858585;
  font-size: 0.8rem;
`;