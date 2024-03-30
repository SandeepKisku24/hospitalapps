import React from "react";
import FacilityBox from "./facilityBox";
const facility = ()=>{
    return(
        <div className="facility">
            <div className="facilityTitle">
                <h1>facilities available</h1>
            </div>
            <div className="faclitiesContent">
                <FacilityBox ficon = "home_health" faciname="Operation Theatre"/>
                <FacilityBox ficon = "radiology" faciname="Imaging Services" />
                <FacilityBox ficon = "lab_research" faciname="Laboratory Services"/>
                <FacilityBox ficon = "vaccines" faciname="Infection control"/>
                <FacilityBox ficon = "medication" faciname="24 hrs Pharmacy"/>
                <FacilityBox ficon = "clinical_notes" faciname="24 hrs Resident Medical Officers"/>
                <FacilityBox ficon = "wheelchair_pickup" faciname="Home Health Care"/>
                <FacilityBox ficon = "ecg" faciname="ECG and other facilities"/>
            </div>
        </div>
    )
}
export default facility;