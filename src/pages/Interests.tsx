import React from "react";
import GoogleMapReact from 'google-map-react';
import ParkMap, { Park } from "componets/ParkMap";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Interests(){
  
  const [activePark, setActivePark] = React.useState<Park | null>(null);


  console.log(activePark);

  return (
    // Important! Always set the container height explicitly
    <div className="jumbotron">
      <div className="row"> 
        <div className="col-sm-4">
        <h1>Hiking and API's</h1>
        <h2>
        Below is a list of all the national parks I've been too and a photo to go with it.
        </h2>
        <div>List</div>

        </div>
      <div className="col-sm-8">
        <ParkMap setActivePark={setActivePark} />
      </div>
      </div>
    </div>
   

  );
}