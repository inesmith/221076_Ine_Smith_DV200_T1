import { alignPropType } from "react-bootstrap/esm/types";
import React from 'react';
import './index.css';
import Image from './Porsche.jpeg';
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/esm/CardBody';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import CardTitle from 'react-bootstrap/esm/CardTitle';
import Button from 'react-bootstrap/Button';
import axios from "axios";

function TimelinePage() {
    return (
        <div>
            <div className='App-header'>
                <div className='App'>
                    <div className="Compare-Box" style={alignPropType= 'center'}>
                        <div className="Headerbox">
                        <h2 style={{ fontWeight: 'bold', color: '#f89306', opacity: '70%' }}>search for comparison</h2>
                        </div>
                        <div className="Box1">
                        <div className="Headerbox">
                        <h2 style={{ fontWeight: 'bold', color: '#f89306', opacity: '70%' }}>search for comparison</h2>
                        </div>
                        <div className="Box1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimelinePage;