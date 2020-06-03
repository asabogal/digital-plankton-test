import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// components
import Register from './components/registrations/Register';
import Profile from './components/main/Profile';
import ProtectedRoute from './components/routing/ProtectedRoute';

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  
  const handleLogin = (user) => {
    setLoggedIn((true));
  }

  const handleLogout = () => {
    setLoggedIn((false));
  }

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route 
            exact path='/register' 
            render={props => (
            <Register {...props} handleLogin={handleLogin}/>
            )}
          />
          <ProtectedRoute 
            exact path='/profile' 
            component = {Profile}
            loggedIn={loggedIn}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
