import React from "react";

import TopPortion from "./topPortion";
import Footer from "./footer";
import Copyright from "./copyright";
import image1 from "./gallery/icu100.jpg"
import image2 from "./gallery/machine100.jpg"
import image3 from "./gallery/lab100.jpg"
import image4 from "./gallery/lab101.jpg"
import image5 from "./gallery/patientbeds.jpg"
import image6 from "./gallery/machine101.jpg"
import './gallery.css'

const gallery = ()=>{
    return  (
        <>
            <TopPortion/>
            <div className="galheight"><h1>Gallery</h1></div>
            <div className="gallery">
            <div className="galImage"><img src ={image1}/></div>  
            <div className="galImage"><img src ={image2}/></div>  
            <div className="galImage"><img src ={image3}/></div>  
            <div className="galImage"><img src ={image4}/></div>  
            <div className="galImage"><img src ={image5}/></div>  
            <div className="galImage"><img src ={image6}/></div>  
            </div>
            <Footer/>
            <Copyright/>
        </>
    )
}

export default gallery;