import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// components
import Register from './components/registrations/Register';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Register}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
