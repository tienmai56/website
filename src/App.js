import React from 'react';
import './App.css';
import './style/icon-font.css';
import { Route, Switch } from "react-router-dom";

import AppSwitcher from './AppSwitcher';

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="(/|/blog|/event|/hackathon|/tech-marathon|/staffs|/contact|/faqs|/sponsors|/about)" component={AppSwitcher}/>
      <Footer />
    </div>
  );
}

export default App;
