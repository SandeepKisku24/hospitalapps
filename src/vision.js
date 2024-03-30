import React from "react";
import TopPortion from "./topPortion";
import Footer from "./footer";
import Copyright from "./copyright";
import './history.css';
import visionImg from "./vision.jpg"
const vision = ()=>{
    return(
        <div className="aboutUs">
            <TopPortion/>
            <div className="history">
                <h1> Vision and Mission </h1>
                <div className="historyContent">
                <div className="historyWriting">
                

                <p>
                “Be a Compassionate healer” is the vision of St. Luke’s Health centre and has the following beliefs:
                </p>


                <ul>
                    <li>Within the premises of the Health Centre patients are the most important persons and all the health care activities are to be directed towards the alleviation of suffering and their wellbeing.

                    </li>
                    <li>The  health centre stands for holistic health care in the footsteps of Jesus.</li>
                </ul>
                
                </div>
                <div className="historyImage">
                    <img src = {visionImg}></img>
                </div>
                </div>
            </div>
            <Footer/>
            <Copyright/>
        </div>
    )
}
export default vision;