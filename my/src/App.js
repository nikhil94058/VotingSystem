import React, { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Placeholder from "./components/Placeholder.js";

function App() {


  return (
    <>
      <Navbar />
      <div style={{ width: '100%', height: '100%', position: 'relative', background: 'linear-gradient(0deg, #111113 0%, #111113 100%), radial-gradient(103.14% 85.54% at -3338.51% 42.77%, rgba(91.37, 127.37, 255, 0.20) 0%, rgba(91.37, 127.37, 255, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)' }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
          <div style={{ width: 'max-content', height: 'max-content', boxShadow: '0px 0px 30px #24FF00', borderRadius: 60, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ color: 'white', fontSize: 50, fontFamily: 'Rubik Glitch', fontWeight: '400', wordWrap: 'break-word', padding: "10px" }}>Ongoing Elections</div>
          </div>
        </div>
        <div style={{ width: '100px', height: '100%', mixBlendMode: 'saturation', background: 'rgba(26.63, 95.88, 199.75, 0.80)', boxShadow: '300px 300px 300px ', borderRadius: 9999, filter: 'blur(300px)' }} ></div>
        <div style={{ padding: "30px", justifyContent: "center" }} >
          <Placeholder name="UP Elections" />
          <Placeholder name="NIT Patna Student Council Election:" />
          <Placeholder name="Chhatishgarh state Election: " />

          <Placeholder name="Bangluru state Election:" />
          <Placeholder name="Gurgaon Municipal Corporation" />
        </div>

        <div style={{ color: 'white', fontSize: 35, fontFamily: 'Rubik Glitch', fontWeight: '400', wordWrap: 'break-word', marginTop: "50px" }}>Upcoming Elections :
          <br />
          <Placeholder name="ABVP Elections:" />

        </div>
        <br />
        <br />
        <br />

      </div>
    </>
  );
}

export default App;
