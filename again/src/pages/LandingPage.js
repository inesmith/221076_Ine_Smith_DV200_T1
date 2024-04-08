import React from 'react';
import './index.css';
import Image from './Porsche.jpeg';
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/esm/CardBody';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import CardTitle from 'react-bootstrap/esm/CardTitle';

function LandingPage() {
    return (
        <div className='App-header'>
            <div className='App'>
                <div id='Information-box'>
                    <h1 style={{ fontWeight: 'bold', color: '#f89306', opacity: '70%' }}>Welcome Back</h1>
                    <h2>With this API you will be able to compare your favorite vintage sports car with its brand new model, <div />
                        so that you as a buyer will be able to see the difference in the specs, designs and more, <div />
                        it will also make the task of seeing which car will be best of value to you easier.
                    </h2>
                    <div>
                        <Button id="button" variant="link" style={{ backgroundColor: '#f89306', WebkitBorderRadius: '30px', width: '100px', height: '30px', marginTop: '20px', borderBlockStyle: 'outset', opacity: '70%' }}>Start</Button>
                    </div>
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


export default LandingPage;
