import React from "react";
import Navbar from "./Navbar";
import Section from "./main_section";
import About from "./about_section";
import Experience from "./Experience";
import Project from "./Project";
import Contact from "./Contact";
import Handles from "./handles";
import Footer from "./footer";

function App() {
    return (    
        <div>
            <Navbar />
            <Section />
            <About />
            <Experience />
            <Project />
            <Contact />
            <Handles />
            <Footer />
        </div>
    );
}



export default App;