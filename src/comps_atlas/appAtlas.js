import React, { useState, useEffect } from 'react';
import Header from './header';
import Nav from './nav';
import Main from './main';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import { doApiGet } from '../services/apiService';

function AppAtlas(props) {
  let [first, setfirst] = useState(true);
  let [arr, setArr] = useState([]);
  let [bigarr, setbigarr] = useState([]);
  let [name, setname] = useState("israel");
  useEffect(() => {
    let url = "https://restcountries.eu/rest/v2/all"
    doApiGet(url)
      .then(data => {
        setbigarr(data)
      })
  }, [])


  useEffect(() => {
    setname(name);
    let url = "https://restcountries.eu/rest/v2/name/" + name + "?fullText=true";
    doApiGet(url)
      .then(data => {
        setArr(data);
      })
  }, [name])

  return (
    <div >
      <Router>
        <Header />
        <Nav setname={setname} bigarr={bigarr} />
        <Switch>
          <Route exact path={name} />
          {arr.map(item => {
            return (
              <Main setname={setname} first={first} setfirst={setfirst} item={item} bigarr={bigarr} key={item.callingCodes[0]} />
            )
          })}

        </Switch>
      </Router>

    </div>
  )
}

export default AppAtlas
