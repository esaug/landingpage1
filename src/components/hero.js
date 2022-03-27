import React from "react"
import "./hero.css"




const Hero = ({imageSrc})=>{
    return  <div className="hero">
                <img src={imageSrc} alt="travel" className = "hero_image"/>
                <h1 className="hero_title"> Travel made Simple. </h1>
            </div>
}


export default Hero;