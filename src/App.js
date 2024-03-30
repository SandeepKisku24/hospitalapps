
// import { useEffect, useState } from 'react';
import Home from './home';
import History from './history';
import Vision from './vision';
import Management from './management';
import Gallery from './gallery';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  // useEffect(()=>{
  //   console.log(menu);
  // },menu)
  return (
    <>
      
      <Router>
        <Routes>
          <Route exact path ="/" element = {<Home/>}/>
          <Route path ="/history" element = {<History/>}/>
          <Route path ="/history" element = {<History/>}/>
          <Route path ="/vision" element = {<Vision/>}/>
          <Route path ="/management" element = {<Management/>}/>
          <Route path ="/gallery" element = {<Gallery/>}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
