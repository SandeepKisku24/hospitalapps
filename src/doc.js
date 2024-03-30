import React from "react";

import "./doctor.css"
const doc = ({docimg, docName, docDegree})=>{
    return(
        <div className="doc">
                <div className="docImage">
                    <img src={docimg}></img>
                </div>
                <div className="docName">{docName}</div>
                <div className="docDegree">{docDegree}</div>
        </div>
    )
}
export default doc;