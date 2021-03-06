import React from 'react';
import {Route} from 'react-router-dom';
import NotLoggedIn from './NotLoggedIn';

const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} 
    render={props => {
      if (rest.loggedIn) {
        return  <Component {...props}/>
      } else {
        return <NotLoggedIn/>
      }
    }}
    />
  ); 
};

export default ProtectedRoute;