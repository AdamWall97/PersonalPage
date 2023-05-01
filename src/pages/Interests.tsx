import React from "react";
import GoogleMapReact from 'google-map-react';
import ParkMap, { Park } from "componets/ParkMap";

const AnyReactComponent = ({ text }) => <div>{text}</div>;



//Work in Progress
export default function Interests(){
  
  const [activePark, setActivePark] = React.useState<Park | null>(null);



  return (
    // Important! Always set the container height explicitly
    <div className="jumbotron">
      <div className="row"> 
        <div className="col-sm-4">
        <h1>Using Google maps API to create responsive maps for national parks I've been too </h1>
      
        <div>List</div>

        </div>
      <div className="col-sm-8">
        <ParkMap setActivePark={setActivePark} />
      </div>
      </div>
    </div>
   

  );
}