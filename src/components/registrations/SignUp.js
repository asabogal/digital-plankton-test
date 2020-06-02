import React, {useReducer, useState, useEffect} from 'react';
// styles
import {FormsContainer, Form, Legend, InputWrapper, Label, Input, Submit, Options, RememberMe, SignUpContent, Footer, Error} from './SharedStyles';

const SignUp = () => {

  const [userInput, setUserInput] = useReducer((state, newState) => ({...state, ...newState}),
    {
      name: '',
      email: '',
      password: ''
    }  
  );

  const [error, setError] = useState({name: '', email: '', password: ''});

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
    alert('form submitted');
  }

  const validEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const validateInput = (e) => {
    const {name, value} = e.target;
    if (name === 'name' && value.length <= 3) {
      setError({...error, [name]: `${name} must contain at least 4 characters.`});
    } else if (name === 'email' && value.length === 0) {
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
      <Form onSubmit={handleSubmit}>
        <Legend>Sign Up</Legend>
        <InputWrapper>
          <Input
            type='text'
            name='name'
            value={userInput.value}
            onChange={handleChange}
            onBlur={validateInput}
            error={error.name}
          />
          <Label>Name</Label>
        </InputWrapper>
        {error.name && <Error>{error.name}</Error>}
        <InputWrapper>
          <Input
            type='email'
            name='email'
            value={userInput.value}
            onChange={handleChange}
            onBlur={validateInput}
            error={error.email}
          />
          <Label>Email</Label>
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
          <Label>Password</Label>
          <span>SHOW</span>
        </InputWrapper>
        {error.password && <Error>{error.password}</Error>}
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
