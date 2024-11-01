import React from 'react'
import PropTypes from 'prop-types'

import DarkModeButton from './darkMode.js';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navBcol">
  <div className="container-fluid">
    <a className="navbar-brand" href="/" > <h3 id="mainHead">{props.title}</h3></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"><h5 id="home-col">Home</h5></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"><h5 id="home-col">Link</h5></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <h5 id="home-col">Contact </h5>
          </a>
          
        </li>
      </ul>
      {/* <form className="d-flex" role="search"> */}

      <div className="container button-spacing1">
      {/* <h1 className="text-center mt-5"></h1> */}
      <DarkModeButton />
      </div>
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      {/* </form> */}
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string,
}

