import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// components
import SignIn from './components/registrations/SignIn';
import SignUp from './components/registrations/SignUp';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/signup' component={SignUp}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
