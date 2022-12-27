import React from 'react'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Experience from "./components/experience/Experience";
import About from "./components/about/About";
import Navigation from "./components/navigation/Navigation";
import Contact from "./components/contact/Contact";

const App = ()=> {
    return (
        <>
            <Header />
            <Navigation />
            <About />
            <Experience />
            <Contact />
            <Footer />
        </>
    )
}

export default App