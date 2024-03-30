import React from "react";
import TopPortion from "./topPortion";
import Footer from "./footer";
import Copyright from "./copyright";
import './history.css';
import community from "./community_programs_image.jpg"
const history = ()=>{
    return(
        <div className="aboutUs">
            <TopPortion/>
            <div className="history">
                <h1> History </h1>
                <div className="historyContent">
                <div className="historyWriting">
                St. Luke’s Health Centre at Dakaita, in Godda district of Jharkhand, INDIA was established in 1974 by sisters of Gokhla Teresian Carmelite society for the medically underserved population of the locality.

                <p>
                St. Luke's Health Centre conducts health education and free medical check up quarterly in the remote village of Surrounding areas. It conducts palliative care home visit bimonthly in the surrounding villages to take care of the palliative care and geriatric patients. 
                </p>
                
                </div>
                <div className="historyImage">
                    <img src = {community}></img>
                </div>
                </div>
            </div>
            <Footer/>
            <Copyright/>
        </div>
    )
}
export default history;