import React from "react";
import { Marker, InfoWindow, GoogleMap, LoadScript} from "@react-google-maps/api";
import CustomMarker from "./CustomMarker";
const AnyReactComponent = ({ text }) => <div>{text}</div>;


export interface Park {
  id: number,
  position: {
    lat: number,
    lng: number
  },
  info: string,
}

const pins: Park[] = [{
  id: 1,
  position: {
    lat: 48.4711,
    lng: -92.8458
  },
  info: "Voyagers National Park",
},
{
  id: 2,
  position: {
    lat: 46.9790,
    lng: -103.5387
  },
  info: "Theodore Roosevelt National Park",
},
{
  id: 3,
  position: {
    lat: 43.8854,
    lng: -102.3397
  },
  info: "Badlands National Park",
},
{
  id: 4,
  position: {
    lat: 44.4280,
    lng: -110.5885
  },
  info: "Yellowstone National Park",
},
{
  id: 5,
  position: {
    lat: 43.7904,
    lng: -110.6818
  },
  info: "Grand Teton National Park",
},
{
  id: 6,
  position: {
    lat: 48.7596,
    lng: -113.7870
  },
  info: "Galcier National Park",
},
{
  id: 7,
  position: {
    lat: 47.8021,
    lng: -123.6044,
  },
  info: "Olympic National Park",
},
{
  id: 8,
  position: {
    lat: 46.8800,
    lng: -121.7269,
  },
  info: "Mount Rainier National Park",
},
{
  id: 9,
  position: {
    lat: 37.8651,
    lng: -119.5383,
  },
  info: "Yosemite National Park",
},

{
  id: 10,
  position: {
    lat: 36.4864,
    lng: -118.5658,
  },
  info: "Sequoia National Park",
},

{
  id: 11,
  position: {
    lat: 36.4864,
    lng: -112.3535,
  },
  info: "Grand Canyon National Park",
},

{
  id: 12,
  position: {
    lat: 38.2136,
    lng: -109.9025,
  },
  info: "Canyonlands National Park",
},

{
  id: 13,
  position: {
    lat: 37.2982,
    lng: -113.0263,
  },
  info: "Zion National Park",
},
{
  id: 14,
  position: {
    lat: 38.73321,
    lng: -109.5925,
  },
  info: "Arches National Park",
},

{
  id: 15,
  position: {
    lat: 44.3386,
    lng: -68.2733,
  },
  info: "Acadia National Park",
}]

export default function ParkMap(props: {setActivePark: (park: Park) => void }){
 
  const containerStyle = {
    width: '100%',
    height: '100vh'
  };

  const center = {
    lat: 36.850033,
    lng: -95.6500523
  };
  
  return (
    <LoadScript
        googleMapsApiKey={ process.env.REACT_APP_GOOGLE_API_KEY!}
    >
     <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
      >
        {
          pins.map((pin: Park) => {
            return <CustomMarker {...{
              park: pin,
              setActivePark: props.setActivePark,
            }}/>
          })
        }
      </GoogleMap>
    </LoadScript>

  );
}