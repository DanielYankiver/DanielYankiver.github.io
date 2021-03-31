import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Home from "./Home";
import SoftwareEngineer from "./SoftwareEngineer";
import Filmmaker from "./Filmmaker";
import BioContact from "./BioContact";
import Resume from "./Resume";
import Blogs from "./Blogs";


function App() {
  const [page, setPage] = useState("/")


  return (
    <div className="App">
      <h1>LOGO</h1>
      <div className="nav-div">
        <NavBar onChangePage={setPage} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/software-engineer">
            <SoftwareEngineer />
          </Route>
          <Route exact path="/filmmaker">
            <Filmmaker />
          </Route>
          <Route exact path="/bio-contact">
            <BioContact />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route exact path="/blogs">
            <Blogs />
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route>
        </Switch>
      </div>
        <Footer />
    </div>
  );
}

export default App;
