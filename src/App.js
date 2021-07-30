import './App.css';
import Numbers from "./components/Numbers"
import { Route, Switch, useHistory } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
//import ReactDOM from "react-dom";
import M from "materialize-css";
import logo from "./pictures/logogs.png";
import rna from "./pictures/rna.jpg";
import {  } from "react-router-dom";




function App() {
  const sidenavRef = useRef();
  const collapsibleRef = useRef();
  const history = useHistory();

  useEffect(() => {
    if (sidenavRef.current) {
      M.Sidenav.init(sidenavRef.current);
    }
    if (collapsibleRef.current) {
      M.Collapsible.init(collapsibleRef.current);
    }
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <div className="main-container">
            <nav className="blue darken-4 col s10 offset-s2">

              <div className="nav-wrapper">
                {/* <a href="#!" className="brand-logo">
            Logo
          </a> */}

                <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                  <i className="material-icons">menu</i>
                </a>
                <ul className="right hide-on-med-and-down">
                  <li>
                    <a href="sass.html">RNAseq</a>
                  </li>
                  <li>
                    <a href="badges.html">Tomato Seq</a>
                  </li>
                  <li>
                    <a href="collapsible.html">Genomes</a>
                  </li>
                  <li>
                    <a href="mobile.html">Bioinfo</a>
                  </li>
                </ul>
              </div>
            </nav>

            <ul className="sidenav" id="mobile-demo" ref={sidenavRef}>
              <li>
                <a href="sass.html">Sass</a>
              </li>
              <li>
                <a href="badges.html">Components</a>
              </li>
              <li>
                <a href="collapsible.html">Javascript</a>
              </li>
              <li>
                <a href="mobile.html">Mobile</a>
              </li>
            </ul>

            {/* here starts */}

            <div class="row">
              <div class="col s2 light-blue lighten-2 fullScreen">
                <img src={logo} alt="Gene Shining Logo" className="logo" />
                <div class="input-field">
                  <input value="Tomato" id="organism" type="text" class="validate" />
                  <label class="active" for="organism">Organism to analyse</label>
                </div>
                <a class="btn-large blue darken-4 button" onClick={()=> history.push("/analyses")}>Go to analysis</a>
              </div>


              <div class="col s10 cyan accent-1 fullScreen center-align">
                <div class="container">
                  <img src={rna} alt="" className="rna" />
                  <div class="centered"><div class="title">Welcome to<br></br> Gene Shining!</div></div>
                </div>
                <div>
                  <ul class="collapsible explainBox" ref={collapsibleRef} >
                    <li>
                      <div class="collapsible-header"><i class="material-icons">apps</i>What is RNAseq and why it is ideal as a diagnostic tool?</div>
                      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                      <div class="collapsible-header"><i class="material-icons">autorenew</i>What can you achieve with this website?</div>
                      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                      <div class="collapsible-header"><i class="material-icons">build</i>What do you need for running an analyses?</div>
                      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                      <div class="collapsible-header"><i class="material-icons">flight_takeoff</i>How to start?</div>
                      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

          </div>
          );
        </Route>
        <Route path="/analyses">
          <Numbers></Numbers>
        </Route>
        <Route path="/visualization">
          <>Mona Lisa</>
        </Route>
      </Switch>
    </>
  )
}

export default App;