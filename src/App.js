import React from 'react';
import { Slide } from 'react-slideshow-image'
import Slideshow from './components/Slider'
import './App.css';
import Main from './components/Main'
import Header from'./components/Header';
function App() {
  return (
    <div className="App">
     <Header/>
     <Slideshow/>

    </div>
  );
}

export default App;
