import React, { useState, useEffect } from 'react';
import Header from './header';
import Nav from './nav';
import Main from './main';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { doApiGet } from '../services/apiService';

function AppAtlas(props){
  let name1=" ";
  let [arr,setArr]=useState([]);
  let [bigarr,setbigarr]=useState([]);
  let [name,setname]=useState("israel");
  useEffect(()=>{
    let url="https://restcountries.eu/rest/v2/all"
    doApiGet(url)
    .then(data=>{
     setbigarr(data)
    })
  },[])


  useEffect(()=>{
    setname(name);
    let url="https://restcountries.eu/rest/v2/name/"+name+"?fullText=true";
    localStorage.setItem('name', name);
    console.log(localStorage.getItem("name")); 
    doApiGet(url)
    .then(data=>{
      setArr(data);
    })
  },[name])

  return(
    <div >  
      <Router>
                <Header />
                <Nav setname={setname} bigarr={bigarr} />
                {arr.map(item =>
                {
                    return(
                        <Main setname={setname} item={item} bigarr={bigarr} key={item.callingCodes[0]}/>
                    )
            })} 
            </Router>
              
    </div> 
  )
}

export default AppAtlas
