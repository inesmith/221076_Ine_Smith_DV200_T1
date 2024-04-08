import React from 'react';
import './index.css';
import Image from './Porsche.jpeg';
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/esm/CardBody';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import CardTitle from 'react-bootstrap/esm/CardTitle';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function ComparePage() {
    return (
        <div>
            <div className='App-header'>
                <div className='App'>
                    <div id='Compare-box'>
                        <h1 style={{ fontWeight: 'bold', color: '#f89306', opacity: '70%' }}>Compare Two Cars</h1>
                        <div className="Box1">
                            <div className="Info-Box">
                                <div className='Card' style={{ width: '70px', }}>
                                    <Card.Img variant='top' src={Image} style={{ width: '540px', height: '480px', WebkitBorderRadius: '30px', marginTop: '10px', }} />
                                    <Card style={{ width: '550px', height: '50px' }}>
                                        <CardBody style={{ width: '70px', height: '20px' }}>
                                            <CardTitle style={{ fontFamily: 'sans-serif', fontSize: '15px', float: 'left', marginLeft: '5px', fontWeight: 'bold', marginTop: '2px', color: '#f89306', opacity: '70%' }}>Car Model</CardTitle>
                                        </CardBody>
                                    </Card>
                                    <Card style={{ width: '550px', height: '50px' }}>
                                        <CardBody style={{ width: '70px', height: '20px' }}>
                                            <CardTitle style={{ fontFamily: 'sans-serif', fontSize: '15px', float: 'left', marginLeft: '5px', fontWeight: 'bold', marginTop: '2px', color: '#f89306', opacity: '70%' }}>Engine Size</CardTitle>
                                        </CardBody>
                                    </Card>
                                    <Card style={{ width: '550px', height: '50px' }}>
                                        <CardBody style={{ width: '70px', height: '20px' }}>
                                            <CardTitle style={{ fontFamily: 'sans-serif', fontSize: '15px', float: 'left', marginLeft: '5px', fontWeight: 'bold', marginTop: '2px', color: '#f89306', opacity: '70%' }}>Top Speed (MpH)</CardTitle>
                                        </CardBody>
                                    </Card>
                                    <Card style={{ width: '550px', height: '50px' }}>
                                        <CardBody style={{ width: '70px', height: '20px' }}>
                                            <CardTitle style={{ fontFamily: 'sans-serif', fontSize: '15px', float: 'left', marginLeft: '5px', fontWeight: 'bold', marginTop: '2px', color: '#f89306', opacity: '70%' }}>Horsepower</CardTitle>
                                        </CardBody>
                                    </Card>
                                    <Card style={{ width: '550px', height: '50px' }}>
                                        <CardBody style={{ width: '70px', height: '20px' }}>
                                            <CardTitle style={{ fontFamily: 'sans-serif', fontSize: '15px', float: 'left', marginLeft: '5px', fontWeight: 'bold', marginTop: '2px', color: '#f89306', opacity: '70%' }}>Accelleration</CardTitle>
                                        </CardBody>
                                    </Card>
                                    <Card style={{ width: '550px', height: '50px' }}>
                                        <CardBody style={{ width: '70px', height: '20px' }}>
                                            <CardTitle style={{ fontFamily: 'sans-serif', fontSize: '15px', float: 'left', marginLeft: '5px', fontWeight: 'bold', marginTop: '2px', color: '#f89306', opacity: '70%' }}>Manufactured</CardTitle>
                                        </CardBody>
                                    </Card>
                                    <Card style={{ width: '550px', height: '50px' }}>
                                        <CardBody style={{ width: '70px', height: '20px' }}>
                                            <CardTitle style={{ fontFamily: 'sans-serif', fontSize: '15px', float: 'left', marginLeft: '5px', fontWeight: 'bold', marginTop: '2px', color: '#f89306', opacity: '70%' }}>Weight</CardTitle>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </div>
                        <div className="Box2">
                            <div className="Info-Box">
                                <div className='Card' style={{ width: '70px', }}>
                                    <Card.Img variant='top' src={Image} style={{ width: '540px', height: '480px', WebkitBorderRadius: '30px', marginTop: '10px', }} />
                                    <Card style={{ width: '550px', height: '50px' }}>
                                        <CardBody style={{ width: '70px', height: '20px' }}>
                                            <CardTitle style={{ fontFamily: 'sans-serif', fontSize: '15px', float: 'left', marginLeft: '5px', fontWeight: 'bold', marginTop: '2px', color: '#f89306', opacity: '70%' }}>Car Model</CardTitle>
                                        </CardBody>
                                    </Card>
                                    <Card style={{ width: '550px', height: '50px' }}>
                                        <CardBody style={{ width: '70px', height: '20px' }}>
                                            <CardTitle style={{ fontFamily: 'sans-serif', fontSize: '15px', float: 'left', marginLeft: '5px', fontWeight: 'bold', marginTop: '2px', color: '#f89306', opacity: '70%' }}>Engine Size</CardTitle>
                                        </CardBody>
                                    </Card>
                                    <Card style={{ width: '550px', height: '50px' }}>
                                        <CardBody style={{ width: '70px', height: '20px' }}>
                                            <CardTitle style={{ fontFamily: 'sans-serif', fontSize: '15px', float: 'left', marginLeft: '5px', fontWeight: 'bold', marginTop: '2px', color: '#f89306', opacity: '70%' }}>Top Speed (MpH)</CardTitle>
                                        </CardBody>
                                    </Card>
                                    <Card style={{ width: '550px', height: '50px' }}>
                                        <CardBody style={{ width: '70px', height: '20px' }}>
                                            <CardTitle style={{ fontFamily: 'sans-serif', fontSize: '15px', float: 'left', marginLeft: '5px', fontWeight: 'bold', marginTop: '2px', color: '#f89306', opacity: '70%' }}>Horsepower</CardTitle>
                                        </CardBody>
                                    </Card>
                                    <Card style={{ width: '550px', height: '50px' }}>
                                        <CardBody style={{ width: '70px', height: '20px' }}>
                                            <CardTitle style={{ fontFamily: 'sans-serif', fontSize: '15px', float: 'left', marginLeft: '5px', fontWeight: 'bold', marginTop: '2px', color: '#f89306', opacity: '70%' }}>Accelleration</CardTitle>
                                        </CardBody>
                                    </Card>
                                    <Card style={{ width: '550px', height: '50px' }}>
                                        <CardBody style={{ width: '70px', height: '20px' }}>
                                            <CardTitle style={{ fontFamily: 'sans-serif', fontSize: '15px', float: 'left', marginLeft: '5px', fontWeight: 'bold', marginTop: '2px', color: '#f89306', opacity: '70%' }}>Manufactured</CardTitle>
                                        </CardBody>
                                    </Card>
                                    <Card style={{ width: '550px', height: '50px' }}>
                                        <CardBody style={{ width: '70px', height: '20px' }}>
                                            <CardTitle style={{ fontFamily: 'sans-serif', fontSize: '15px', float: 'left', marginLeft: '5px', fontWeight: 'bold', marginTop: '2px', color: '#f89306', opacity: '70%' }}>Weight</CardTitle>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div>
                                    <Button id="button" variant="link" style={{ backgroundColor: '#f89306', WebkitBorderRadius: '30px', width: '100px', height: '30px', marginTop: '20px', borderBlockStyle: 'outset', opacity: '70%' }}>Start</Button>
                                </div>

                                <div id='Information-box'>
                                    <h1 style={{ fontWeight: 'bold', color: '#f89306', opacity: '70%' }}>Line Graph</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComparePage;