import React, { useState } from 'react';
import NavBar from './nav';
import AddContact from './addContact';
import List from './list';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Count from './count';
import LandingPage from './landingPage';
import Edit from './edit';

function AppContact(props) {
  let [lengthArr, setlength_Arr] = useState()
  return (
    <div>
      <Router>
        <NavBar />
        <Route exact path={"/"} component={LandingPage} />
        <Route exact path={"/add/"} component={AddContact} />
        <Route exact path={"/count/"} render={() => {
          return (
            <Count lengthArr={lengthArr} />
          )
        }} />
        <Route exact path={"/list/"} render={() => {
          return (
            <List setlength_Arr={setlength_Arr} />
          )
        }} />
        <Route exact path={"/edit/:id"} component={Edit} />

      </Router>
    </div>
  )
}

export default AppContact
