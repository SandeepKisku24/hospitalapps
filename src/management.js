import React from "react";
import TopPortion from "./topPortion";
import Footer from "./footer";
import Copyright from "./copyright";
import person1 from "./Dr. Mary Laly K A MBBS.jpg"; 
// import person2 from "./Sr. Scholastica CTC.png"; 
import './person.css'
import './history.css';
const management = ()=>{
    return(
        <div className="aboutUs">
            <TopPortion/>
            <div className="history">
                <h1> Management </h1>
                <div className="persons">
                    <div className="person1">
                    <div className="personImage">
                        <img src={person1} alt="img not found"></img>
                    </div>
                    <div className="personPos"> Director </div>
                    <div> Dr. Mary Laly K A MBBS</div>
                    </div>
                    <div className="person1">
                    <div className="personImage">
                        <img src alt="img"></img>
                    </div>
                    <div className="personPos"> Administrator </div>
                    <div> Sr. Scholastica CTC</div>
                    </div>
                </div>
            </div>
            <Footer/>
            <Copyright/>
        </div>
    )
}
export default management;