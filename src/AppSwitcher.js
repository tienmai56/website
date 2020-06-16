import React, { useState, useEffect } from 'react';

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

const components = ["/", "/blog", "/event", "/hackathon", "/tech-marathon", "/staffs", "/contact", "/faqs", "/sponsors", "/about"];

const AppSwitcher = (props) => {
  const [displayComponent, setDisplayComponents] = useState(components[0]);
  useEffect(() => {
    setDisplayComponents(props.location.pathname);
  }, [props.location.pathname]);
  return(
    <div className="App">
      <div hidden={displayComponent !== components[0]}>
        <HomePage/>
      </div>
      <div hidden={displayComponent !== components[1]}>
        <Blog/>
      </div>
      <div hidden={displayComponent !== components[2]}> 
        <Event />
      </div>
      <div hidden={displayComponent !== components[3]}>
        <Hackathon dontDownload={displayComponent !== components[3]}/>
      </div>
      <div hidden={displayComponent !== components[4]}>
        <TechMarathon />
      </div>
      <div hidden={displayComponent !== components[5]}>
        <Staffs />
      </div>
      <div hidden={displayComponent !== components[6]}>
        <Contact />
      </div>
      <div hidden={displayComponent !== components[7]}>
        <FAQ />
      </div>
      <div hidden={displayComponent !== components[8]}>
        <Sponsors />
      </div>
      <div hidden={displayComponent !== components[9]}>
        <About />
      </div>
    </div>
  );
};

export default AppSwitcher;