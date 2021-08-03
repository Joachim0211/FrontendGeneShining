
import './Numbers.css';
import { Route, Switch, useHistory } from "react-router-dom";
import React, { useRef, useEffect, useState, useMemo, useCallback } from "react";
import M from "materialize-css";
import logo from "../pictures/logogs.png";
import rna from "../pictures/rna.jpg";
import { useDropzone } from 'react-dropzone';
import Dropzone from "./Dropzone";
import DNALoader from "./DNALoader"


export default function Numbers() {


    const sidenavRef = useRef();
    const collapsibleRef = useRef();
    const history = useHistory();
    const [numbers, setNumbers] = useState([]);
    const [value, setValue] = useState(false);
    const [analysisData, setAnalysisData] = useState()
    const [loading, setLoading] = useState(false)
    //let change = 0;



    // useEffect(() => {
    //     // console.log("start")
    //     // const interval = setInterval(function () {

    //         fetch("/numbers").
    //             then(res => {
    //                 if (res.ok) {
    //                     return res.json()
    //                 }
    //             }).then(jsonRes => {
    //                 if (jsonRes) { 
    //                     //let old = numbers;     
    //                     setNumbers(jsonRes.numbersList);
    //                     setValue(!value);
    //                     // console.log(old);
    //                     // if(old != numbers){
    //                     //     change++;
    //                     //     console.log(change)
    //                     // };

    //                 }
    //             })
    //             if(numbers<=100){
    //             setValue(!value);
    //             }
    //    // }, 1000);
    //    // return () => clearInterval(interval);
    // }, [value]);    


    return (
        <>

            <div className="main-container">
                <nav className="blue darken-4 col s10 offset-s2">

                    <div className="nav-wrapper">
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

                <div className="row">
                    <div className="col s2 light-blue lighten-2 fullScreen">
                        <img src={logo} alt="Gene Shining Logo" className="logo" />
                        <button className="button">Go to analyses</button>
                        <a className="btn-large blue darken-4 button" >Go to analysis</a>
                        <a className="btn-large blue darken-4 button" onClick={() => history.push("/visualization")}>Go to Mona Lisa</a>
                    </div>
                    <div className="col s10 cyan accent-1 fullScreen">
                        
                        {!analysisData && !loading && <Dropzone setAnalysisData={setAnalysisData} setLoading={setLoading} />}
                        
                        {/* first step */}
                        {loading && (<div>
                            <div class="row">
                                <div class="col s3">
                                    <div class="card blue-grey darken-1">
                                        <div class="card-content white-text">
                                            <span class="card-title">1. Step</span>
                                            <p>GeneShining is calculating how many genes are active (total and % of all known).</p>
                                        </div>
                                        <div class="card-action">
                                            <a>A number will appear here once the analysis is done!<i class="material-icons right">loop</i></a>
                                        </div>
                                    </div>
                                    <DNALoader />
                                </div>
                              
                                <div class="col s3">
                                    <div class="card blue-grey darken-1">
                                        <div class="card-content white-text">
                                            <span class="card-title">1. Step</span>
                                            <p>GeneShining is calculating how many genes are active (total and % of all known).</p>
                                        </div>
                                        <div class="card-action">
                                            <a>A number will appear here once the analysis is done!<i class="material-icons right">loop</i></a>
                                        </div>
                                    </div>
                                    <DNALoader />
                                </div>

                                <div class="col s3">
                                    <div class="card blue-grey darken-1">
                                        <div class="card-content white-text">
                                            <span class="card-title">1. Step</span>
                                            <p>GeneShining is calculating how many genes are active (total and % of all known).</p>
                                        </div>
                                        <div class="card-action">
                                            <a>A number will appear here once the analysis is done!<i class="material-icons right">loop</i></a>
                                        </div>
                                    </div>
                                    <DNALoader />
                                </div>
                                <div class="col s3">
                                    <div class="card blue-grey darken-1">
                                        <div class="card-content white-text">
                                            <span class="card-title">1. Step</span>
                                            <p>GeneShining is calculating how many genes are active (total and % of all known).</p>
                                        </div>
                                        <div class="card-action">
                                            <a>A number will appear here once the analysis is done!<i class="material-icons right">loop</i></a>
                                        </div>
                                    </div>
                                    <DNALoader />
                                </div>


                            </div>
                            {loading && (<div>
                            <div class="row">
                                <div class="col s6 offset-s3">
                                    <div class="card #e57373 red lighten-2">
                                        <div class="card-content white-text">
                                            <span class="card-title">1. Step</span>
                                            <p>GeneShining is calculating how many genes are active (total and % of all known).</p>
                                        </div>
                                        <div class="card-action">
                                            <a>A number will appear here once the analysis is done!<i class="material-icons right">youtube_searched_for</i></a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>)}                         



                        </div>)}
                        {analysisData && (<div>
                            <div class="row">
                                <div class="col s12 m3">
                                    <div class="card blue-grey darken-1">
                                        <div class="card-content white-text">
                                            <span class="card-title">1. Step</span>
                                            <p>GeneShining is calculating how many genes are active (total and % of all known).</p>
                                        </div>
                                        <div class="card-action">
                                            <a>{analysisData.candNumTC} genes out of {analysisData.timeCounter} = {analysisData.diffToDisease}% are active in the analysed organism. <br></br> Thats in the range of a normal percentage!</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col s12 m3">
                                    <div class="card blue-grey darken-1">
                                        <div class="card-content white-text">
                                            <span class="card-title">1. Step</span>
                                            <p>GeneShining is calculating how many genes are active (total and % of all known).</p>
                                        </div>
                                        <div class="card-action">
                                            <a>{analysisData.candNumTC} genes out of {analysisData.timeCounter} = {analysisData.diffToDisease}% are active in the analysed organism. <br></br> Thats in the range of a normal percentage!</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col s12 m3">
                                    <div class="card blue-grey darken-1">
                                        <div class="card-content white-text">
                                            <span class="card-title">1. Step</span>
                                            <p>GeneShining is calculating how many genes are active (total and % of all known).</p>
                                        </div>
                                        <div class="card-action">
                                            <a>{analysisData.candNumTC} genes out of {analysisData.timeCounter} = {analysisData.diffToDisease}% are active in the analysed organism. <br></br> Thats in the range of a normal percentage!</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col s12 m3">
                                    <div class="card blue-grey darken-1">
                                        <div class="card-content white-text">
                                            <span class="card-title">1. Step</span>
                                            <p>GeneShining is calculating how many genes are active (total and % of all known).</p>
                                        </div>
                                        <div class="card-action">
                                            <a>{analysisData.candNumTC} genes out of {analysisData.timeCounter} = {analysisData.diffToDisease}% are active in the analysed organism. <br></br> Thats in the range of a normal percentage!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col s6 offset-s3">
                                    <div class="card #e57373 red lighten-2">
                                        <div class="card-content white-text">
                                            <span class="card-title">1. Step</span>
                                            <p>GeneShining is calculating how many genes are active (total and % of all known).</p>
                                        </div>
                                        <div class="card-action">
                                            <a>A number will appear here once the analysis is done!<i class="material-icons right">youtube_searched_for</i></a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>)}
                        
                        
                        
                    </div>

                </div>

            </div>
        </>
    );
}

