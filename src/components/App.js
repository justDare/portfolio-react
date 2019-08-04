import React from 'react';
import Header from './landing/header/Header';
import './App.scss';
import Navbar from './common/Navbar';
import About from './landing/About';

const App = () => {
    return (
        <div id="main">
            <Navbar />
            <Header />
            <About />
        </div>
    );
}

export default App;