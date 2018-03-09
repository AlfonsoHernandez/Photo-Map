import React, { Component } from 'react';
import './Marker.css';

class Marker extends Component {
    render() {
        return (
            <div><img id="marker" src={require("../Assets/marker.png")} alt="Marker"/></div>
        );
    }
}

export default Marker;
