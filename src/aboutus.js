import React from "react";
import TopPortion from "./topPortion";
import Footer from "./footer";
import Copyright from "./copyright";
const AboutUs = ()=>{
    return(
        <div className="aboutUs">
            <TopPortion/>
            <h1>About Us</h1>
            <Footer/>
            <Copyright/>
        </div>
    )
}
export default AboutUs;