import React from 'react';
import Header from './landing/header/Header';
import './App.scss';
import Navbar from './common/Navbar';
import About from './landing/About';
import TimeLine from './landing/experience/TimeLine';
import LanguagesDisplay from './landing/experience/LanguagesDisplay';

const App = () => {
    return (
        <div id="main">
            <Navbar />
            <Header />
            <About />
            <TimeLine />
            <LanguagesDisplay />
        </div>
    );
}

export default App;