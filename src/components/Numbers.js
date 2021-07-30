
//import './Numbers.css';
import { Route, Switch, useHistory } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import M from "materialize-css";
import logo from "../pictures/logogs.png";
import rna from "../pictures/rna.jpg";
import { useDropzone } from 'react-dropzone';

export default function Numbers() {

    
    const sidenavRef = useRef();
    const collapsibleRef = useRef();
    const history = useHistory();
    const [numbers, setNumbers] = useState([]);
    let change = 0;

    useEffect(() => {
        console.log("start")
        const interval = setInterval(function() { 
            
            fetch("/numbers").
            then(res => {
                if (res.ok) {
                    return res.json()
                }
            }).then(jsonRes => {
                if(jsonRes){
                    
                    setNumbers(jsonRes.numbersList)   
                }
            })
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // function triggerFetch(){        
    //     change++;
    //     console.log(change);
    //     console.log(numbers);
    // }
    // const interval = setInterval(function() { 
    //     triggerFetch(); 
    // }, 3000);
    
    
    
    

    // useEffect(()=>{

    //     let rollAnalyses = numbers[0];

    //   }, [numbers]);




    // function Basic(props) {
    //     const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    //     const files = acceptedFiles.map(file => (
    //         <li key={file.path}>
    //             {file.path} - {file.size} bytes
    //         </li>
    //     ));
    // }
    
    

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
                    </div>


                    <div className="col s10 cyan accent-1 fullScreen center-align">
                        <div>
                            {numbers && numbers.map((number, index) => <li key={index}>{number}</li>)}
                        </div>
                        <a className="btn-large blue darken-4 button" >Go to analysis</a>
                        <a className="btn-large blue darken-4 button" onClick={() => history.push("/visualization")}>Go to Mona Lisa</a>
                        <a className="btn-large blue darken-4 button" onClick={() => setInterval}>Start Analyses</a>

                        <div className="progress">
                            <div className="determinate" style={{width: `${numbers[0]}%`}}></div>
                        </div>


                    </div>
                    {/* <section className="container">
                        <div {...getRootProps({ className: 'dropzone' })}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                        <aside>
                            <h4>Files</h4>
                            <ul>{files}</ul>
                        </aside>
                    </section> */}


                </div>

            </div>
        </>
    );
}

