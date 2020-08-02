import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import MapApp from "./maps";
function Main(props) {
  let history = useHistory();
  let item = props.item;
  let borders = item.borders;
  let allstate = props.bigarr;
  useEffect(() => {
    let st = props.location.pathname.slice(1);
    if (props.first) {
      history.push("/");
      props.setfirst(false);
    }
  }, [])
  allstate = allstate.filter((item) => {
    return borders.indexOf(item.alpha3Code) > -1;
  });
  return (
    <div className="container mt-2">
      <div className="mt-2">
        <img className="float-left col-3 mr-4" src={item.flag} />
        <h1>{item.name}</h1>
        <div>Pop: {item.population}</div>
        <div>region: {item.region}</div>
        <div>
          Lenguages: {item.languages[0].iso639_2}, {item.languages[0].name}
        </div>
        <div>
          Coin: {item.currencies[0].code}, {item.currencies[0].name}
        </div>
        <div>capital: {item.capital}</div>
      </div>
      <div className="container row">

        <div className="col mr-5 mt-2">
          <h5>States with borders</h5>
          <div className="row">
            {allstate.map((item, i) => {
              return (
                <Link className="btn btn-link m-1" key={i} onClick={() => { props.setname(item.name) }} to={"/" + item.name}>
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <MapApp lat={item.latlng[0]} leng={item.latlng[1]} />
      </div>
    </div>
  );
}

export default Main;
