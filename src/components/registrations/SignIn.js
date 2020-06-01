import React from 'react';
import {Link} from 'react-router-dom';
// styles
import {FormsContainer, Form, Legend, InputWrapper, Label, Input, Submit, Options, RememberMe, SignUpContent, Footer} from './SharedStyles';

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
          <span><p>Sign up now.</p></span>
        </SignUpContent>
        <Footer>
          <p>This form and the contents of this page are for ilustrational purposes only.</p>
        </Footer>
    </FormsContainer>
  );
};

export default SignIn;

