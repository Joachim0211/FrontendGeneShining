
import './Numbers.css';
import { Route, Switch, useHistory } from "react-router-dom";
import React, { useRef, useEffect, useState, useMemo, useCallback } from "react";
import M from "materialize-css";
import logo from "../pictures/logogs.png";
import Dropzone from "./Dropzone";
import DNALoader from "./DNALoader"


export default function Numbers({ onClick }) {


    const sidenavRef = useRef();
    const collapsibleRef = useRef();
    const history = useHistory();
    const [analysisData, setAnalysisData] = useState()
    const [loading, setLoading] = useState(false)


    return (
        <>

            <div className="main-container">

                {/* here starts */}

                <div className=" root-row">
                    {/* <div className="col s2 light-blue lighten-2 fullScreen">
                        <img src={logo} alt="Gene Shining Logo" className="logo" />
                        <div className="left-nav-links">
                            <ul className="left">
                                <li>
                                    <a href="#"> RNAseq</a>
                                </li>
                                <li>
                                    <a href="#"> Tomato Seq</a>
                                </li>
                                <li>
                                    <a href="#"> Genomes</a>
                                </li>
                                <li>
                                    <a href="#"> Bioinfo</a>
                                </li>
                            </ul>
                        </div>
                        <button className="button" onClick={loading ? "" : () => history.push("/")}>Back to main page</button>
                    </div> */}
                    <button className="homeButton" onClick={loading ? "" : () => history.push("/")}>&#8592; &nbsp; Home</button>
                    <div className="col s12 fullScreen">

                        {!analysisData && !loading && <div className="drozone-container"><Dropzone setAnalysisData={setAnalysisData} setLoading={setLoading} /></div>}

                        {/* first step */}
                        
                        {loading && (<div>
                            <div><h1 className="headline">What happens in the background?</h1></div>

                            <div class="row">
                                <div class="col s12 m4 l3">
                                    <div class="card blue-grey lighten-1">
                                        <div class="card-content white-text">
                                            <span class="card-title center block">1. Active Genes </span>
                                            <p>GeneShining determines how many genes are active.<br></br></p>
                                        </div>
                                        <div class="card-action">
                                            <p className="card-title-main">An indicator number will appear here once the analysis is done!<i class="material-icons right">loop</i></p>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div class="col s12 m4 l3">
                                    <div class="card blue-grey lighten-1">
                                        <div class="card-content white-text">
                                            <span class="card-title center block">2. Gene Activity Changes</span>
                                            <p>It is analysed how many genes are changed in activity and whether those changes are typical for a disease.</p>
                                        </div>
                                        <div class="card-action">
                                            <p className="card-title-main">An indicator number will appear here once the analysis is done!<i class="material-icons right">loop</i></p>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div class="col s12 m4 l3">
                                    <div class="card blue-grey lighten-1">
                                        <div class="card-content white-text">
                                            <span class="card-title center block">3. Differences to Normal</span>
                                            <p>GeneShining is calculating whether gene activity is normal or resembles more the actvity of a organism with a desease.</p>
                                        </div>
                                        <div class="card-action">
                                            <p className="card-title-main">A number will appear here once the analysis is done!<i class="material-icons right">loop</i></p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="col s12 m4 l3">
                                    <div class="card blue-grey lighten-1">
                                        <div class="card-content white-text">
                                            <span class="card-title center block">4. Gene Name</span>
                                            <p>GeneShining is checking the description of the differently active genes for the name of the desease.</p>
                                        </div>
                                        <div class="card-action">
                                            <p className="card-title-main">A number will appear here once the analysis is done!<i class="material-icons right">loop</i></p>
                                        </div>
                                    </div>
                                   
                                </div>


                            </div>
                            {loading && (<div>
                                <div class="row" >
                                    <div class="col s12 m4 l6 offset-l3">
                                        <div class="card green lighten-1 main-card">
                                            <div class="card-content white-text">
                                                <span class="card-title card-title-main-one center block ">Overall result</span>
                                                <p className="card-title-main ">GeneShining is calculating whether the organism develops a disease.</p>
                                            </div>
                                            <div class="card-action ">
                                            </div>
                                        </div>
                                       <div className="dnaPic"><DNALoader  /><DNALoader  /></div> 
                                    </div>
                                    
                                    
                                </div>
                                     
                            </div>)}
                            
                            
                            {/* This is shown when the data are analysed */}
                        </div>)}
                        {analysisData && (<div>
                            <div class="row first-row">
                                <div class="col s12 m4 l3">
                                    <div class="card blue-grey lighten-1">
                                        <div class="card-content white-text">
                                            <span class="card-title center block">1. Active Genes </span>
                                            <p>GeneShining is calculating how many genes are active (total and % of all known).</p>
                                        </div>
                                        <div class="card-action">
                                            <p>{analysisData.timeCounter}  {`(${analysisData.timeCounterPC}%)`}<br></br>{analysisData.number1}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col s12 m4 l3">
                                    <div class="card blue-grey lighten-1">
                                        <div class="card-content white-text">
                                            <span class="card-title center block">2. Gene Activity Changes</span>
                                            <p>It is analysed how many genes are changed in activity and whether those changes are typical for a disease.</p>
                                        </div>
                                        <div class="card-action">
                                            <p>{analysisData.number2}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col s12 m4 l3">
                                    <div class="card blue-grey lighten-1">
                                        <div class="card-content white-text">
                                            <span class="card-title center block">3. Differences to Normal</span>
                                            <p>GeneShining is calculating whether gene activity is normal or resembles more the actvity of an organism with a desease.</p>
                                        </div>
                                        <div class="card-action">
                                            <p>{analysisData.number3}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col s12 m4 l3">
                                    <div class="card blue-grey lighten-1">
                                        <div class="card-content white-text">
                                            <span class="card-title center block">4. Gene Name</span>
                                            <p>GeneShining is checking the description of the differently active genes for the name of the desease.</p>
                                        </div>
                                        <div class="card-action">
                                            <p>{analysisData.number4} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row second-row">
                                <div class="col s12 m4 l6 offset-l3">
                                    <div class="card green main-card">
                                        <div class="card-content white-text">
                                            <span class="card-title center block">Overall result</span>
                                            <p class="center block">GeneShining indicates whether the organism develops a desease.</p>
                                        </div>
                                        <div class="card-action">
                                            <p >{analysisData.mainNumber > 0 ? <p>Your organism develops potassium deficiency.</p> : <p>GeneShining indicates whether the organism develops a desease.</p>}</p>
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

