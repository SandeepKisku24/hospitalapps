import React from "react";
import './App.css';
import TopPortion from "./topPortion";
import Heading from './heading';
import Menu from './menubar';
import Slide from './slides';
import Service from './topService';
import Bar from './bar';
import Facility from './facilities';
import DirDesk from './directorDesk';
import Footer from './footer';
import Copyright from './copyright';
import { useState } from "react";
const Home = ()=>{
    const [menu, selectmenu] = useState("one");
    return(
      <div className="home">
       <TopPortion/>
      <div>
      <Slide ></Slide>
      <Service></Service>
      <Facility></Facility>
      <DirDesk></DirDesk>
      <Footer/>
      <Copyright/>
      {/* <rssapp-carousel id="mkPXF3LX6jUTsy6z"></rssapp-carousel> */}
      </div>     
      </div>
    )
}

export default Home;