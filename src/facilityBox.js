import React from "react";

const facilityBox = ({ficon, faciname })=>{
    return(
        <div className="facilityBox">
            <div className="facilityIcon"><span class="material-symbols-outlined">{ficon}</span></div>
            <div className="facilityName"> {faciname} </div>
            <div className="readMore">Read More</div>
        </div>
    )

}
export default facilityBox;