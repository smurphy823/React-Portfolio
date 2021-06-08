import React from "react";
import profile_pic from '../assets/imgs/profile_pic.jpg'

function Intro() {
    return(
        <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
            Hi, I am Stephanie <strong>Murphy</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">Beginner Full Stack Developer</p>
        
        <img src={profile_pic} alt="Stephanie's 4th image" className="intro__img"/>
        </section>
    );
}

export default Intro;