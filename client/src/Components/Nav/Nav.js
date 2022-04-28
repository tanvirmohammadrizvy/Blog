import React from 'react'

function Nav() {
  return (
    <React.Fragment>
    <div ClassName="topnav navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <div ClassName="container">
      <a ClassName="navbar-brand" href="./index.html"><strong>Mundana</strong></a>
      <button ClassName="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span ClassName="navbar-toggler-icon"></span>
      </button>
      <div ClassName="navbar-collapse collapse" id="navbarColor02">
          <ul ClassName="navbar-nav mr-auto d-flex align-items-center">
              <li ClassName="nav-item">
              <a ClassName="nav-link" href="./index.html">Intro <span ClassName="sr-only"></span></a>
              </li>
              <li ClassName="nav-item">
              <a ClassName="nav-link" href="./article.html">Culture</a>
              </li>
              <li ClassName="nav-item">
              <a ClassName="nav-link" href="./article.html">Tech</a>
              </li>
              <li ClassName="nav-item">
              <a ClassName="nav-link" href="./article.html">Politics</a>
              </li>
              <li ClassName="nav-item">
              <a ClassName="nav-link" href="./article.html">Health</a>
              </li>
              <li ClassName="nav-item">
              <a ClassName="nav-link" href="./article.html">Collections</a>
              </li>            
              <li ClassName="nav-item">
              <a ClassName="nav-link" href="./about.html">About</a>
              </li>
              <li ClassName="nav-item">
              <a ClassName="nav-link" href="./docs.html">Template <span ClassName="badge badge-secondary">docs</span></a>
              </li>
          </ul>
          <ul ClassName="navbar-nav ml-auto d-flex align-items-center">
              <li ClassName="nav-item highlight">
              </li>
          </ul>
      </div>
      </div>
      </div>
      </React.Fragment>
  )
}

export default Nav

