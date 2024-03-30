import React from "react";

const footer = ()=>{
    return(
        <div className="footer">
            <div className="footerAbout">
                <div className="footerName">Mercy Hospital Poreyahat</div>
                <div className="footerContent">Mercy hospital ,Poreyahat is aimed at serving the people. The main individuals the organisation focuses is the Adivasis of the area and the relatively less privillaged communities.
                <p>
                    Our Vision is .......
                </p></div>
            </div>
            <div className="quicklinks">
                <div className="footerTitles">Links</div>
                <ul>
                    <li>About Us</li>
                    <li>FAQs</li>
                    <li>Facilities</li>
                    <li>Doctors</li>
                </ul>
            </div>
            <div className="timetableFooter">
                <div className="footerTitles">
                    Opening Hours
                </div>
                <div className="openingHours">
                <div >Mon- Fri</div>

                <div> 6 AM - 10PM</div>
                </div>
                <hr/>
                <div className="openingHours">
                <div >Sat- Sun</div>

                <div> 8 AM - 10PM</div>
                </div>
            </div>
            <div className="footerBar">
             <a href="https://www.youtube.com/@MERCYHOSPITALPOREYAHAT"><span class="material-symbols-outlined">youtube_activity</span></a>

            </div>
            
        </div>
    )
}

export default footer;