import React from "react";
import Bar from "./bar";
import Heading from "./heading";
import Menu from "./menubar";

const topPortion =()=>{
    return(
        <>
            <Bar></Bar>
            <div className="title">
            <Heading name ={"St. Luke Hospital"} place = {"Dakaita"}/>
            <Menu/>
            </div>
        </>
    )
}

export default topPortion;