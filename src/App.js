import logo from './logo.svg';
import './App.css';
import Numbers from "./components/Numbers"
//import { Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
//import ReactDOM from "react-dom";

function App() {
  return ( 
    
    <div className="App">
      <div >
        <div class="row">
          <div class="col s12 blue accent-2">
            <img class="img-responsive left"  src="pictures/cave.jpg" alt="Cave"/>
            <img class="img-responsive right" src="pictures/cluster.png" alt="Cave"/>
            <h1 class="center">Welcome to GeneShining</h1>   
          </div>       
          
          <div class="col s2 grey contleft">
            <a></a>
          </div>

          <div class="col s10 contleft">
            
          </div>
        </div>
      </div>
    </div> 
  );
}

export default App;
