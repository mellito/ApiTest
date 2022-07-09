import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import PropTypes from "prop-types";
import "./mapView.css";

function MapView({ lat, lng, address }) {
  return (
    <MapContainer center={[lat, lng]} zoom={1} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>{address}</Popup>
      </Marker>
    </MapContainer>
  );
}

MapView.propTypes = {
  lat: PropTypes.string.isRequired,
  lng: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default MapView;
