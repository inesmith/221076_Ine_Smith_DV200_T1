import { Link } from 'react-router-dom';
import logo from './Asset 12@8x.png';
import home from './icons8-home (1).svg';
import compare from './Asset 2@8x.png';
import timeline from './Asset 1@8x.png';
import profile from './Profile.svg';
import React from 'react';
import styling from './MainNavigation.Module.css';

function MainNavigation (){
    function MainNavigation (){
        return (
            <div className={styling['App-header']}>
                <div className='App'>
                    <div id='Nav-box'>
                        <nav className='Nav'>
                        <ul>
                            <li>
                                <Link to="/">
                                <img src={logo} className='App-logo' alt='logo' />
                                </Link>
                            </li>
    
                            <li>
                            <Link to="/">
                                <img src={home} className='Home-icon' alt='home' />
                                </Link>
                            </li>
    
                            <li>
                            <Link to="/compare-page">
                                <img src={compare} className='Compare-icon' alt='compare' />
                                </Link>
                            </li>
    
                            <li>
                            <Link to="/timeline-page">
                                <img src={timeline} className='Timeline-icon' alt='timeline' />
                                </Link>
                            </li>
                        </ul>
                        </nav>
    
                        <div>
                            <img src={profile} className='Profile' alt='profile' style={{ width: '50px', marginTop: '140px'}} />
                            <h3 style={{ fontWeight: 'bold', color: '#f89306', opacity: '70%', marginTop: '10px', width: '120px'}}>Iné</h3>
                        </div>
    
                    </div>
                </div>
            </div>
        );
    }
}

export default MainNavigation;