import React from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import "./CustomMarker.css";
import { Park } from './ParkMap';

type MyProps = {
    park: Park,
    setActivePark:(park: Park) => void 
}
class CustomMarker extends React.Component<MyProps> {
    state = {
        showInfoWindow: false
    };
    handleMouseOver = e => {
        this.setState({
            showInfoWindow: true
        });
    };
    handleMouseExit = e => {
        this.setState({
            showInfoWindow: false
        });
    };
    handleClick = e => {
        this.props.setActivePark(this.props.park)
    }

    render() {
        const { showInfoWindow } = this.state;
        const { park, setActivePark } = this.props;
        return (
            <Marker position={park.position} onMouseOver=
{this.handleMouseOver} onMouseOut={this.handleMouseExit} onClick={this.handleClick}>
                {showInfoWindow && (
                    <InfoWindow>
                        <h4 className="p-2">{park.info}</h4>
                    </InfoWindow>
                )}
            </Marker>
        );
    }
}
export default CustomMarker;