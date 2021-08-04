import './App.css';
import Numbers from "./components/Numbers"
import { Route, Switch, useHistory } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
//import ReactDOM from "react-dom";
import M from "materialize-css";
import logo from "./pictures/logogs.png";
import rna from "./pictures/rna.jpg";

const styles = {
  'left-navbar': {
    fontSize: '24px',
    color: "#fff",

  },
  title: {
    fontSize: '48px',
    color: "#222",
    fontWeight: 'bold',
    marginBottom: '40px'
  },
}



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
      <ul className="sidenav" id="mobile-demo" ref={sidenavRef}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Tomato Seq</a>
        </li>
        <li>
          <a href="#">Genomes</a>
        </li>
        <li>
          <a href="#">BioInfo</a>
        </li>
      </ul>
      <nav class="nav-extended">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo"><img src={logo} width="140" height="60" alt="Logo" /></a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="sass.html">Home</a></li>
            <li><a href="badges.html">Tomato Seq</a></li>
            <li><a href="collapsible.html">Genomes</a></li>
            <li><a href="collapsible.html">BioInfo</a></li>
          </ul>
        </div>
        {/* <div class="nav-content">
                <ul class="tabs tabs-transparent">
                  <li class="tab"><a href="#test1">Test 1</a></li>
                  <li class="tab"><a class="active" href="#test2">Test 2</a></li>
                  <li class="tab"><a href="#test3">Disabled Tab</a></li>
                  <li class="tab"><a href="#test4">Test 4</a></li>
                </ul>
              </div> */}
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>

      {/* <div id="test1" class="col s12">Test 1</div>
        <div id="test2" class="col s12">Test 2</div>
        <div id="test3" class="col s12">Test 3</div>
        <div id="test4" class="col s12">Test 4</div> */}

      <Switch>
        <Route exact path="/">
          <div className="main-container">




            {/* here starts */}

            {/* <div className='row wrapper'>
              <div className="col s3 teal fullScreen container" style={styles['left-navbar-container']} >
                <img src={logo} alt="Gene Shining Logo" className="logo" />
                <div className="input-field">
                  <input value="Tomato" id="organism" type="text" className="validate" />
                  <label className="active" for="organism">Organism to analyse</label>
                </div>
                <div className="left-nav-links" style={styles['left-navbar']} >
                  <ul className="left" >
                    <li>
                      <a href="#" className='white-text' >Home</a>
                    </li>
                    <li>
                      <a href="#" className='white-text'> Tomato Seq</a>
                    </li>
                    <li>
                      <a href="#" className='white-text'> Genomes</a>
                    </li>
                    <li>
                      <a href="#" className='white-text'> Bioinfo</a>
                    </li>
                  </ul>
                
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
              </div> */}


            <div className=" main-page-content" style={styles['left-navbar-container']}>
              <div className="container main-content" >
                <div className="centered">
                  {/* <p style={styles['title']}>Welcome to Gene Shining!
                    </p> */}
                </div>
              </div>
              <div className="container main-content" >
                {/* <a className="btn-large blue darken-4 button" >Go to analysis</a> */}
                <div className="row explanationPanel">
                  <div>
                    <div className="main-title-content">
                      <span className="darkRed card-title main-card-title"> <span className="main-git-title">GeneShining</span>
                        <br />
                        <br />
                        The earliest possible diagnosis of latent diseases based on gene activity (RNAseq).
                        <br />
                        Please upload a text file with normalized expression data for each gene of the respective organism.
                      </span>
                      <div>
                        <img src="/dna.png" alt="Hero" width="400" height="400" style={{ paddingTop: 100, marginBottom: 40, marginLeft: 30 }} />
                      </div>
                      <a class="waves-effect btn-large modal-trigger blue darken-4 modal-1" href="#modal1">Example of accepted file</a>
                    </div>

                  </div>



                  <div id="modal1" class="modal" ref={modalRef}>
                    <div class="modal-content">
                      <h4>Sample of accepted file format</h4>
                      <br />
                      <p>Solyc00g005000.3.1	Eukaryotic aspartyl protease family protein (AHRD V3.3 *** AT3G20015.1)	1377	0	0	0
                      </p>
                      <br />
                      <p>Solyc00g005040.3.1	Potassium channel (AHRD V3.3 *-* D0EM91_9ROSI)	357	0.1	0.9564	0
                      </p>
                      <br />
                      <p>Solyc00g005050.3.1	UPF0664 stress-induced protein C29B12.11c (AHRD V3.3 *** A0A151ST26_CAJCA)	588	96.1	0.1885	0.6
                      </p>
                      <br />
                      <p>Solyc00g005060.1.1	LOW QUALITY:Cyclin/Brf1-like TBP-binding protein (AHRD V3.3 --* AT2G01280.3)	273	0	0	0</p>
                      <p>Solyc00g005094.1.1	Glucose-6-phosphate 1-dehydrogenase 3, chloroplastic (AHRD V3.3 --* G6PD3_ARATH)	240	0.57	0.027	2.9
                      </p>
                    </div>
                    <div class="modal-footer">
                      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Ok</a>
                    </div>
                  </div>
                </div>
                <div className="btn-container anaylize-btn-container">
                  <h3>Analyze your genes data now</h3>
                  <a className="btn-floating btn-large red darken-2 pulse floating-red-btn" onClick={() => history.push("/analyses")}><i class="material-icons">find_in_page</i></a>
                </div>
                {/* <div className="collapsible-container">
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
                </div> */}
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
      <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l8 offset-l2 s12">
              <ul className="footer-links-custom">
                <li><a class="grey-text text-lighten-3" href="#!">What is RNAseq and why it is ideal as a diagnostic tool?</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">What can you achieve with this website?</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">What do you need for running an analyses?</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">How to start?</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            © 2021 Gene Shining
          </div>
        </div>
      </footer>
    </>
  )
}

export default App;