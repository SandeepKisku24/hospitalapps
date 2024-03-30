import React from "react";
import TopPortion from "./topPortion";
import Footer from "./footer";
import Copyright from "./copyright";
import doc1 from "./gallery/doctors/Dr. Mary Laly K A MBBS.jpg";
import doc2 from "./gallery/doctors/Dr. Christin Mary C MBBS.jpg";
import doc3 from "./gallery/doctors/Dr. Voilet Murmu.jpg";
import doc4 from "./gallery/doctors/Dr Rahul.jpg";
import doc5 from "./gallery/doctors/Dr karuna.jpg";
import doc6 from "./gallery/doctors/Dr. Grace Maria Mathew MBBS.jpg";
import doc7 from "./gallery/doctors/Dr. Bobby.jpg";

import Doc from "./doc";
const doctor = ()=>{
    return(
        <>
        <TopPortion/>
        <div className="doctorsOuter">
            <div className="doctors">
            
            <Doc docimg={doc1} docName={"Dr. Mary Laly K A CTC "} docDegree={"MBBS, MD Internal Medicine"}/>
            <Doc docimg={doc2} docName={"Christin Mary C CTC"} docDegree={"MBBS"}></Doc>
            <Doc docimg={doc3} docName={"Dr. Voilet Murmu"} docDegree={"MBBS"}/>
            <Doc docimg={doc4} docName={"Dr. Rahul Lakshmi Shankar Singh"} docDegree={"MBBS, MS (Surgeon)"}/>
            <Doc docimg={doc6} docName={"Dr. Grace Maria Mathew"} docDegree={"MBBS"}/>
            <Doc docimg={doc5} docName={"Sr. Dr. Karuna Kerketta"} docDegree={"BHMS"}/>
            <Doc docimg={doc7} docName={"Dr. Bobby Kumari"} docDegree={"BDS"}/>
            
            </div>
        </div>
        <Footer/>
        <Copyright/>
        </>
    )
}
export default doctor;