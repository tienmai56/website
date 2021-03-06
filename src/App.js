import React from 'react';
import './App.css';
import './style/icon-font.css';
import { Route, Switch } from "react-router-dom";

import HomePage from './Components/HomePage/HomePage';
import Blog from './Components/Blog/Blog';
import Event from './Components/Event/Event';
import Hackathon from './Components/Hackathon/Hackathon';
import TechMarathon from './Components/TechMarathon/TechMarathon';
import Staffs from './Components/Staffs/Staffs';
import Contact from './Components/Contact/Contact';
import FAQ from './Components/FAQ/FAQ';
import Sponsors from './Components/Sponsors/Sponsors';
import About from './Components/About/About';

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/blog" component={Blog} />
        <Route path="/event" component={Event} />
        <Route path="/hackathon" component={Hackathon} />
        <Route path="/tech-marathon" component={TechMarathon} />
        <Route path="/staffs" component={Staffs} />
        <Route path="/contact" component={Contact} />
        <Route path="/faqs" component={FAQ} />
        <Route path="/sponsors" component={Sponsors} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
