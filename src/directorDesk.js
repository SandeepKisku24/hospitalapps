import React from "react";
import directorImg from "./director.png"

const dirDesk = ()=>{
    return(
        <div className="directorDesk">
            
            <div className="dirDesk">
            <div className="dirTitle"><h1>Director's Message</h1></div>
            <div className="innerDirectorDesk">
                <div className="dirMessage"> 
            W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.

            Copyright 1999-2024 by Refsnes Data. All Rights Reserved. W3Schools is Powered by W3.CSS.
            </div>
            <div className="dirImage">
                <div className="dirImageInner">
                <img src={directorImg}></img>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}


export default dirDesk;