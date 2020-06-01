import React, {useReducer, useState, useEffect} from 'react';
// styles
import {FormsContainer, Form, Legend, InputWrapper, Label, Input, Submit, Options, RememberMe, SignUpContent, Footer} from './SharedStyles';

const SignUp = () => {

  const [userInput, setUserInput] = useReducer((state, newState) => ({...state, ...newState}),
    {
      email: '',
      password: ''
    }  
  );

  const [error, setError] = useState('');

  useEffect(() => {
    if(error) {
      alert(error)
    }
  }, [error]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserInput({
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('form submitted');
  }

  const validateInput = (e) => {
    const {name, value} = e.target;
    if (value.length === 0 || value.length <= 3) {
      setError(`${name} can't be blank`);
    };
  }

  return (
    <FormsContainer>
      <Form onSubmit={handleSubmit}>
        <Legend>Sign Up</Legend>
        <InputWrapper>
          <Input
            type='text'
            name='name'
            value={userInput.value}
            onChange={handleChange}
            onBlur={validateInput}
          />
          <Label>Name</Label>
        </InputWrapper>
        <InputWrapper>
          <Input
            type='email'
            name='email'
            value={userInput.value}
            onChange={handleChange}
            onBlur={validateInput}
          />
          <Label>Email</Label>
        </InputWrapper>
        <InputWrapper>
          <Input
            type='password'
            name='password'
            value={userInput.value}
            onChange={handleChange}
            onBlur={validateInput}
          />
          <Label>Password</Label>
          <span>SHOW</span>
        </InputWrapper>
        <Submit>
          <Input
            type='submit'
            value='Sign Up'
          />
        </Submit>
        </Form>
        <SignUpContent>
          <h4>Already Signed up?</h4>
          <span><p>Log in now.</p></span>
        </SignUpContent>
        <Footer>
          <p>This form and the contents of this page are for ilustrational purposes only.</p>
        </Footer>
    </FormsContainer>
  );
};

export default SignUp;

