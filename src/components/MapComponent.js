import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

function MapComponent({ markers }) {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: -22.55620002746582, 
    lng: 17.075899124145508, 
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCU4P2nlmLu8hP8KNFkq91xYH6gtxlyunw">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10} 
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            title={marker.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;
