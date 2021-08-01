
import './Numbers.css';
import { Route, Switch, useHistory } from "react-router-dom";
import React, { useRef, useEffect, useState, useMemo, useCallback } from "react";
import M from "materialize-css";
import logo from "../pictures/logogs.png";
import rna from "../pictures/rna.jpg";
import { useDropzone } from 'react-dropzone';
import Dropzone from "./Dropzone";

export default function Numbers() {


    const sidenavRef = useRef();
    const collapsibleRef = useRef();
    const history = useHistory();
    const [ numbers, setNumbers ] = useState([]);
    const [value, setValue] = useState(false);
    //let change = 0;
    


    useEffect(() => {
        // console.log("start")
        // const interval = setInterval(function () {
        
            fetch("/numbers").
                then(res => {
                    if (res.ok) {
                        return res.json()
                    }
                }).then(jsonRes => {
                    if (jsonRes) { 
                        //let old = numbers;     
                        setNumbers(jsonRes.numbersList);
                        setValue(!value);
                        // console.log(old);
                        // if(old != numbers){
                        //     change++;
                        //     console.log(change)
                        // };

                    }
                })
                if(numbers<=100){
                setValue(!value);
                }
       // }, 1000);
       // return () => clearInterval(interval);
    }, [value]);    

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
                        <div className="input-field">
                            Place for the dropzone
                        </div>
                        <button className="button">Got to analyses</button>
                        <a className="btn-large blue darken-4 button" >Go to analysis</a>
                        <a className="btn-large blue darken-4 button" onClick={() => history.push("/visualization")}>Go to Mona Lisa</a>
                        <a className="btn-large blue darken-4 button" onClick={() => setInterval}>Start Analyses</a>

                    </div>


                    <div className="col s10 cyan accent-1 fullScreen center-align">
                        <div>
                            {numbers && numbers.map((number, index) => <li key={index}>{number}</li>)}
                        </div>
                        <Dropzone /> 
                        <div className="progress">
                            <div className="determinate" style={{ width: `${numbers[0]}%` }}></div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

