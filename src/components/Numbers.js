
import './Numbers.css';
import { Route, Switch, useHistory } from "react-router-dom";
import React, { useRef, useEffect, useState, useMemo, useCallback } from "react";
import M from "materialize-css";
import logo from "../pictures/logogs.png";
import holmes from "../pictures/holmes.jpg";
import golddig from "../pictures/golddig2.jpg";
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

                        {!analysisData && !loading && <div className="drop-zone-container"><Dropzone setAnalysisData={setAnalysisData} setLoading={setLoading} /></div>}

                        {/* first step */}
                        {loading && (<div>
                            <div class="row">
                                <div class="col s3">
                                    <div class="card blue-grey darken-1">
                                        <div class="card-content white-text">
                                            <span class="card-title center block">1. Step</span>
                                            <p>GeneShining determines how many genes are active.</p>
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
                                            <span class="card-title center block">2. Step</span>
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
                                            <span class="card-title center block">3. Step</span>
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
                                            <span class="card-title center block">4. Step</span>
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
                                        <div class="card #e57373 red lighten-2 main-card">
                                            <div class="card-content white-text">
                                                <span class="card-title center block">Overall result</span>
                                                <p>GeneShining is calculating how many genes are active (total and % of all known).</p>
                                            </div>
                                            <div class="card-action">
                                                <a>A number will appear here once the analysis is done!<i class="material-icons right">youtube_searched_for</i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <img src={golddig} alt="Sherlock Holmes" className="Inspector"></img>

                                </div>

                            </div>)}
                            {loading && (
                                <div>
                                </div>)}
                            {/* This is shown when the data are analysed */}
                        </div>)}
                        {analysisData && (<div>
                            <div class="row first-row">
                                <div class="col s12 m3">
                                    <div class="card blue-grey darken-1">
                                        <div class="card-content white-text">
                                            <span class="card-title center block">1. Step</span>
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
                                            <span class="card-title center block">2. Step</span>
                                            <p>It is analysed how many genes are changed in activity and whether those changes are typical for a disease.</p>
                                        </div>
                                        <div class="card-action">
                                            <a>{analysisData.candNumTC}</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col s12 m3">
                                    <div class="card blue-grey darken-1">
                                        <div class="card-content white-text">
                                            <span class="card-title center block">3. Step</span>
                                            <p>GeneShining is calculating for each gene whether its activity is normal or resembles more the actvity of a organism with a desease.</p>
                                        </div>
                                        <div class="card-action">
                                            <a>{analysisData.diffToDisease}</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col s12 m3">
                                    <div class="card blue-grey darken-1">
                                        <div class="card-content white-text">
                                            <span class="card-title center block">4. Step</span>
                                            <p>GeneShining is checking the description of the differently active genes for the name of the desease.</p>
                                        </div>
                                        <div class="card-action">
                                            <a>{analysisData.candNumTC} </a>
                                            <a>The indicator number is: {analysisData.candNumTC} </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row second-row">
                                <div class="col s6 offset-s3">
                                    <div class="card #e57373 red lighten-2 main-card">
                                        <div class="card-content white-text">
                                            <span class="card-title center block">Overall result</span>
                                            <p class="center block">GeneShining indicates whether the organism develops a desease.</p>
                                        </div>
                                        <div class="card-action">
                                            <a >A number will appear here once the analysis is done!<i class="material-icons right">youtube_searched_for</i></a>
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

