import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ActivityRegister from './components/ActivityRegister/ActivityRegister';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import AddActivity from './components/AddActivity/AddActivity';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Activities from './components/Activities/Activities';
import NotFound from './components/NotFound/NotFound';
export const UserContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState({});
  return (
    <UserContext.Provider value={[loggedIn, setLoggedIn]} >
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path="/activityRegister/:eventTitle">
            <ActivityRegister></ActivityRegister>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path='/admin'>
            <Admin></Admin>
          </Route>
          <Route path='/addActivity'>
            <AddActivity></AddActivity>
          </Route>
          <PrivateRoute path="/activities">
            <Activities></Activities>
          </PrivateRoute>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
