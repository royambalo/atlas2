import React, { useRef } from 'react';
import { Link, Router, useHistory } from 'react-router-dom';

function Nav(props) {
  let history = useHistory()
  const input = useRef();
  const checkinput = (name) => {
    let arr = props.bigarr;
    let bol = false;
    for (let index = 0; index < arr.length; index++) {
      if (arr[index].name == name) {
        bol = true;
        break;
      }
    }
    if (bol == true) {
      props.setname(name);
      history.push("/" + name);

    }
    else {
      alert("there is no country like that!");
    }
  }
  return (
    <div className="container d-flex justify-content-around">
      <div className="">
        <Link className="btn btn-light mr-2" onClick={() => { props.setname("israel") }} to={"/israel"}>Israel</Link>
        <Link className=" btn btn-light mr-2" onClick={() => { props.setname("USA") }} to={"/USA"}>USA</Link>
        <Link className=" btn btn-light mr-2" onClick={() => { props.setname("UK") }} to={"/UK"}>UK</Link>
        <Link className=" btn btn-light mr-2" onClick={() => { props.setname("France") }} to={"/France"}>France</Link>
        <Link className=" btn btn-light mr-2" onClick={() => { props.setname("Russian Federation") }} to={"/Russian Federation"}>Russia</Link>
      </div>
      <div className="row">
        <input ref={input} className="form-control col-lg-9" placeholder="search..." />
        <button onClick={() => { checkinput(input.current.value) }} className="btn btn-light">
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
            <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Nav
