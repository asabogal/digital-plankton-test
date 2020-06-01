import React from 'react';
import {Link} from 'react-router-dom';
// styles
import {FormsContainer, Form, Legend, InputWrapper, Label, Input, Submit, Options, RememberMe, SignUpContent} from './SharedStyles';

const SignIn = () => {

  return (
    <FormsContainer>
      <Form>
        <Legend>Sign In</Legend>
        <InputWrapper>
          <Input
            type='text'
          />
          <Label>Email</Label>
        </InputWrapper>
        <InputWrapper>
          <Input
            type='email'
          />
          <Label>Password</Label>
          <span>SHOW</span>
        </InputWrapper>
        <Submit>
          <Input
            type='submit'
            value='Sign In'
          />
        </Submit>
        <Options>
          <RememberMe>
            <Input
              type='checkbox'
            />
            <Label>Remember Me</Label>
          </RememberMe>
          <a href='#'>Need Help?</a>
        </Options>
        <SignUpContent>
          <h4>New to Netflix?</h4>
          <span><Link to='/signup'>Sign up now</Link></span>
        </SignUpContent>
      </Form>
    </FormsContainer>
  );
};

export default SignIn;

