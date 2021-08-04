import './App.css';
import Numbers from "./components/Numbers"
import { Route, Switch, useHistory } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
//import ReactDOM from "react-dom";
import M from "materialize-css";
import logo from "./pictures/logogs.png";
import rna from "./pictures/rna.jpg";




function App() {
  const sidenavRef = useRef();
  const collapsibleRef = useRef();
  const modalRef = useRef();
  const history = useHistory();

  useEffect(() => {
    if (sidenavRef.current) {
      M.Sidenav.init(sidenavRef.current);
    }
    if (collapsibleRef.current) {
      M.Collapsible.init(collapsibleRef.current);
    }
    if (modalRef.current) {
      M.Modal.init(modalRef.current);
    }
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <div className="main-container">
            

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

            <div className="row">
              <div className="col s2 light-blue lighten-2 fullScreen">
                <img src={logo} alt="Gene Shining Logo" className="logo" />
                
                <div className="left-nav-links">
                <ul className="left">
                  <li>
                    <a href="#">> RNAseq</a>
                  </li>
                  <li>
                    <a href="#">> Tomato Seq</a>
                  </li>
                  <li>
                    <a href="#">> Genomes</a>
                  </li>
                  <li>
                    <a href="#">> Bioinfo</a>
                  </li>
                </ul>
                </div>
              </div>


              <div className="col s10 cyan accent-1 fullScreen center-align">
                <div className="container">
                  <img src={rna} alt="" className="rna" />
                  <div className="centered">
                    <div className="title">Welcome to<br></br> Gene Shining!
                    </div>
                  </div>
                </div>
                <div>
                  {/* <a className="btn-large blue darken-4 button" >Go to analysis</a> */}
                  <div className="row explanationPanel" style={{ marginBottom: "0" }}>
                    <div className="col s5" style={{ marginLeft: "0", paddingTop: '1.5em', paddingBottom: '0em' }}>
                      <div className="card-panel ">
                        <span className="darkRed">GeneShining is a website for the earliest possible diagnosis of latent diseases based on gene activity (RNAseq). Please upload a text file with normalized expression data for each gene of the respective organism.
                        </span>
                      </div>
                    </div>
                    <a class="waves-effect waves-light btn modal-trigger blue darken4" href="#modal1" style={{ marginTop: "1.5em" }}>Example of accepted file</a>
                    <div id="modal1" class="modal" ref={modalRef}>
                      <div class="modal-content">
                        <h4>Sample of accepted file format</h4>
                        <p>Solyc00g005000.3.1	Eukaryotic aspartyl protease family protein (AHRD V3.3 *** AT3G20015.1)	1377	0	0	0
                        </p>
                        <p>Solyc00g005040.3.1	Potassium channel (AHRD V3.3 *-* D0EM91_9ROSI)	357	0.1	0.9564	0
                        </p>
                        <p>Solyc00g005050.3.1	UPF0664 stress-induced protein C29B12.11c (AHRD V3.3 *** A0A151ST26_CAJCA)	588	96.1	0.1885	0.6
                        </p>
                        <p>Solyc00g005060.1.1	LOW QUALITY:Cyclin/Brf1-like TBP-binding protein (AHRD V3.3 --* AT2G01280.3)	273	0	0	0</p>
                        <p>Solyc00g005094.1.1	Glucose-6-phosphate 1-dehydrogenase 3, chloroplastic (AHRD V3.3 --* G6PD3_ARATH)	240	0.57	0.027	2.9
                        </p>
                      </div>
                      <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Ok</a>
                      </div>
                    </div>
                  </div>
                  <div className="btn-container">
                    <h3>Analyze your genes data now</h3>
                    <a className="btn-floating btn-large red darken-2 pulse" onClick={() => history.push("/analyses")}><i class="material-icons">find_in_page</i></a>
                  </div>
                  <div className="collapsible-container">
                    <ul className="collapsible explainBox darkRed" ref={collapsibleRef} >
                      <li>
                        <div className="collapsible-header"><i className="material-icons">apps</i>What is RNAseq and why it is ideal as a diagnostic tool?</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                      </li>
                      <li>
                        <div className="collapsible-header"><i className="material-icons">autorenew</i>What can you achieve with this website?</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                      </li>
                      <li>
                        <div className="collapsible-header"><i className="material-icons">build</i>What do you need for running an analyses?</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                      </li>
                      <li>
                        <div className="collapsible-header"><i className="material-icons">flight_takeoff</i>How to start?</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

          </div>

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