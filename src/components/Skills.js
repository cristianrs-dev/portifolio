import React from "react";
import '../styles/App.css';
import html from '../img/html-5.png';
import css from '../img/css.png';
import js from '../img/js.png';
import bootstrap from '../img/bootstrap.png';
import figma from '../img/figma.png';
import rea from '../img/react.svg'
import nod from '../img/nodejs (1).png';
import mong from '../img/mongodb-original-wordmark.svg';
import fire from '../img/file-type-firebase.svg';
import jav from '../img/java-original.svg';
import Mysq from '../img/mysql.png';

function Skills(){
    return(
        
        <div>

        <div className="titulo-skills">
             <p>My Skills</p>
        </div>
           
        
                 
           
        <div className="skills">
            <div className="item-card-skill" >
                <img className="img-skill" src={html} alt="html" ></img>
            </div>
            <div className="item-card-skill" >
                <img className="img-skill" src={css} alt="css" ></img>
            </div>
            <div className="item-card-skill" >
                <img className="img-skill" src={js} alt="javascript" ></img>
            </div>
            <div className="item-card-skill" >
                <img className="img-skill" src={bootstrap} alt="bootstrap" ></img>
            </div>
            <div className="item-card-skill" >
                <img className="img-skill" src={figma} alt="figma" ></img>
            </div>
            <div className="item-card-skill" >
                <img className="img-skill" src={rea} alt="react.js" ></img>
            </div>
            <div className="item-card-skill" >
                <img className="img-skill" src={nod} alt="node.js" ></img>
            </div>
            <div className="item-card-skill" >
                <img className="img-skill" src={jav} alt="java" ></img>
            </div>
            <div className="item-card-skill" >
                <img className="img-skill" src={mong} alt="mongoDB" ></img>
            </div>
            <div className="item-card-skill" >
                <img className="img-skill" src={fire} alt="firebase" ></img>
            </div>
            <div className="item-card-skill" >
                <img className="img-skill" src={Mysq} alt="Mysql"></img>
            </div>
        </div>
        
        </div>

    );
}

export default Skills;