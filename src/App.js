import React from 'react';
import './App.css';
import './style/icon-font.css';

import { Route, Switch } from "react-router-dom";

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

import Blog from './Components/Blog/Blog';
import HomePage from './Components/HomePage/HomePage';
import Event from './Components/Event/Event';
import Hackathon from './Components/Hackathon/Hackathon';
import TechMarathon from './Components/TechMarathon/TechMarathon';
import Staffs from './Components/Staffs/Staffs';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact={true} path="/" component={HomePage}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/event" component={Event} />
        <Route path="/hackathon" component={Hackathon} />
        <Route path="/tech-marathon" component={TechMarathon} />
        <Route path="/staffs" component={Staffs} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
