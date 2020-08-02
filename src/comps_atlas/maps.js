import React, { useEffect } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';

function MapApp(props){
  
  return(
      <Map center={[props.lat,props.leng]} zoom={7}>
            <TileLayer
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
              position={[props.lat,props.leng ]}
            />
          </Map>  
  )
}

export default MapApp
