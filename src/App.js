import React from 'react';
import './App.css';

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import BodyBlog from './Components/BodyBlog';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BodyBlog />
      <Footer />
    </div>
  );
}

export default App;
