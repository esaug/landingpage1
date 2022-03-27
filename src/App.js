import logo from './logo.svg';
import './App.css';
import img1 from './assets/country_image_Japan.jpeg'
import img2 from './assets/puntacancun.jpeg'
import img3 from './assets/german2.jpeg'
import Hero from "./components/hero"
import Slider from "./components/slider"
import Navbar from "./components/nav";
import React, { useState } from 'react';



const navbarLinks= [ {url :"#", title :"Home"}, 
                     {url :"#", title :"Trips"}, 
                     {url :"#", title :"Rewards"} ]


function App() {

 

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks}/>
      <Hero imageSrc={img1}/>
      <Slider imageSrc={img2} 
      title={"Be an explorer"} 
      subtitle={"Our platform offers a wide variety of unique travel location"
      }/>
      <Slider imageSrc={img3} 
      title={"Memories for a lifetime"}
      subtitle={"Your dream vacation is only a few clicks away"}
      flipped = {true
      }
      />
    </div>
  );
}

export default App;
