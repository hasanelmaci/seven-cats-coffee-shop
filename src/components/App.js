import React from 'react';
import '../scss/main.scss';
import Navbar from './Navbar'
import Opening from './Opening'
import About from './About'
import Gallery from './Gallery';


function App() {
    return (
        <div className='app'>
            <Navbar/>
            <Opening/>
            <About/>
            <Gallery/>
            
        </div>
    )
}

export default App

