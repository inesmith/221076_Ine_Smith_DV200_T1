import logo from './Asset 12@8x.png';
import home from './icons8-home (1).svg';
import compare from './Asset 2@8x.png';
import timeline from './Asset 1@8x.png';
import profile from './Profile.svg';
import React from 'react';
import './LandingPage.css';
import './ComparePage';
import './TimelinePage';
import Image from './Porsche.jpeg';
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/esm/CardBody';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import CardTitle from 'react-bootstrap/esm/CardTitle';
import {BrowserRouter as Router, Route, BrowserRouter, Routes} from 'react-router-dom';


function App() {
    return (
        <div className='App-header'>
            <div className='App'>
                <div id='Nav-box'>
                    <Router>
                    <nav className='Nav'>
                    <ul>
                        <li>
                            <img src={logo} className='App-logo' alt='logo' />
                        </li>

                        <li>
                            <img src={home} className='Home-icon' alt='home'  />
                        </li>

                        <li>
                            <img src={compare} className='Compare-icon' alt='compare' />
                        </li>

                        <li>
                            <img src={timeline} className='Timeline-icon' alt='timeline' />
                        </li>
                    </ul>
                    </nav>
                    <Routes>
                        <Route path='/LandingPage' element={home}/>
                        <Route path='/ComparePage' element={compare}/>
                        <Route path='/TimelinePage' element={timeline}/>
                    </Routes>
                    </Router>

                    <div>
                        <img src={profile} className='Profile' alt='profile' style={{ width: '50px', marginTop: '140px'}} />
                        <h3 style={{ fontWeight: 'bold', color: '#f89306', opacity: '70%', marginTop: '10px', width: '120px'}}>Iné</h3>
                    </div>
                </div>

                <div id='Information-box'>
                    <h1 style={{ fontWeight: 'bold', color: '#f89306', opacity: '70%' }}>Welcome Back</h1>
                    <p1>With this API you will be able to compare your favorite vintage sports car with its brand new model, <div />
                        so that you as a buyer will be able to see the difference in the specs, designs and more, <div />
                        it will also make the task of seeing which car will be best of value to you easier.
                    </p1>
                </div>

                <div className='Card' style={{ width: '1260px', }}>
                    <Card style={{ width: '550px', height: '50px' }}>
                        <CardBody style={{ width: '550px', height: '60px' }}>
                            <CardTitle style={{ fontFamily: 'sans-serif', fontSize: '25px', float: 'left', marginLeft: '30px', fontWeight: 'bold', marginTop: '10px', color: '#f89306', opacity: '70%' }}>Porsche 911 Singer</CardTitle>
                        </CardBody>
                        <Card.Img variant='top' src={Image} style={{ width: '540px', height: '480px', WebkitBorderRadius: '30px', marginTop: '10px', }} />
                    </Card>
                </div>

                <div className='Stats1'>
                    <Card style={{ width: '700px', height: '50px' }}>
                        <CardHeader style={{ fontWeight: 'bold', color: '#f89306', opacity: '70%', float: 'left', marginLeft: '30px', marginTop: '-3px' }}>Engine Size:</CardHeader>
                        <CardBody>
                            <blockquote className='blockquote mb-0'>
                                <p style={{ marginLeft: '-94px' }}>
                                    {' '}
                                    Lorem ipsum dolor it amet, consectetur adipiscing elite.
                                    {' '}
                                </p>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>

                <div className='Stats'>
                    <Card style={{ width: '700px', height: '50px' }}>
                        <CardHeader style={{ fontWeight: 'bold', color: '#f89306', opacity: '70%', float: 'left', marginLeft: '30px', marginTop: '-3px' }}>Top Speed (MpH):</CardHeader>
                        <CardBody>
                            <blockquote className='blockquote mb-0'>
                                <p style={{ marginLeft: '-140px' }}>
                                    {' '}
                                    Lorem ipsum dolor it amet, consectetur adipiscing elite.
                                    {' '}
                                </p>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>

                <div className='Stats'>
                    <Card style={{ width: '700px', height: '50px' }}>
                        <CardHeader style={{ fontWeight: 'bold', color: '#f89306', opacity: '70%', float: 'left', marginLeft: '30px', marginTop: '-3px' }}>Horsepower:</CardHeader>
                        <CardBody>
                            <blockquote className='blockquote mb-0'>
                                <p style={{ marginLeft: '-100px' }}>
                                    {' '}
                                    Lorem ipsum dolor it amet, consectetur adipiscing elite.
                                    {' '}
                                </p>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>

                <div className='Stats'>
                    <Card style={{ width: '700px', height: '50px' }}>
                        <CardHeader style={{ fontWeight: 'bold', color: '#f89306', opacity: '70%', float: 'left', marginLeft: '30px', marginTop: '-3px' }}>Accelleration (Zero-to-sizty):</CardHeader>
                        <CardBody>
                            <blockquote className='blockquote mb-0'>
                                <p style={{ marginLeft: '-228px' }}>
                                    {' '}
                                    Lorem ipsum dolor it amet, consectetur adipiscing elite.
                                    {' '}
                                </p>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>

                <div className='Stats'>
                    <Card style={{ width: '700px', height: '50px' }}>
                        <CardHeader style={{ fontWeight: 'bold', color: '#f89306', opacity: '70%', float: 'left', marginLeft: '30px', marginTop: '-3px' }}>Manufactured In:</CardHeader>
                        <CardBody>
                            <blockquote className='blockquote mb-0'>
                                <p style={{ marginLeft: '-133px' }}>
                                    {' '}
                                    Lorem ipsum dolor it amet, consectetur adipiscing elite.
                                    {' '}
                                </p>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>

                <div className='Stats'>
                    <Card style={{ width: '700px', height: '50px' }}>
                        <CardHeader style={{ fontWeight: 'bold', color: '#f89306', opacity: '70%', float: 'left', marginLeft: '30px', marginTop: '-3px' }}>Weight of the Car:</CardHeader>
                        <CardBody>
                            <blockquote className='blockquote mb-0'>
                                <p style={{ marginLeft: '-140px' }}>
                                    {' '}
                                    Lorem ipsum dolor it amet, consectetur adipiscing elite.
                                    {' '}
                                </p>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>

        </div>
    );
}

export default App;