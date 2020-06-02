import React, {useReducer, useState, useEffect} from 'react';
// styles
import {FormsContainer, Form, Legend, InputWrapper, Label, Input, Submit, Options, RememberMe, SignUpContent, Footer, Error} from './SharedStyles';

const SignIn = (props) => {

  const [userInput, setUserInput] = useReducer((state, newState) => ({...state, ...newState}),
    {
      email: '',
      password: ''
    }  
  );

  const [error, setError] = useState({email: '', password: ''});

  useEffect(() => {
  }, [error]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserInput({
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {props.startLoader()}, 1500)
  }

  const validEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const validateInput = (e) => {
    const {name, value} = e.target;
     if (name === 'email' && value.length === 0) {
        setError({...error, [name]: `${name} can't be blank.`});
     } else if (name === 'email' && !validEmail(value)) {
        setError({...error, [name]: `Not a valid email format.`});
     } else if (name === 'password' && value.length <= 7) {
        setError({...error, [name]: `${name} must contain at least 8 characters.`});
    }
    else {
      setError({...error, [name]: ''});
    }
  }
   
  return (
    <FormsContainer>
      <Form onSubmit={handleSubmit} noValidate>
        <Legend>Sign In</Legend>
        <InputWrapper>
          <Input
            type='email'
            name='email'
            value={userInput.value}
            onChange={handleChange}
            onBlur={validateInput}
            error={error.email}
          />
          <Label valid={userInput.email.length > 0 ? true : false}>Email</Label>
        </InputWrapper>
        {error.email && <Error>{error.email}</Error>}
        <InputWrapper>
          <Input
            type='password'
            name='password'
            value={userInput.value}
            onChange={handleChange}
            onBlur={validateInput}
            error={error.password}
          />
          <Label valid={userInput.password.length > 0 ? true : false}>Password</Label>
          <span>SHOW</span>
        </InputWrapper>
        {error.password && <Error>{error.password}</Error>}
        <Submit>
          <Input
            type='submit'
            value='Sign In'
          />
        </Submit>
        </Form>
        <Options>
          <RememberMe>
            <input
              type='checkbox'
            />
            <label>Remember Me</label>
          </RememberMe>
          <a href='#'>Need Help?</a>
        </Options>
        <SignUpContent>
          <h4>New to Netflix?</h4>
          <span><p onClick={props.moveRight}>Sign up now.</p></span>
        </SignUpContent>
        <Footer>
          <p>This form and the contents of this page are for illustrational purposes only.</p>
        </Footer>
    </FormsContainer>
  );
};

export default SignIn;

