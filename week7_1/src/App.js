import React from "react";
import Nav from './components/Section/Nav'
import Main from './components/Main'
import Footer from './components/Section/Footer'
import './assets/sass/style.scss'

const App = () => {
    return (
        <div>
            <Nav/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default App;