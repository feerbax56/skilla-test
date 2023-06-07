import React from 'react';
import './App.css';
import Menu from './pages/menu/menu';
import Header from './pages/header/header';
import Content from './pages/content/content';

function App() {
    return (
        <div className="app-wrapper ">
            <div className='menu-container'>
                <Menu/>
            </div>

            <Header/>
            <div className="app-wrapper-content">
                <Content/>

            </div>
        </div>
    );
}

export default App;
